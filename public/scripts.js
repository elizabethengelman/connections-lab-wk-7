window.addEventListener("load", function () {
  fetch("/files")
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("images").innerHTML = data;
    });

  let submitButton = document.getElementById("file-submit");
  submitButton.addEventListener("click", function () {
    // TODO: handle multiple files? I think I need to add the `multiple` keyword in the input element
    let file = document.getElementById("file").files[0];
    let formData = new FormData();
    formData.append("file", file);
    formData.append("longitude", longitude.value);
    formData.append("latitude", latitude.value);
    fetch("/upload", { method: "POST", body: formData }).then((data) => {
      if (data.status === 200) {
        //update the page
      }
    });
  });
});
