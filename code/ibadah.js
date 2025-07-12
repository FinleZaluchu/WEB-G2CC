function nextSlide(button) {
  const wrapper = button.closest(".carousel-wrapper");
  const track = wrapper.querySelector(".carousel-track");
  const slides = track.querySelectorAll("img");
  const currentX = getCurrentTranslateX(track);
  const slideWidth = slides[0].clientWidth;
  const maxIndex = slides.length - 1;

  let index = Math.round(-currentX / slideWidth);
  if (index < maxIndex) index++;
  track.style.transform = `translateX(-${index * slideWidth}px)`;
}

function prevSlide(button) {
  const wrapper = button.closest(".carousel-wrapper");
  const track = wrapper.querySelector(".carousel-track");
  const slides = track.querySelectorAll("img");
  const currentX = getCurrentTranslateX(track);
  const slideWidth = slides[0].clientWidth;

  let index = Math.round(-currentX / slideWidth);
  if (index > 0) index--;
  track.style.transform = `translateX(-${index * slideWidth}px)`;
}

function getCurrentTranslateX(track) {
  const style = window.getComputedStyle(track);
  const transform = style.transform;
  if (!transform || transform === "none") return 0;
  const matrix = new DOMMatrixReadOnly(transform);
  return matrix.m41;
}
