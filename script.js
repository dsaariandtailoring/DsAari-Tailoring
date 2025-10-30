/* script.js - footer include + menu toggle + small helpers */

(function () {
  // --- Footer include ---
  async function loadFooter() {
    const placeholder = document.getElementById('site-footer');
    if (!placeholder) return;

    // If you put footer.html in a subfolder (e.g., includes/footer.html), change this path.
    const footerPath = 'footer.html';

    try {
      const res = await fetch(footerPath, { cache: 'no-store' });
      if (!res.ok) throw new Error('HTTP ' + res.status);
      const html = await res.text();
      placeholder.innerHTML = html;
      attachFooterInteractions(); // in case footer needs JS hooks later
    } catch (err) {
      console.warn('Footer include failed:', err);
      // Minimal fallback footer so page is never empty
      placeholder.innerHTML = `
        <footer class="site-footer">
          <div style="padding:18px;text-align:center;background:#a64d79;color:#fff;">
            © 2025 D's Aari & Tailoring
          </div>
        </footer>`;
    }
  }

  // --- Mobile nav toggle ---
  function attachNavToggle() {
    const toggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav-links');
    if (!toggle || !nav) return;
    toggle.addEventListener('click', () => nav.classList.toggle('show'));
  }

  // Placeholder for any footer-related JS hooks
  function attachFooterInteractions() {
    // Example: attach click handlers to social links if needed
    const socialLinks = document.querySelectorAll('.footer-social a');
    socialLinks.forEach(a => a.setAttribute('target', '_blank'));
  }

  // --- DOM ready ---
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      loadFooter();
      attachNavToggle();
    });
  } else {
    loadFooter();
    attachNavToggle();
  }

  // --- small hero fade (optional) ---
  window.addEventListener('scroll', () => {
  const reveals = document.querySelectorAll('.reveal');
  for (const el of reveals) {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('active');
    }
  }
});


})();



