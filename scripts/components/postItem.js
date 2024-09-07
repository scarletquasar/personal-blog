const PostItem = (options) => {
    const style = `
        color: ${App.theme[App.theme.current].primary};
        background-color: ${App.theme[App.theme.current].secondary};
        width: 100%;
    `;

    const styleDivisory = `
        width: 100%;
        margin-block: 15px;
        border-bottom: 1px solid ${App.theme[App.theme.current].borders};
    `;

    const styleContent = `
        padding-inline: 30px
    `;

    const styleTitle = `
        font-size: x-large;
        font-family: 'GeistBold';
    `;

    const styleDate = `
        font-size: medium;
        font-family: 'Courier New';
        color: ${App.theme[App.theme.current].primary};
    `;

    const styleDescription = `
        font-size: large;
        font-family: 'Geist';
        color: ${App.theme[App.theme.current].primaryAlternative};
    `;

    return options.language === App.consts.current ? `
        <section aria-label="" style="${style}">
            <section style="${styleContent}">
                <p style="${styleTitle}">${options.title}</p>
                <p style="${styleDate}">${options.date}</p>
                <p style="${styleDescription}">${options.description}</p>
            </section>
            <div style="${styleDivisory}"></div>
        </section>
    ` : '';
}