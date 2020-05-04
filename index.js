const activeNav = () => {
    const navLinks = document.querySelectorAll('nav li a');
    window.addEventListener('scroll', () => {
        navLinks.forEach(link => {
            if(link.hash){
                let section = document.querySelector(link.hash);
                if(section.offsetTop <= window.scrollY + 60
                    && section.offsetTop + section.offsetHeight > window.scrollY + 60
                    ){
                    link.style.borderBottom="solid 3px rgb(86, 164, 228)";
                    link.style.fontSize="larger";
                } else {
                    link.style.borderBottom="none"
                    link.style.fontSize="large";
                }
            } 
        })
    })
}

const loadProjects = () => {
    const container = document.getElementById('projects-container');
    const src = "./Assets/"
    const projects = [{name: "Dan's Unforgettable Creations", image: `${src}DanUC.jpeg`, link: 'http://dan-prototype.surge.sh', description: 'Built in React.js, and featuring React Router and Responsive Design'}, 
    {name: 'Tarraske Digital', image: `${src}TD.png`, link: 'http://tarraskedigital.com', description: "Good ol' JavaScript, HTML, and CSS. Responsive Design" }, 
    {name: 'React Blaster', image: `${src}React_Blaster.png`, link: 'https://react-blaster.herokuapp.com/', description: "My Final Project from Flatiron School! A Full Stack point-and-click game built in React.js and Ruby on Rails for Safari, Chrome, or Firefox desktop Browsers"}, 
    {name: 'Imaginary Friend Simulator', image: `${src}cookie.png`, link: 'http://imaginary-friend.surge.sh/', description: "A Ruby on Rails collaborative school-project, updated to a full stack application with a React,js front-end. Works on  Safari, Chrome, or Firefox desktop Browsers"}]
    projects.map(item => {
        const li = document.createElement('li');
        const card = document.createElement('a');
        card.className = 'project-card';
        card.href = item.link;
        card.target = "_blank";
        li.appendChild(card)
        const p = document.createElement('h4');
        p.className="project-name";
        p.innerText = item.name;
        const img = document.createElement('img');
        img.className="project-image";
        img.src = item.image;
        const description = document.createElement('p');
        description.className = "description";
        description.innerText = item.description;
        
        card.appendChild(p);
        card.appendChild(img);
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
            const title = document.createElement('p');
            title.innerText = item.title;
            const img = document.createElement('img');
            img.src = item.thumbnail;
            card.appendChild(title);
            card.appendChild(img);
            li.appendChild(card);
            medium.appendChild(li);
        })
        
    }

    console.log(articles)
}

document.addEventListener('DOMContentLoaded', () => {
    activeNav();
    loadProjects();
    fetchArticles();

})