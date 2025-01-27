// Modal functionality
const modal = document.getElementById('project-modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const closeModal = document.querySelector('.close-modal');

document.querySelectorAll('.view-project').forEach(button => {
  button.addEventListener('click', () => {
    modalTitle.textContent = button.parentElement.querySelector('h3').textContent;
    modalDescription.textContent = button.getAttribute('data-description');
    modal.style.display = 'flex';
  });
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

// Left-Side Navigation Buttons
const navigationButtons = document.querySelectorAll('#navigation-buttons button');
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const button = document.querySelector(
        `#navigation-buttons button[data-section="${entry.target.id}"]`
      );
      if (entry.isIntersecting) {
        button.classList.add('visible');
      } else {
        button.classList.remove('visible');
      }
    });
  },
  { threshold: 0.5 }
);

sections.forEach((section) => {
  observer.observe(section);
});

// Scroll to section when button is clicked
navigationButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const section = document.getElementById(button.getAttribute('data-section'));
    section.scrollIntoView({ behavior: 'smooth' });
  });
});
