$(document).ready(function () {
  $("#login-btn").click(function () {
    var email = $("#email").val();
    var password = $("#password").val();

    if (email != "" && password != "") {
      $.ajax({
        url: "check-credentials.php",
        type: "post",
        data: { email: email, password: password },
        success: function (response) {
          if (response == 1) {
            window.location.href = "index.html";
          } else {
            alert("Incorrect Email or Password");
          }
        },
      });
    } else {
      alert("Both fields are required");
    }
  });
});
