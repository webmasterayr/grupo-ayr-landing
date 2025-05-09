export default function handleLandingElementIntoView(elementId: string, offset = 0) {
  const element = document.getElementById(elementId);

  if (!element) {
    return;
  }

  // Adjust the scroll position to account for the fixed navbar
  const navbar = document.getElementById("nav");
  const navbarHeight = navbar ? navbar.offsetHeight : 0;
  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
  const offsetPosition = elementPosition - navbarHeight - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
}
