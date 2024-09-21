class App {
    static currentPost = null;

    static consts = {
        current: localStorage.getItem('language-current') ?? 'ptbr',
        ptbr: {
            title: "Scarlet Rose",
            subtitle: "Postagens",
            blog: "Blog",
            about: "Sobre",
            rss: "RSS",
            newsletter: "Newsletter",
            searchPlaceholder: "Pesquise por título, descrição, conteúdo ou data...",
            themeText: "Mudar para tema",
            languageText: "Mudar para linguagem"
        },
        enus: {
            title: "Scarlet Rose",
            subtitle: "Posts",
            blog: "Blog",
            about: "About",
            rss: "RSS",
            newsletter: "Newsletter",
            searchPlaceholder: "Search for title, description, content or timestamps...",
            themeText: "Change to theme",
            languageText: "Change to language"
        },
        github: 'https://github.com/somecodingwitch',
        bluesky: 'https://bsky.app/profile/scarletrose.xyz'
    }

    static theme = {
        current: localStorage.getItem('theme-current') ?? 'light',
        light: {
            primary: '#23272a',
            secondary: '#fffcfc',
            borders: '#e8e9ed',
            primaryAlternative: '#5e6870',
            backgroundHover: '#f6f7f8'
        },
        dark: {
            primary: '#e8e9ed',
            secondary: '#23272a',
            borders: '#fffcfc',
            primaryAlternative: '#5e6870',
            backgroundHover: '#404040'
        }
    }

    static loadedPosts = [];
    static searchResultPosts = [];
    static isUserSearching = false;

    static currentPageContent = [];
    static pageContent = [];

    static toggleTheme() {
        this.theme.current = this.theme.current === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme-current', this.theme.current);
    }

    static toggleLanguage() {
        this.consts.current = this.consts.current === 'ptbr' ? 'enus' : 'ptbr';
        localStorage.setItem('language-current', this.consts.current);
    }
}

function updatePageContent() {
    document.title = App.consts[App.consts.current].title;
    App.pageContent.length = 0;

    App.pageContent.push(
        Navbar(
            Title(App.consts[App.consts.current].title),
            NavButtons({
                [App.consts[App.consts.current].blog]: [
                    0, 
                    'App.currentPost = null', 
                    App.consts[App.consts.current].blog
                ],
                [App.consts[App.consts.current].about]: [
                    1, 
                    'navigate(`about`)',
                    App.consts[App.consts.current].about
                ],
                [App.consts[App.consts.current].rss]: [
                    2, 
                    'navigate(`rss`)',
                    App.consts[App.consts.current].rss
                ],
                [App.consts[App.consts.current].newsletter]: [
                    3, 
                    'navigate(`newsletter`)',
                    App.consts[App.consts.current].newsletter
                ],
                [App.theme.current === 'light' ? "🌙" : "☀️"]: [
                    4, 
                    'App.toggleTheme()',
                    `${App.consts[App.consts.current].themeText} ${App.theme.current === 'light' ? "dark" : "light"}`
                ],
                ["🌎"]: [
                    5, 
                    'App.toggleLanguage()',
                    `${App.consts[App.consts.current].languageText} ${App.consts.current === 'ptbr' ? "english" : "brasileira"}`
                ],
                ["💻"]: [
                    6,
                    `window.open('${App.consts.github}')`,
                    'GitHub'
                ],
                ["🦋"]: [
                    7,
                    `window.open('${App.consts.bluesky}')`,
                    'BlueSky'
                ],
            })
        )
    );

    App.pageContent.push('<div style="margin-top: 60px"></div>');
    App.pageContent.push(
        App.currentPost 
        ? Viewer("<br>" + App.loadedPosts.find(post => {
            return post.id === App.currentPost[0] && post.language === App.currentPost[1]
        })
        .content)
        : Viewer(`
            ${App.consts[App.consts.current].subtitle}
            ${ViewerSearch()}
        `,
        App[App.isUserSearching ? 'searchResultPosts' : 'loadedPosts'].map(post => {
            return PostItem({
                id: post.id,
                title: post.title,
                language: post.language,
                date: post.date,
                description: post.description
            })
        }))
    );

    const currentTextContent = App.currentPageContent.join('');
    const newTextContent = App.pageContent.join('');

    if (currentTextContent != newTextContent) {
        App.currentPageContent = App.pageContent.map(x => x);
        document.body.innerHTML = newTextContent;
        document.body.style.backgroundColor = App.theme[App.theme.current].secondary;
        hljs.highlightAll();
    }
}

loadPosts();
updatePageContent();
setInterval(updatePageContent, 10);