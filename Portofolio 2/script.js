(() => {
  // -------- Animate greeting text cycling --------
  const greetings = [
    'Selamat Datang',
    'Saya Moch Afrizal',
    'Terimakasih Sudah Singgah'
  ];
  let greetIndex = 0;
  const greetingSpan = document.getElementById('animated-text');

  function cycleGreeting() {
    greetingSpan.style.opacity = 0;
    setTimeout(() => {
      greetIndex = (greetIndex + 1) % greetings.length;
      greetingSpan.textContent = greetings[greetIndex];
      greetingSpan.style.opacity = 1;
    }, 700);
  }

  setInterval(cycleGreeting, 4000);

  // -------- Smooth scroll for nav links & highlight active --------
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();

      // Remove active class from all links
      navLinks.forEach(l => l.classList.remove('active'));

      // Add active class to clicked link
      link.classList.add('active');

      const targetID = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetID);
      if (targetSection) {
        // Scroll with offset for fixed header height
        const yOffset = -70;
        const y = targetSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });

        // Focus for accessibility
        targetSection.focus();
      }
    });
  });

  // -------- Scroll reveal animation --------
  const boxesToReveal = document.querySelectorAll('.box-kiri, .box-tengah, .box-kanan, .box-kontak');

  function revealOnScroll() {
    const triggerBottom = window.innerHeight * 0.85;

    boxesToReveal.forEach(box => {
      const boxTop = box.getBoundingClientRect().top;
      if (boxTop < triggerBottom) {
        box.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('load', revealOnScroll);

  // -------- Button click event --------
  document.getElementById('selengkapnya-btn').addEventListener('click', () => {
    alert('Terima kasih sudah tertarik ingin mengetahui lebih lanjut!');
  });
})();
