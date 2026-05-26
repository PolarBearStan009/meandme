// Animated waveform bars
const waveform = document.getElementById('waveform');
for (let i = 0; i < 40; i++) {
    const bar = document.createElement('div');
    bar.className = 'waveform-bar';
    bar.style.height = Math.round(10 + Math.random() * 30) + 'px';
    bar.style.animationDelay = (i * 0.07).toFixed(2) + 's';
    waveform.appendChild(bar);
}