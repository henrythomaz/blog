
document.addEventListener('DOMContentLoaded', function () {
    fetch("/posts")
    .then((response) => response.json())
    .then((posts) => {
        const postContainer = document.getElementById('posts');
        postContainer.innerHTML = posts.map(
            (post) => `
            <div class="post ${post.category}">
            ${
                post.image
                ? `<img class="post-img" src="${post.image}" alt="${post.title}">`
                : ""
            }
            <h3 class="post-category">${post.category}</h3>
            <a href="/post-details/${encodeURIComponent(
                post.title.trim().replace(/\s+/g, "-").toLowerCase()
            )}">
            <h2 class="post-title">${post.title}</h2>
            </a>
            <div class="post-desc">${post.content}</div>
            <a href="/post-details/${encodeURIComponent(
                post.title.trim().replace(/\s+/g, "-").toLowerCase()
            )}" class="read-more">Leia Mais</a>

            </div>
            `
        )
        .join("");
    })
    .catch((error) => {
        console.error("Error fetching posts:", error);
        const postContainer = document.getElementById('posts');
        postContainer.innerHTML = "<p>Error fetching posts.</p>";
    });
});