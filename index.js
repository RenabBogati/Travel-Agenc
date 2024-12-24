// Enhanced JavaScript for better interactivity
const boxes = document.querySelectorAll(
    '.social-links .box, .social-links .boxx, .social-links .boxxx, .social-links .boxxxx, .social-links .boxxxxx, .social-links .boxxxxxx'
);

boxes.forEach((box) => {
    box.style.transition = 'opacity 0.3s ease, box-shadow 0.3s ease';
    box.style.opacity = '0.85';

    box.addEventListener('mouseover', () => {
        box.style.opacity = '1';
        box.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.3)';
    });

    box.addEventListener('mouseout', () => {
        box.style.opacity = '0.85';
        box.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.2)';
    });
});

// Dynamic time-based greeting
const header = document.querySelector('header h1');
const currentHour = new Date().getHours();
let greeting;

if (currentHour < 12) {
    greeting = 'Good Morning! Welcome to ING Travel and Tours';
} else if (currentHour < 18) {
    greeting = 'Good Afternoon! Explore ING Travel and Tours';
} else {
    greeting = 'Good Evening! Plan your journey with ING Travel and Tours';
}

const greetingElement = document.createElement('p');
greetingElement.textContent = greeting;
greetingElement.style.fontSize = '1.2rem';
greetingElement.style.marginTop = '10px';
greetingElement.style.color = '#333';
header.appendChild(greetingElement);

// Scroll to Top Button
const scrollTopButton = document.createElement('button');
scrollTopButton.textContent = '⬆ Scroll to Top';
scrollTopButton.style.position = 'fixed';
scrollTopButton.style.bottom = '20px';
scrollTopButton.style.right = '20px';
scrollTopButton.style.padding = '10px';
scrollTopButton.style.backgroundColor = '#0077b5';
scrollTopButton.style.color = '#fff';
scrollTopButton.style.border = 'none';
scrollTopButton.style.borderRadius = '5px';
scrollTopButton.style.cursor = 'pointer';
scrollTopButton.style.display = 'none';
document.body.appendChild(scrollTopButton);

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollTopButton.style.display = 'block';
    } else {
        scrollTopButton.style.display = 'none';
    }
});

scrollTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
