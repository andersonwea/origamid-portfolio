const links = document.querySelectorAll('.smooth-scroll');
console.log('hello world')

links.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();

    const sectionId = link.getAttribute('href');
    
    const targetPosition = document.querySelector(sectionId).offsetTop;

    window.scroll({
      top: targetPosition,
      behavior: "smooth"
    });
  });
});