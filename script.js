/* ==========================================================================
   COGNIFYZ TECHNOLOGIES — Internship Landing Page
   Handles: sticky navbar shrink, hamburger/mobile menu (open, close on link
   click, close on backdrop click, close on Escape, close on resize back to
   desktop), hero typing effect, scroll-reveal animations, smooth in-page
   anchor scrolling, footer year.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ------------------------------------------------------------------------
     1. STICKY NAVBAR — add a "scrolled" class once the page moves past hero
     ---------------------------------------------------------------------- */
  const navbar = document.getElementById('navbar');

  const handleNavbarScroll = () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleNavbarScroll, { passive: true });
  handleNavbarScroll(); // run once on load in case the page opens mid-scroll


  /* ------------------------------------------------------------------------
     2. HAMBURGER / MOBILE MENU TOGGLE
     ---------------------------------------------------------------------- */
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileMenuBackdrop = document.getElementById('mobileMenuBackdrop');

  const closeMobileMenu = (returnFocus = false) => {
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('active');
    mobileMenuBackdrop.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
    mobileMenu.setAttribute('aria-hidden', 'true');
    // Prevent keyboard focus from landing on links that are slid off-screen
    mobileMenu.querySelectorAll('a').forEach((link) => link.setAttribute('tabindex', '-1'));
    document.body.style.overflow = ''; // re-enable background scroll
    if (returnFocus) hamburger.focus();
  };

  const openMobileMenu = () => {
    hamburger.classList.add('active');
    mobileMenu.classList.add('active');
    mobileMenuBackdrop.classList.add('active');
    hamburger.setAttribute('aria-expanded', 'true');
    mobileMenu.setAttribute('aria-hidden', 'false');
    mobileMenu.querySelectorAll('a').forEach((link) => link.removeAttribute('tabindex'));
    document.body.style.overflow = 'hidden'; // lock background scroll while menu is open
  };

  // Tapping the hamburger button toggles the menu open/closed
  hamburger.addEventListener('click', () => {
    const isActive = hamburger.classList.contains('active');
    isActive ? closeMobileMenu() : openMobileMenu();
  });

  // Close the mobile menu whenever a link inside it is tapped
  document.querySelectorAll('.mobile-link').forEach((link) => {
    link.addEventListener('click', closeMobileMenu);
  });

  // Tapping the dimmed backdrop (anywhere outside the menu) closes it too
  mobileMenuBackdrop.addEventListener('click', closeMobileMenu);

  // Pressing Escape closes the menu, for keyboard users
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && hamburger.classList.contains('active')) {
      closeMobileMenu(true);
    }
  });

  // If the visitor resizes/rotates their device back up to desktop width
  // while the menu happens to be open, close it automatically so it doesn't
  // get stuck open behind the (now visible) desktop nav links.
  window.addEventListener('resize', () => {
    if (window.innerWidth > 992 && hamburger.classList.contains('active')) {
      closeMobileMenu();
    }
  });


  /* ------------------------------------------------------------------------
     3. HERO CODE-WINDOW TYPING ANIMATION (signature element)
        Types out a short snippet, pauses, then loops.
     ---------------------------------------------------------------------- */
  const typedCodeEl = document.getElementById('typedCode');

  const snippet =
`const intern = {
  name: "You",
  role: "Web Developer Intern",
  company: "Cognifyz Technologies",
  learning: true,
  shipping: true
};

intern.grow(); // starts here`;

  let charIndex = 0;
  let typingTimeout;

  const typeNextChar = () => {
    if (!typedCodeEl) return;

    if (charIndex <= snippet.length) {
      typedCodeEl.textContent = snippet.slice(0, charIndex);
      charIndex++;
      // Slight natural variance in typing speed
      const speed = 18 + Math.random() * 35;
      typingTimeout = setTimeout(typeNextChar, speed);
    } else {
      // Pause at the end before restarting the loop
      typingTimeout = setTimeout(() => {
        charIndex = 0;
        typeNextChar();
      }, 2600);
    }
  };

  // Respect users who prefer reduced motion: show full snippet, skip animation
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (typedCodeEl) {
    if (prefersReducedMotion) {
      typedCodeEl.textContent = snippet;
    } else {
      typeNextChar();
    }
  }


  /* ------------------------------------------------------------------------
     4. SCROLL-REVEAL ANIMATIONS — fade + slide up when elements enter view
     ---------------------------------------------------------------------- */
  const revealEls = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target); // animate once, then stop watching
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -60px 0px',
      }
    );

    revealEls.forEach((el) => revealObserver.observe(el));
  } else {
    // Fallback for very old browsers without IntersectionObserver support
    revealEls.forEach((el) => el.classList.add('in-view'));
  }


  /* ------------------------------------------------------------------------
     5. SMOOTH SCROLL FOR ANCHOR LINKS (with sticky-navbar offset)
     ---------------------------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId.length <= 1) return; // ignore bare "#" links

      const targetEl = document.querySelector(targetId);
      if (!targetEl) return;

      e.preventDefault();
      const navHeight = navbar.offsetHeight;
      const targetPosition = targetEl.getBoundingClientRect().top + window.scrollY - navHeight - 12;

      window.scrollTo({
        top: targetPosition,
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
      });
    });
  });


  /* ------------------------------------------------------------------------
     6. FOOTER — auto-update the copyright year
     ---------------------------------------------------------------------- */
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

});
