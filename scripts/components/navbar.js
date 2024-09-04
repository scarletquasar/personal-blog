const Navbar = (contentLeft = "", contentRight = "") => {
    const style = `
        display: flex;
        justify-content: center;
        position: fixed;
        margin: 0;
        padding: 20px;

        top: 0;
        left: 0;
        right: 0;

        width: 100%;
        border-bottom: 0.1em solid ${App.theme[App.theme.current].borders};
        background-color: ${App.theme[App.theme.current].secondary};
    `.replace(/(\r\n|\n|\r)/gm,"");

    return `
        <nav style="${style}">
            ${contentLeft}
            ${contentRight}
        </nav>
    `
}