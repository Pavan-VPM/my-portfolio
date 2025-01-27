document.addEventListener('DOMContentLoaded', () => {
    const tubes = document.querySelectorAll('.tube'); // Select all tube elements
    const stripCount = 64; // Number of strips per tube
  
    tubes.forEach((tube) => {
      for (let i = 0; i < stripCount; i++) {
        const strip = document.createElement('div');
        strip.classList.add('strip');
  
        // Apply rotation and position for the strip
        strip.style.transform = `
          rotateY(${(360 / stripCount) * i}deg)
          translateZ(var(--dist))
        `;
  
        // Adjust background position for each strip
        strip.style.backgroundPosition = `
          calc(var(--width) * -${i}) center
        `;
  
        tube.appendChild(strip); // Add the strip to the tube
      }
    });
  
    console.log('Animation setup complete.');
  });
