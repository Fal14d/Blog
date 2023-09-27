document.addEventListener("DOMContentLoaded", function () {
    const uploadButton = document.getElementById("uploadButton");
    const uploadForm = document.getElementById("uploadForm");
    const message = document.getElementById("message");

    uploadButton.addEventListener("click", function () {
        const formData = new FormData(uploadForm);

        fetch("https://doesnte235246.000webhostapp.com/new.php", {
            method: "POST",
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            message.textContent = data;
        })
        .catch(error => {
            message.textContent = "Error: " + error.message;
        });
    });
});
