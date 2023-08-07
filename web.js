document.addEventListener('DOMContentLoaded', function () {
    const applyButtons = document.querySelectorAll('.apply-btn');
  
    applyButtons.forEach(button => {
      button.addEventListener('click', function () {
        const jobTitle = this.getAttribute('data-job');
        alert(`You are applying for: ${jobTitle}`);
      });
    });
  
    const applicationForm = document.getElementById('application-form');
  
    applicationForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const resume = document.getElementById('resume').files[0];
  
      // Here you can handle the form submission (e.g., send data to a server)
  
      alert('Application submitted successfully!');
      applicationForm.reset();
    });
  });
  