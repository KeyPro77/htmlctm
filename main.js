$("#tile-1 .nav-tabs a").click(function() {
  var position = $(this).parent().position();
  var width = $(this).parent().width();
    $("#tile-1 .slider").css({"left":+ position.left,"width":width});
});
var actWidth = $("#tile-1 .nav-tabs").find(".active").parent("li").width();
var actPosition = $("#tile-1 .nav-tabs .active").position();
$("#tile-1 .slider").css({"left":+ actPosition.left,"width": actWidth});





const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;


    if (username === "stay" && password === "high") {
        location.href = "premium.html";
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})
