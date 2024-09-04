class App {
    static consts = {
        current: 'ptbr',
        ptbr: {
            title: "Scarlet Victoria",
            subtitle: "Blog técnico",
            blog: "Blog",
            about: "Sobre",
            rss: "RSS",
            newsletter: "Newsletter",
            searchPlaceholder: "Pesquise por algo..."
        },
        enus: {
            title: "Scarlet Victoria",
            subtitle: "Technical blog",
            blog: "Blog",
            about: "About",
            rss: "RSS",
            newsletter: "Newsletter",
            searchPlaceholder: "Type and enter..."
        }
    }

    static theme = {
        current: 'light',
        light: {
            primary: '#23272a',
            secondary: '#ffffff',
            borders: '#e8e9ed',
            primaryAlternative: '#5e6870'
        },
        dark: {
            primary: '#e8e9ed',
            secondary: '#23272a',
            borders: '#e8e9ed',
            primaryAlternative: '#5e6870'
        }
    }

    static currentPageContent = [];
    static pageContent = [];
}

function updatePageContent() {
    document.title = App.consts[App.consts.current].title;

    App.pageContent.length = 0;

    App.pageContent.push(
        Navbar(
            Title(App.consts[App.consts.current].title),
            NavButtons({
                [App.consts[App.consts.current].blog]: 'Navigation.goTo(`blog`)',
                [App.consts[App.consts.current].about]: 'Navigation.goTo(`about`)',
                [App.consts[App.consts.current].rss]: 'Navigation.goTo(`rss`)',
                [App.consts[App.consts.current].newsletter]: 'Navigation.goTo(`newsletter`)'
            })
        )
    );

    const currentTextContent = App.currentPageContent.toString();
    const newTextContent = App.pageContent.toString();

    if (currentTextContent != newTextContent) {
        App.currentPageContent = App.pageContent.map(x => x);
        document.body.innerHTML = newTextContent;
    }
}

updatePageContent();
setInterval(updatePageContent, 10);