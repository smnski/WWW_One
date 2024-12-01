document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("contactModal");
    var contactButton = document.querySelector(".contact-button");
    var closeButton = document.querySelector(".close-btn");

    // Show the modal when "Contact me" is clicked
    contactButton.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default link behavior
        modal.style.display = "block";
    });

    // Close the modal when the close button is clicked
    closeButton.addEventListener("click", function() {
        modal.style.display = "none";
    });

    // Close the modal if the user clicks outside of the modal content
    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});