document.addEventListener("DOMContentLoaded", function() {
    let modal = document.getElementById("contactModal");
    let contactButton = document.querySelector(".contact-button");
    let closeButton = document.querySelector(".close-btn");

    contactButton.addEventListener("click", function(event) {
        event.preventDefault();
        modal.style.display = "block";
    });

    closeButton.addEventListener("click", function() {
        modal.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});