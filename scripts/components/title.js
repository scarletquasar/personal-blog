const Title = (content = "") => {
    const style = `
        color: white;
        text-shadow: 2px 0 #000, -2px 0 #000, 0 2px #000, 0 -2px #000,
             1px 1px #000, -1px -1px #000, 1px -1px #000, -1px 1px #000;
        font-family: 'GeistBold';
        font-size: ${screen.width > 450 ? 'xx-large' : 'x-large'};
    `;

    return `
        <div aria-label="${content}" style="${style}">
            ${content}
        </div>
    `
}