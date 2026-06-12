/* ============================================================
   toast.js — site-wide toast system.
   Loaded ONLY on pages that need toasts (research with bibtex,
   writing entries, /404.html). Replaces vanilla-sonner.

   Public API:
     window.tnToast({ title, desc, color, duration, dismissible })
     window.tnToastDismissAll()

   color: '' (default) | 'site-blue' | 'forest' | 'mint' | 'violet' | 'rose'
   duration: ms (default 3000). Set to 0 / null for persistent (404 page).
   dismissible: bool (default true) — toggles whether × renders
   ============================================================ */

(function () {
  let TOASTER = null;
  const toasts = []; // each: { el, timeoutId }

  function ensureToaster() {
    if (TOASTER) return TOASTER;
    TOASTER = document.createElement('div');
    TOASTER.className = 'tn-toaster';
    TOASTER.setAttribute('aria-live', 'polite');
    TOASTER.setAttribute('aria-atomic', 'true');
    document.body.appendChild(TOASTER);
    return TOASTER;
  }

  function updateStack() {
    for (let i = 0; i < toasts.length; i++) {
      const indexFromFront = toasts.length - 1 - i; // newest first
      toasts[i].el.style.setProperty('--offset-index', indexFromFront);
      toasts[i].el.setAttribute('data-front', indexFromFront === 0 ? 'true' : 'false');
    }
  }

  function remove(record) {
    if (!record.el.parentNode) return;
    record.el.classList.add('tn-toast--leave');
    setTimeout(() => {
      if (record.el.parentNode) record.el.remove();
      const idx = toasts.indexOf(record);
      if (idx > -1) toasts.splice(idx, 1);
      updateStack();
    }, 400);
    if (record.timeoutId) clearTimeout(record.timeoutId);
  }

  function dismiss(btn) {
    const el = btn.closest('.tn-toast');
    if (!el) return;
    const record = toasts.find(r => r.el === el);
    if (record) remove(record);
  }

  window.tnToast = function (opts) {
    opts = opts || {};
    ensureToaster();
    const el = document.createElement('div');
    el.className = 'tn-toast tn-toast--enter'
      + (opts.color ? ' tn-toast--' + opts.color : '');
    const dismissible = opts.dismissible !== false;
    el.innerHTML = ''
      + (opts.title ? '<div class="tn-toast__title">' + escapeHtml(opts.title) + '</div>' : '')
      + (opts.desc ? '<div class="tn-toast__desc">' + escapeHtml(opts.desc) + '</div>' : '')
      + (dismissible ? '<button class="tn-toast__close" type="button" aria-label="Dismiss"></button>' : '');
    if (dismissible) {
      // Attach close handler after innerHTML
      const closeBtn = el.querySelector('.tn-toast__close');
      if (closeBtn) closeBtn.addEventListener('click', () => dismiss(closeBtn));
    }
    TOASTER.appendChild(el);
    const record = { el, timeoutId: null };
    toasts.push(record);
    updateStack();
    requestAnimationFrame(() => el.classList.remove('tn-toast--enter'));
    if (opts.duration && opts.duration > 0) {
      record.timeoutId = setTimeout(() => remove(record), opts.duration);
    }
    return record;
  };

  window.tnToastDismissAll = function () {
    [...toasts].forEach(remove);
  };

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }
})();
