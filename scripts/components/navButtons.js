const NavButtons = (content = []) => {
    const style = `
        display: flex;
        flex-direction: row-reverse;
        gap: 1%;
    `;

    const styleButton = `
        transition: 0.3s;
        color: ${App.theme[App.theme.current].primary};
        text-decoration: none;
        font-family: 'GeistBold';
        font-size: large;
        cursor: pointer;
    `;

    return `
        <div style="${style}">
            ${Object
                .entries(content)
                .map(entry => `
                    <a
                        aria-label="${entry[1][2]}"
                        onClick="${entry[1][1]}"
                        onMouseEnter="this.style.color = '${App.theme[App.theme.current].primaryAlternative}'"
                        onMouseLeave="this.style.color = '${App.theme[App.theme.current].primary}'"
                        style="${styleButton}">
                        [${entry[0]}]
                    </a>
                `)
                .sort((a, b) => a[1][0] - b[1][0])
                .reverse()
                .join(" ")
            }
        </div>
    `
}