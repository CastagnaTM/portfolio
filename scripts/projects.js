const showDetails = () => {
    console.log('yo');
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
        const card = document.createElement('div');
        card.className = 'project-card';
        li.appendChild(card)
        const h4 = document.createElement('h4');
        h4.className="project-name";
        h4.innerText = item.name;
        const imgContainer = document.createElement('div');
        const img = document.createElement('img');
        img.className="project-image";
        img.src = item.image;
        img.alt=item.name;
        const hr = document.createElement('hr');
        imgContainer.appendChild(img);
        card.appendChild(h4);
        card.appendChild(imgContainer);
        card.appendChild(hr)

        const details = document.createElement('div');
        details.className = 'project-details';
        li.appendChild(details);
        const description = document.createElement('p');
        description.className = "description";
        description.innerText = item.description; 
        
        const codeLink = document.createElement('a');
       
        

        
        // card.appendChild(description);
        container.appendChild(li);
        
    })

    
    
}

document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
})