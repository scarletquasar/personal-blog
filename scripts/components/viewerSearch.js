const ViewerSearch = () => {
    const style = `
        font-family: 'GeistBold'; 
        font-size: large; 
        width: 500px; 
        padding: 5px; 
        border: 1px solid black; 
        border-radius: 5px
    `;

    return `
        <div style="margin-top: 10px">
            <input style="${style}" type="text" placeholder="${App.consts[App.consts.current].searchPlaceholder}">
        </div>
    `
}