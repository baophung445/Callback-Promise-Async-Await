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

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = false;
      if (!error) {
        resolve();
      } else {
        reject("Do error something !!!");
      }
    }, 2000);
  });
}

getPosts();

// createPost({ title: "React native" })
//   .then(getPosts)
//   .catch((err) => console.log(err))
//   .finally(() => {
//     console.log("Luôn luôn thực hiện");
//   });

async function init() {
  await createPost({ title: "React native" });
  getPosts();
}

init();
