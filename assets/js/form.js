const userNameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');
const  submitPost = document.querySelector('#submit');

submitPost.addEventListener('click', function (event) {
  console.log('clicked')
  event.preventDefault();

  const post = {
    username: userNameInput.value.trim(),
    title: titleInput.value,
    content: contentInput.value,
  };
console.log(post)
  localStorage.setItem("post", JSON.stringify(post))
  window.location.href = 'blog.html';
});

/* const submitButton = document.getElementById("submit");
    submitButton.addEventListener('click', function (event) {
      event.preventDefault();

      const username = document.getElementById('username').value;
      const title = document.getElementById('title').value;
      const content = document.getElementById('content').value;

      localStorage.setItem('username', username);
      localStorage.setItem('title', title);
      localStorage.setItem('content', content);
      

      window.location.href = 'blog.html';
    }); */
