document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    emailjs.sendForm('service_7jbo24h', 'template_nig6ruo', this)
      .then(function(response) {
        document.getElementById('status').innerHTML = 'Message sent successfully!';
        document.getElementById('contact-form').reset();
      }, function(error) {
        document.getElementById('status').innerHTML = 'Error sending message: ' + error;
      });
  });
  