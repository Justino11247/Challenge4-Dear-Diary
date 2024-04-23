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
});