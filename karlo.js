function remClass() {
  let btn = document.getElementById("loadButton");
  let div = document.getElementById("loadMore");
  div.classList.remove("newList");
  btn.remove();
}

(function () {
  "use strict";

  var forms = document.querySelectorAll(".formValidation");

  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        } else {
          Swal.fire({
            icon: "success",
            title: "Comment was posted!",
            text: "Thank you for reading",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
          });
          setTimeout(() => {
            window.location.reload(true);
          }, 2000);
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
