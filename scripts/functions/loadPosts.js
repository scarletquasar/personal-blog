async function loadPosts() {
    const index = await fetch('../../posts/index.json')
        .then(data => data.json());

    for(const fileName of index) {
        const postText = await fetch(`../../posts/${fileName}.md`)
            .then(data => data.text());

        const postItemData = postText
            .replaceAll('\r', '\n')
            .split("@@@@@")
            .map(post => {
                console.log(post)
                const metadata = post
                    .trim()
                    .split('\n')
                    .filter(item => item != '')
                    .slice(0, 5);

                const postContent = post
                    .replace('\n', '')
                    .split('\n')
                    .slice(5)
                    .join('\n');

                return {
                    title: metadata[0],
                    language: metadata[1],
                    date: new Date(metadata[2]).toLocaleDateString(),
                    description: metadata[3],
                    content: marked.parse(postContent)
                }
        });

        App.loadedPosts.push(...postItemData);
        App.loadedPosts.sort((a, b) => {
            return new Date(b.date) - new Date(a.date);
        });
    }
}