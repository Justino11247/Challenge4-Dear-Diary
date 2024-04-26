/*var username = localStorage.getItem('username');
var title = localStorage.getItem('title');
var content = localStorage.getItem('content');

document.getElementById('username').textContent = username;
document.getElementById('title').textContent = title;
document.getElementById('content').textContent = content; */

document.getElementById('backBtn').addEventListener('click', function(){
  document.getElementById('formLink').click();
});

const urlParams = new URLSearchParams(window.location.search);
const retrievedString = urlParams.get('post');

document.getElementById('entries').innerText = retrievedString;