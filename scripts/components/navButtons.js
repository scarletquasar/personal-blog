const NavButtons = (content = []) => {
    const style = `
        display: flex;
        flex-direction: row-reverse;
        justify-content: center;
        gap: 1%;
    `;

    const styleButton = `
        transition: 0.3s;
        color: white;
        text-decoration: none;
        font-family: 'GeistBold';
        font-size: ${screen.width > 450 ? 'large' : 'small'};
        cursor: pointer;
        text-shadow: 2px 0 #000, -2px 0 #000, 0 2px #000, 0 -2px #000,
             1px 1px #000, -1px -1px #000, 1px -1px #000, -1px 1px #000;
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