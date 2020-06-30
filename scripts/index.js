const backgroundScroll = () => {
    
    const text = document.querySelector('.description');
    const h2 = document.querySelector(".welcome-h2");
    const [textRed, textGreen, textBlue] = [255, 255, 255]; //text div background
    const [pRed, pGreen, pBlue] = [0,0,0]; // text div p tag
    const [h2r, h2g, h2b] = [2, 49, 88]; // text div h2
    
    window.addEventListener('scroll', () => {
      let scroll = window.scrollY;
  
      const [pr,pg,pb] = [pRed+scroll/2, pGreen+scroll/2, pBlue+scroll/2].map(Math.round);
      text.style.color = `rgb(${pr}, ${pg}, ${pb})`;

      const [hr, hg, hb] = [Math.min(93, h2r+scroll/4), Math.min(182, h2g+scroll/3), Math.min(255, h2b+scroll/4)].map(Math.round);
      h2.style.color = `rgb(${hr}, ${hg}, ${hb})`;

    })
}

const animate = () => {
  
  let tl = gsap.timeline({defaults:{duration: 1}});
  tl.from('#mediumLink', {x: -1000});
  tl.from('#linkedinLink', {x: -1000}, "-=.5");
  tl.from('#gitLink', {x: -1000}, '-=.5');
  if(window.innerWidth < 480){
    tl.from('.subtitle-1', {x: 200});
    tl.from('.subtitle-4', {x: -170}, "-=1");
  } else {
    tl.from('.subtitle-1', {x: 210});
    tl.from('.subtitle-4', {x: -188}, "-=1");
  }
  tl.from('.subtitle-2', { opacity: -1, duration: 2},"-=1");
  tl.from('.subtitle-3', { opacity: 0, duration: 1.5}, "-=1.5");

}

const handleSkillsAccordions = () => {
  const accordion = document.getElementsByClassName('accordion');
  for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function() {
      this.classList.toggle('active');
      const section = this.nextElementSibling;
      if(section.style.maxHeight) {
        section.style.maxHeight = null;
      } else {
        section.style.maxHeight = '1000px';
      }
    })
  }
}

document.addEventListener('DOMContentLoaded', () => {
  backgroundScroll();
  animate();
  handleSkillsAccordions();
})