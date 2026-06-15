/* Splits the WRITING <h1> into per-character <span class="char">
   nodes and assigns a staggered animation-delay so each char rolls
   in 20ms after the last. CSS owns the actual reveal keyframe
   (.char in writing-index.css); this file only does the split.

   Loaded with `defer` from _layouts/writing-index.html so it
   doesn't block first paint. */
(function revealWritingTitle() {
    const el = document.getElementById('page-title');
    if (!el) return;
    const text = el.getAttribute('data-text') || el.textContent;
    el.textContent = '';
    text.split('').forEach((ch, i) => {
        const span = document.createElement('span');
        span.className = 'char';
        span.textContent = ch === ' ' ? ' ' : ch;
        span.style.animationDelay = `${i * 0.02}s`;
        el.appendChild(span);
    });
})();
