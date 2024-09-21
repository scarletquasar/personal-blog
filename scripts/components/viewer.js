const Viewer = (contentBefore = "", contentAfter = []) => {
    const style = `
        color: ${App.theme[App.theme.current].primary};
        background-color: ${App.theme[App.theme.current].secondary};
        font-family: 'GeistBold';
        font-size: x-large;

        padding-top: ${screen.width > 450 ? '60px' : '40px'};
        width: 100%;
    `;

    const styleDivisory = `
        width: 100%;
        margin-block: 20px;
       
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