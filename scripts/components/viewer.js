const Viewer = (contentBefore = "", contentAfter = []) => {
    const style = `
        color: ${App.theme[App.theme.current].primary};
        background-color: ${App.theme[App.theme.current].secondary};
        font-family: 'GeistBold';
        font-size: x-large;

        padding-top: 30px;
        width: 100%;
    `;

    const styleDivisory = `
        width: 100%;
        margin-block: 20px;
        border-bottom: 1px solid ${App.theme[App.theme.current].borders};
    `;

    const styleContent = `
        padding-inline: 30px;
    `;

    return `
        <main aria-label="" style="${style}">
            <section style="${styleContent}">
                ${contentBefore}
            </section>
            <div style="${styleDivisory}"></div>
            <section>
                ${contentAfter.join('')}
            </section>
        </main>
    `
}