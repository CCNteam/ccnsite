$(document).ready(function () {
    $("#signin").click(function () {
      const email = $("#email").val();
      const password = $("#password").val();
      $.ajax({
        type: "POST",
        url: "/signin",
        data: { email: email, password: password },
        success: function (response) {
          const token = response.token;
          localStorage.setItem("token", token);
        },
        error: function (xhr) {
          console.log(xhr.responseText);
        }
      });
    });
  });