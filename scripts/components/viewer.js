const Viewer = (content = "") => {
    const style = `
        color: ${App.theme[App.theme.current].primary};
        background-color: ${App.theme[App.theme.current].secondary};
        font-family: 'GeistBold';
        font-size: x-large;

        width: 100%;
        padding: 30px;
    `.replace(/(\r\n|\n|\r)/gm,"");

    return `
        <div aria-label="" style="${style}">
            ${content}
        </div>
    `
}