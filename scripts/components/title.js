const Title = (content = "") => {
    const style = `
        color: ${App.theme[App.theme.current].primary};
        font-family: 'GeistBold';
        font-size: x-large;

        width: 45%;
    `.replace(/(\r\n|\n|\r)/gm,"");

    return `
        <div aria-label="${content}" style="${style}">
            ${content}
        </div>
    `
}