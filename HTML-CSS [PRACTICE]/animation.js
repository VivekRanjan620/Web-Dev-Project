document.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight;
    const viewportHeight = window.innerHeight;
  
    const scrollRatio = scrollTop / (scrollHeight - viewportHeight);
    const translateX = scrollRatio * (document.querySelector('.scroll-container').scrollWidth - viewportWidth);
  
    document.querySelector('.scroll-container').style.transform = `translateX(-${translateX}px)`;
  });
  