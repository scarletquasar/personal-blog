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
        github: 'https://github.com/scarletquasar',
        bluesky: 'https://bsky.app/profile/scarletrose.xyz'
    }

    static theme = {
        current: localStorage.getItem('theme-current') ?? 'dark',
        light: {
            primary: '#23272a',
            secondary: '#fffcfc',
            secondaryTransparent: 'rgba( 255, 255, 255, 0.6 )',
            borders: '#e8e9ed',
            primaryAlternative: '#5e6870',
            backgroundHover: '#f6f7f8'
        },
        dark: {
            primary: '#e8e9ed',
            secondary: '#23272a',
            secondaryTransparent: 'rgba( 0, 0, 0, 0.6 )',
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

function loadUrlPost() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('currentPost')) {
        App.currentPost = [urlParams.get('currentPost'), App.consts.current];
    }
}

function tryRecoverPost(post) {
    const base = Viewer(`
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
    }));
    
    if (!post) {
        return base;
    }

    const target = App.loadedPosts.find(post => {
        return post.id === App.currentPost[0] && post.language === App.currentPost[1]
    });

    if (!target) {
        return base;
    }

    const result = Viewer(target.content);

    console.log(result)
    return result;
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
                    'App.currentPost = [`about-me`, App.consts.current]',
                    App.consts[App.consts.current].about
                ],
                [App.consts[App.consts.current].rss]: [
                    2, 
                    'window.open(`./rss.xml`)',
                    App.consts[App.consts.current].rss
                ],
                [App.theme.current === 'light' ? "🌙" : "☀️"]: [
                    3, 
                    'App.toggleTheme()',
                    `${App.consts[App.consts.current].themeText} ${App.theme.current === 'light' ? "dark" : "light"}`
                ],
                ["🌎"]: [
                    4, 
                    'App.toggleLanguage()',
                    `${App.consts[App.consts.current].languageText} ${App.consts.current === 'ptbr' ? "english" : "brasileira"}`
                ],
                ["💻"]: [
                    5,
                    `window.open('${App.consts.github}')`,
                    'GitHub'
                ],
                ["🦋"]: [
                    6,
                    `window.open('${App.consts.bluesky}')`,
                    'BlueSky'
                ],
            })
        )
    );

    App.pageContent.push('<div style="margin-top: 60px"></div>');
    App.pageContent.push(tryRecoverPost(App.currentPost));

    const currentTextContent = App.currentPageContent.join('');
    const newTextContent = App.pageContent.join('');

    if (currentTextContent != newTextContent) {
        App.currentPageContent = App.pageContent.map(x => x);
        document.body.innerHTML = newTextContent;
        document.body.style.backgroundColor = App.theme[App.theme.current].secondary;
        hljs.highlightAll();

        if (App.currentPost) {
            document.body.innerHTML = document.body.innerHTML + `
            <script id="comments" src="https://giscus.app/client.js"
                    data-repo="somecodingwitch/personal-blog"
                    data-repo-id="R_kgDOKaHijQ"
                    data-category="General"
                    data-category-id="DIC_kwDOKaHijc4CiskD"
                    data-mapping="title"
                    data-strict="0"
                    data-reactions-enabled="1"
                    data-emit-metadata="0"
                    data-input-position="bottom"
                    data-theme="dark"
                    data-lang="en"
                    crossorigin="anonymous"
                    async>
            </script>
            `
            history.pushState({},"",window.location.origin + "?currentPost=" + App.currentPost[0])
            return;
        }

        history.pushState({},"",window.location.origin);
    }
}

loadUrlPost();
loadPosts();
updatePageContent();
setInterval(updatePageContent, 10);
