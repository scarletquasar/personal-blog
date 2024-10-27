const Navbar = (contentLeft = "", contentRight = "") => {
    const style = `
        display: flex;
        align-items: center;
        flex-direction: column;
        position: fixed;
        margin: 0;
        padding: 20px;

        top: 0;
        left: 0;
        right: 0;
        border-bottom: 1px solid ${App.theme[App.theme.current].borders};
        background-color: ${App.theme[App.theme.current].secondaryTransparent};
        background: url('/assets/galaxy.gif');
        background-size: cover;
        backdrop-filter: blur(10px);
    `;

    return `
        <nav id="navbar" style="${style}">
            ${contentLeft}
            ${contentRight}
        </nav>
    `
}