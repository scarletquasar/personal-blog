const Viewer = (contentBefore = "", contentAfter = []) => {
    const style = `
        color: ${App.theme[App.theme.current].primary};
        background-color: ${App.theme[App.theme.current].secondary};
        font-family: 'GeistBold';
        font-size: x-large;

        padding-top: 20px;
        width: 100%;
    `.replace(/(\r\n|\n|\r)/gm,"");

    const styleDivisory = `
        width: 100%;
        margin-block: 15px;
        border-bottom: 1px solid ${App.theme[App.theme.current].borders};
    `.replace(/(\r\n|\n|\r)/gm,"");

    const styleContent = `
        padding-inline: 30px;
    `.replace(/(\r\n|\n|\r)/gm,"");

    const styleAfter = `
        overflow-y: scroll;
    `.replace(/(\r\n|\n|\r)/gm,"");

    return `
        <main aria-label="" style="${style}">
            <section style="${styleContent}">
                ${contentBefore}
            </section>
            <div style="${styleDivisory}"></div>
            <section style="${styleAfter}">
                ${contentAfter.join('')}
            </section>
        </main>
    `
}