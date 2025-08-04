// Grab references to each step container
const steps = [
  document.getElementById('step1'),
  document.getElementById('step2'),
  document.getElementById('step3')
];

// Grab buttons
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');

// Function: show only the step at index n
function showStep(n) {
  steps.forEach((el, idx) => {
    el.classList.toggle('active', idx === n);
  });
}

// Step 1 → Step 2
btn1.addEventListener('click', () => {
  showStep(1);
});

// Step 2 → Step 3 and autoplay video
btn2.addEventListener('click', () => {
  showStep(2);
  const video = document.getElementById('introVideo');
  if (video) {
    video.play().catch(err => {
      console.warn('Autoplay failed:', err);
    });
  }
});
