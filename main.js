function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    var main = document.getElementById("main");

    sidebar.classList.toggle("active");
    main.classList.toggle("active");
}
function initFB(){
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start('#firebaseui-auth-container', uiConfig);
}
