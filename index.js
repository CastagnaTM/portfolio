const scrollChanges = () => {
    window.addEventListener('scroll', () => {
        activeNav();
        activeLinks();
    })
}

const activeNav = () => {
    const nav = document.querySelector('.navigation');
    if(window.scrollY > 40) {
        nav.classList.add('scrolling');
    } else {
        nav.classList.remove('scrolling');
    }
}

const activeLinks = () => {
    const navLinks = document.querySelectorAll('nav li a');
    navLinks.forEach(link => {
        if(link.hash){
            let section = document.querySelector(link.hash);
            if(section.offsetTop <= window.scrollY + 60
                && section.offsetTop + section.offsetHeight > window.scrollY + 60
                ){
                link.classList.add("active")
                if(section.className==="about"){
                    backgroundScroll();
                }
            } else {
                link.classList.remove("active");
            }
        } 
    })
}

const backgroundScroll = () => {
    //about section background
    const about = document.querySelector('.about')
    const [aboutRed, aboutGreen, aboutBlue] = [2, 49, 88]
    
    // My name's Tom h1
    const h1 = document.querySelector('.intro-header-2');
    const [h1r, h1g, h1b] = [93, 182, 255];
    
    // text div
    const text = document.querySelector('.description');
    const h2 = document.querySelector(".welcome-h2");
    const [textRed, textGreen, textBlue] = [255, 255, 255]; //text div background
    const [pRed, pGreen, pBlue] = [0,0,0]; // text div p tag
    const [h2r, h2g, h2b] = [2, 49, 88]; // text div h2
    // 93, 182, 255
    
    window.addEventListener('scroll', () => {
      let scroll = window.scrollY;
      const [r, g, b] = [Math.min(5,aboutRed+scroll/10), Math.max(2, aboutGreen-scrollY/4), Math.max(10, aboutBlue-scroll/10)].map(Math.round);
      about.style.backgroundColor = `rgb(${r}, ${g}, ${b})`; 

      const [h1Red, h1Green, h1Blue] = [Math.min(180, h1r+scroll/4), Math.min(180, h1g+scroll/4), Math.min(250, h1b+scroll)].map(Math.round);
      h1.style.color = `rgb(${h1Red}, ${h1Green}, ${h1Blue})`; //25, 135, 125

      const [tr,tg,tb] = [textRed-scroll/2, textGreen-scroll/2, textBlue-scroll/2].map(Math.round);
      const [pr,pg,pb] = [pRed+scroll/4, pGreen+scroll/4, pBlue+scroll/4].map(Math.round);
      text.style.backgroundColor = `rgb(${tr}, ${tg}, ${tb})`;
      text.style.color = `rgb(${pr}, ${pg}, ${pb})`;

      const [hr, hg, hb] = [Math.min(93, h2r+scroll/4), Math.min(182, h2g+scroll/3), Math.min(255, h2b+scroll/4)].map(Math.round);
      h2.style.color = `rgb(${hr}, ${hg}, ${hb})`;

    })
}

const loadProjects = () => {
    const container = document.getElementById('projects-container');
    const src = "./Assets/"
    const projects = [{name: "Dan's Unforgettable Creations", image: `${src}DanUC.jpg`, link: 'http://dan-prototype.surge.sh', description: 'Built in React.js, and featuring React Router and Responsive Design'}, 
    {name: 'Tarraske Digital', image: `${src}TD.png`, link: 'http://tarraskedigital.com', description: "Good ol' JavaScript, HTML, and CSS. Responsive Design" }, 
    {name: 'React Blaster', image: `${src}React_Blaster.png`, link: 'https://react-blaster.herokuapp.com/', description: "My Final Project from Flatiron School! A Full Stack point-and-click game built in React.js and Ruby on Rails for Safari, Chrome, or Firefox desktop Browsers"}, 
    {name: 'Imaginary Friend Simulator', image: `${src}cookie.png`, link: 'http://imaginary-friend.surge.sh/', description: "A Ruby on Rails collaborative school-project, updated to a full stack application with a React,js front-end. Works on  Safari, Chrome, or Firefox desktop Browsers"}]
    projects.map(item => {
        const li = document.createElement('li');
        const card = document.createElement('a');
        card.className = 'project-card';
        card.href = item.link;
        card.rel="noopener";
        card.target = "_blank";
        li.appendChild(card)
        const h4 = document.createElement('h4');
        h4.className="project-name";
        h4.innerText = item.name;
        const imgContainer = document.createElement('div');
        const img = document.createElement('img');
        img.className="project-image";
        img.src = item.image;
        img.alt=item.name;
        imgContainer.appendChild(img);
        const hr2 = document.createElement('hr');
        const description = document.createElement('p');
        description.className = "description";
        description.innerText = item.description;
        

        card.appendChild(h4);
        card.appendChild(imgContainer);
        card.appendChild(description);
        container.appendChild(li);
        
    })
    
}

const fetchArticles = () => {
    try {
        fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@castagna.tm')
        .then(resp => resp.json())
        .then(data => {
            displayArticles(data.items)
        })
    }
    catch (e) {
        console.log(e);
        displayArticles({name: "error"});
    }
}

const displayArticles = (articles) => {
    const medium = document.getElementById('medium');
    if (articles[0].name === "error"){
        let h2 = document.createElement('h2');
        let a = document.createElement('a');
        h2.innerText = "Sorry, there was a problem loading my articles! While I'm fixing that, please feel free to see my work here: "
        a.href="https://medium.com/@castagna.tm";
        a.target="_blank";
        a.rel="noopener";
        a.innerText="medium/castagna.tm";
        medium.appendChild(h2);
        medium.appendChild(a);
        let error = articles[0].name
        window.emailjs.send(
            'gmail', 'portfolio_error_message',
            {message_html: "medium fetch failed: " + error}
        )
    }
    else {
        articles.map(item => {
            const li = document.createElement('li');
            const card = document.createElement('a');
            card.className = 'article-card';
            card.href = item.link;
            card.target = "_blank";
            card.rel="noopener";
            const title = document.createElement('h4');
            title.innerText = item.title;
            const img = document.createElement('img');
            img.src = item.thumbnail;
            img.alt=item.title;
            card.appendChild(title);
            card.appendChild(img);
            li.appendChild(card);
            medium.appendChild(li);
        })
        
    }
}

document.addEventListener('DOMContentLoaded', () => {
    scrollChanges();
    loadProjects();
    fetchArticles();

})