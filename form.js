document.getElementById("applicationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you! Your application has been submitted.");
    this.reset();
});
