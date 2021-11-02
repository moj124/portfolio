export default function scrollActive(): void {
  const sections = document.querySelectorAll("section[id]");
  const scrollY = window.scrollY;
  sections.forEach((current) => {
    if (current instanceof HTMLElement) {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      const sectionId = current.getAttribute("id");
      // console.log(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight, sectionId)
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document
          .querySelector(".nav__menu a[href*=" + sectionId + "]")
          ?.classList.add("active-link");
      } else {
        document
          .querySelector(".nav__menu a[href*=" + sectionId + "]")
          ?.classList.remove("active-link");
      }
    }
  });
}
