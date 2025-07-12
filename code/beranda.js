document.addEventListener("DOMContentLoaded", () => {
  /* ----- HERO autoplay carousel ----- */
  const heroTrack = document.getElementById("heroTrack");
  const heroSlides = heroTrack.querySelectorAll(".hero-slide");
  let heroIndex = 0;
  function showHero(idx) {
    heroTrack.style.transform = `translateX(-${idx * 100}%)`;
  }
  function nextHero() {
    heroIndex = (heroIndex + 1) % heroSlides.length;
    showHero(heroIndex);
  }
  setInterval(nextHero, 5000);

  /* ----- WARTA carousel buttons ----- */
  const wartaContainer = document.getElementById("wartaContainer");
  const wartaPrevBtn = document.getElementById("prevBtn");
  const wartaNextBtn = document.getElementById("nextBtn");
  if (wartaPrevBtn && wartaNextBtn) {
    const gap = 24;
    const cardWidth =
      wartaContainer.querySelector(".warta-card").getBoundingClientRect().width +
      gap;
    wartaPrevBtn.addEventListener("click", () => {
      wartaContainer.scrollBy({ left: -cardWidth, behavior: "smooth" });
    });
    wartaNextBtn.addEventListener("click", () => {
      wartaContainer.scrollBy({ left: cardWidth, behavior: "smooth" });
    });
  }

  /* ----- Navbar transparency toggle ----- */
  const navbar = document.querySelector(".navbar");
  function navScroll() {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }
  navScroll();
  window.addEventListener("scroll", navScroll);

  // sorotan carousel
  const sorotanTrack = document.querySelector('.carousel-track');
  const sorotanPrevBtn = document.querySelector('.carousel-btn.prev');
  const sorotanNextBtn = document.querySelector('.carousel-btn.next');
  let sorotanIndex = 0;

  function updateSorotanCarousel() {
    const itemWidth = document.querySelector('.carousel-item').offsetWidth + 20;
    sorotanTrack.style.transform = `translateX(-${sorotanIndex * itemWidth}px)`;
  }

  sorotanNextBtn.addEventListener('click', () => {
    if (sorotanIndex < sorotanTrack.children.length - 1) {
      sorotanIndex++;
      updateSorotanCarousel();
    }
  });

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("img").forEach(img => {
    const rect = img.getBoundingClientRect();
    if (!img.hasAttribute("loading") && rect.top > window.innerHeight) {
      img.setAttribute("loading", "lazy");
    }
  });
});



  sorotanPrevBtn.addEventListener('click', () => {
    if (sorotanIndex > 0) {
      sorotanIndex--;
      updateSorotanCarousel();
    }
  });
});
