async function apiCall(url) {
    return fetch(url)
        .then((response) => response.json())
        .catch((err) => {
            console.warn("Something went wrong.", err);
            throw new Error("Error Loading articles");
        });
}


function appendArticles(articles, main) {
    articles.forEach((article) => {
        const { title, description, urlToImage, content } = article;

        const articleViewItem = document.createElement("div");
        articleViewItem.className = "news";
        articleViewItem.onclick = () => {
            localStorage.setItem("article", JSON.stringify(article));
            window.location.href = "/news.html"
        };

        const articleImage = document.createElement("img");
        articleImage.className = "image";
        articleImage.src = urlToImage;

        const articleTitle = document.createElement("div");
        articleTitle.className = "title";
        articleTitle.innerText = title;

        const articleDescription = document.createElement("div");
        articleDescription.className = "description";
        articleDescription.innerText = description;


        const { pathname } = window.location;
        if (pathname === '/news.html') {
            const articleContent = document.createElement("div");
            articleContent.className = "content";
            articleContent.innerText = content;
            articleContent.style.display = "block";

            articleViewItem.appendChild(articleTitle);
            articleViewItem.appendChild(articleImage);
            articleViewItem.appendChild(articleContent);
        } else {
            articleViewItem.appendChild(articleTitle);
            articleViewItem.appendChild(articleDescription);
            articleViewItem.appendChild(articleImage);
        }

        main.appendChild(articleViewItem);
    });

}

export { apiCall, appendArticles }



