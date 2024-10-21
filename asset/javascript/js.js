document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you for your message!');
        form.reset();
    });
});

function sendMail(){
    let parms ={
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
  
          
    }
  
    emailjs.send("service_njhd5wn","template_ayfnf6m",parms).then(alert("Email Sent!!"))
  }