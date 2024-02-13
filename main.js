function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    var main = document.getElementById("main");

    sidebar.classList.toggle("active");
    main.classList.toggle("active");
}

const loginBtn = document.querySelector('#login-btn');
loginBtn.addEventListener('click', e => {
e.preventDefault();

const email = document.querySelector('#email').value;
const password = document.querySelector('#password').value;

auth.signInWithEmailAndPassword(email, password)
  .then(cred => {
    console.log('Logged in user!');
  })
  .catch(error => {
    console.log(error.message);
  })
});


const logoutBtn = document.querySelector('#logout-btn');
logoutBtn.addEventListener('click', e => {
  e.preventDefault();
  auth.signOut();
  console.log('User signed out!');
})