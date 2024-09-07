const ViewerSearchState = {
    data: "",
    lastEvent: null,
    manage(event) {
        if (event.code.startsWith('Key')) {
            setTimeout(() => {
                ViewerSearchState.data = event.target.value;
                searchForPost(ViewerSearchState.data);
            }, 10);
            setTimeout(() => {
                const target = document.getElementById(event.target.id);
                target.focus();
                target.setSelectionRange(target.value.length, target.value.length);
            }, 20)
        }
    }
}

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
            <input
                id="search"
                style="${style}" 
                type="text"
                value="${ViewerSearchState.data}"
                placeholder="${App.consts[App.consts.current].searchPlaceholder}"
                onkeydown="ViewerSearchState.manage(event, this)">
        </div>
    `
}