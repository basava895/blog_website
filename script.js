function addPost() {
  const title = document.getElementById("title").value.trim();
  const content = document.getElementById("content").value.trim();

  if (title === "" || content === "") {
    alert("Please fill in both title and content.");
    return;
  }

  const postContainer = document.createElement("div");
  postContainer.className = "post";

  const postTitle = document.createElement("h2");
  postTitle.innerText = title;

  const postContent = document.createElement("p");
  postContent.innerText = content;

  postContainer.appendChild(postTitle);
  postContainer.appendChild(postContent);

  document.getElementById("posts").prepend(postContainer);

  // Clear inputs
  document.getElementById("title").value = "";
  document.getElementById("content").value = "";
}
