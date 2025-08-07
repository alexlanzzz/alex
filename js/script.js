// 缓存所有步进容器：0–3
const steps = [
  document.getElementById('step0'),
  document.getElementById('step1'),
  document.getElementById('step2'),
  document.getElementById('step3'),
];

// 缓存按钮
const btnStart  = document.getElementById('btnStart');
const btnNext0  = document.getElementById('btnNext0');
const btnNext1  = document.getElementById('btnNext1');
const btnNext2  = document.getElementById('btnNext2');

// 隐藏全部，仅显示第 n 步
function showStep(n) {
  steps.forEach((el, idx) => {
    el.classList.toggle('active', idx === n);
  });
}

// Start → Step 0 (视频) 并播放
btnStart.addEventListener('click', () => {
  // 1) 先来一波烟花
  confetti({
    particleCount: 200,
    spread: 70,
    origin: { y: 0.3 }
  });
  // 2) 跳到视频并播放
  showStep(0);
  const video = document.getElementById('introVideo');
  if (video) video.play().catch(console.warn);
});

// 视频的 Next → Step 1
btnNext0.addEventListener('click', () => showStep(1));

// Step1 → Step2
btnNext1.addEventListener('click', () => showStep(2));

// Step2 → Step3
btnNext2.addEventListener('click', () => showStep(3));

// 页面初始状态：隐藏所有步骤（hero 默认可见）
showStep(-1);  // 没有 step 与 -1 对应，所以全隐藏
