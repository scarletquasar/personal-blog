function searchForPost(terms) {
    if (!terms.length) {
        App.searchResultPosts = App.loadedPosts;
        App.isUserSearching = false;
        return;
    }

    App.isUserSearching = true;
    App.searchResultPosts = App.loadedPosts.filter(post => {
        return (
            post.title.includes(terms)
            || post.content.includes(terms)
            || post.date.toString().includes(terms)
        )
    })
}