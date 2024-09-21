async function loadPosts() {
    const index = await fetch('/posts/index.json')
        .then(data => data.json());

    for(const fileName of index) {
        const postText = await fetch(`/posts/${fileName}.md`)
            .then(data => data.text());

        const postItemData = postText
            .replaceAll('\r', '\n')
            .split("@@@@@")
            .filter(post => post.trim() != "")
            .map(post => {
                const metadata = post
                    .trim()
                    .split('\n')[0]
                    .split('|')
                    .map(item => item.trim());

                const postContent = post
                    .trim()
                    .split('\n')
                    .slice(1)
                    .join('\n');

                return {
                    id: metadata[0],
                    title: metadata[1],
                    language: metadata[2],
                    date: new Date(metadata[3]).toLocaleDateString(),
                    description: metadata[4],
                    content: marked.parse(postContent)
                }
        });
        App.loadedPosts.push(...postItemData);
        App.loadedPosts.sort((a, b) => {
            return new Date(b.date) - new Date(a.date);
        });
    }
}