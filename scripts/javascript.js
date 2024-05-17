document.addEventListener("DOMContentLoaded", function () {
    const slideshowSections = document.querySelectorAll(".slideshow-section");

    slideshowSections.forEach(section => {
        const slides = section.querySelectorAll(".slideshow img");
        let currentSlide = 0;

        // Show the first slide
        slides[currentSlide].style.display = "block";

        // Function to show next slide
        function showNextSlide() {
            slides[currentSlide].style.display = "none";
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].style.display = "block";
        }

        // Automatically switch slides every 6 seconds
        setInterval(showNextSlide, 6000);
    });
});
const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  const itemNumber = movieLists[i].querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 270);
    clickCounter++;
    if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });

  console.log(Math.floor(window.innerWidth / 270));
});

document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.feedback-form');
  const alertContainer = document.getElementById('alert-container');

  form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the form from submitting

      // Get the form data
      const formData = new FormData(form);

      // Create an object from form data
      const formDataObject = {};
      formData.forEach((value, key) => {
          formDataObject[key] = value;
      });

      // Validate the form data (You can add your own validation logic here)
      if (!formDataObject.name || !formDataObject.email || !formDataObject.message) {
          showAlert('Please fill in all fields', 'error');
          return;
      }

      // Simulate sending the form data (You can replace this with your own backend API call)
      // For demonstration purposes, we'll just show a success message
      showAlert('Feedback submitted successfully!', 'success');

      // Clear the form after submission (optional)
      form.reset();
  });

  // Function to show alerts
  function showAlert(message, type) {
      // Create alert element
      const alert = document.createElement('div');
      alert.className = `alert ${type}`;
      alert.textContent = message;

      // Append alert to the alert container
      alertContainer.appendChild(alert);

      // Remove alert after 3 seconds
      setTimeout(function() {
          alert.remove();
      }, 3000);
  }
});
