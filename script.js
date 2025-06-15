document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});


const backToTop = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.style.opacity = '1';
    backToTop.style.pointerEvents = 'auto';
  } else {
    backToTop.style.opacity = '0';
    backToTop.style.pointerEvents = 'none';
  }
});

document.querySelector('#contact').addEventListener('submit', function(e) {
e.preventDefault(); 
  
const name = document.getElementById('name').value.trim();
const email = document.getElementById('email').value.trim();
const message = document.getElementById('message').value.trim();


if (name.length < 2) {
alert('Please enter at least 2 characters for your name.');
return;
}

const emailPattern = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
if (!emailPattern.test(email)) {
alert('Please enter a valid email address.');
return;
}

if (message.length < 10) {
alert('Message should be at least 10 characters.');
return;
}


alert('Thank you for your message!');
this.reset();
});

