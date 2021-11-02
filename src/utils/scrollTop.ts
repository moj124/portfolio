export default function scrollTop(): void {
  const scrollTop = document.getElementById("scroll-top");
  const nav = document.getElementById("header");
  if (window.scrollY >= 80) nav?.classList.add("scroll-header");
  else nav?.classList.remove("scroll-header");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (window.scrollY >= 200) scrollTop?.classList.add("show-scroll");
  else scrollTop?.classList.remove("show-scroll");
}
