const posts = [
  {
    title: "Nodejs",
  },
  {
    title: "Reactjs",
  },
];

function getPosts() {
  let output = "";
  setTimeout(() => {
    posts.forEach((post, idx) => {
      output += `<li> ${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}

getPosts();

createPost({ title: "React native" }, getPosts);
