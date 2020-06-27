const backgroundScroll = () => {
    //about section background
    // const about = document.querySelector('.about')
    // const [aboutRed, aboutGreen, aboutBlue] = [2, 49, 88]
    
    // My name's Tom h1
    // const h1 = document.querySelector('.intro-name');
    // const [h1r, h1g, h1b] = [93, 182, 255];
    
    // text div
    const text = document.querySelector('.description');
    const h2 = document.querySelector(".welcome-h2");
    const [textRed, textGreen, textBlue] = [255, 255, 255]; //text div background
    const [pRed, pGreen, pBlue] = [0,0,0]; // text div p tag
    const [h2r, h2g, h2b] = [2, 49, 88]; // text div h2
    // 93, 182, 255
    
    window.addEventListener('scroll', () => {
      let scroll = window.scrollY;
    //   const [r, g, b] = [Math.min(2,aboutRed+scroll/10), Math.max(2, aboutGreen-scrollY/4), Math.max(2, aboutBlue-scroll/10)].map(Math.round);
    //   about.style.backgroundColor = `rgb(${r}, ${g}, ${b})`; 

      // const [h1Red, h1Green, h1Blue] = [Math.min(180, h1r+scroll/4), Math.min(180, h1g+scroll/4), Math.min(250, h1b+scroll)].map(Math.round);
      // h1.style.color = `rgb(${h1Red}, ${h1Green}, ${h1Blue})`; 

    //   const [tr,tg,tb] = [Math.max(2, textRed-scroll/2), Math.max(2, textGreen-scroll/2), Math.max(2, textBlue-scroll/2)].map(Math.round);
      const [pr,pg,pb] = [pRed+scroll/4, pGreen+scroll/4, pBlue+scroll/4].map(Math.round);
    //   text.style.backgroundColor = `rgb(${tr}, ${tg}, ${tb})`;
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
  tl.from('.subtitle-1', {x: 214});
  tl.from('.subtitle-4', {x: -192}, "-=1");
  tl.from('.subtitle-2', { opacity: -1, duration: 2},"-=1");
  tl.from('.subtitle-3', { opacity: 0, duration: 1.5}, "-=1.5");

}

document.addEventListener('DOMContentLoaded', () => {
  backgroundScroll();
  animate();
})