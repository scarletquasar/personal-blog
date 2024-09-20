const Title = (content = "") => {
    const style = `
        color: ${App.theme[App.theme.current].primary};
        font-family: 'GeistBold';
        font-size: x-large;
    `;

    return `
        <div aria-label="${content}" style="${style}">
            ${content}
        </div>
    `
}