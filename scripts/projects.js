const loadProjects = () => {
    const container = document.getElementById('projects-container');
    const src = "./Assets/"
    const projects = [{name: "Dan's Unforgettable Creations", image: `${src}DanUC.jpg`, description: 'Built in React.js, and featuring React Router and Responsive Design', list: { tools: ['React', 'CSS'], features: ['React-Router', 'Responsive Design']}, liveLink: 'http://dan-prototype.surge.sh', codeLink: {frontend: 'https://github.com/CastagnaTM/template_for_Dan'}}, 
    {name: 'Tarraske Digital', image: `${src}TD.png`, description: "Good ol' JavaScript, HTML, and CSS. Responsive Design", list: {tools: ['JavaScript', 'CSS'], features: ['Responsive Design']}, liveLink: 'http://tarraskedigital.com'}, 
    {name: 'React Blaster', image: `${src}React_Blaster.png`, description: "My Final Project from Flatiron School! A Full Stack point-and-click game built in React.js and Ruby on Rails for Safari, Chrome, or Firefox desktop Browsers", list: {tools: ['React', 'CSS', 'Ruby On Rails'], features: ['CSS Animations', 'Custom Music', "It's really fun"]}, liveLink: 'https://react-blaster.herokuapp.com/', codeLink: {frontend: 'https://github.com/CastagnaTM/react_blaster', backend: 'https://github.com/CastagnaTM/react_blaster_backend'}}, 
    {name: 'Imaginary Friend Simulator', image: `${src}cookie.png`, description: "A Ruby on Rails collaborative school-project, updated to a full stack application with a React,js front-end. Works on  Safari, Chrome, or Firefox desktop Browsers", list: { tools: ['React', 'CSS', 'Ruby On Rails'], features: ['Login System with Guest Access']}, liveLink: 'http://imaginary-friend.surge.sh/', codeLink: {frontend: 'https://github.com/CastagnaTM/react-imaginary', backend: 'https://github.com/CastagnaTM/react-imaginary-api'}}]
    projects.map(item => {
        const projectLI = document.createElement('li');
            const card = document.createElement('div');
                card.className = 'project-card';
        projectLI.appendChild(card)
                const h4 = document.createElement('h4');
                    h4.className="project-name";
                    h4.innerText = item.name;
                const imgContainer = document.createElement('div');
                    const img = document.createElement('img');
                        img.className="project-image";
                        img.src = item.image;
                        img.alt=item.name;
                imgContainer.appendChild(img);
            card.appendChild(h4);
            card.appendChild(imgContainer);

            const border = document.createElement('div');
                border.className = 'card-border';
        projectLI.appendChild(border);

        // needs to contain a short description, list of features and two buttons
            const details = document.createElement('div');
                details.className = 'project-details';
        projectLI.appendChild(details);
                const description = document.createElement('p');
                    description.className = "description";
                    description.innerText = item.description;
                const toolsDiv = document.createElement('div'); 
                    const toolsHeader = document.createElement('h4');
                        toolsHeader.innerText = 'Tools';
                    const toolsUL = document.createElement('ul');
                        item.list.tools.forEach(listItem => {
                            let li = document.createElement('li');
                                li.innerText = listItem;
                            toolsUL.appendChild(li);
                        });
                toolsDiv.appendChild(toolsHeader);
                toolsDiv.appendChild(toolsUL);
                const featuresDiv = document.createElement('div');
                    const featuresHeader = document.createElement('h4');
                        featuresHeader.innerText = 'Features';
                    const featuresUL = document.createElement('ul');
                        item.list.features.forEach(listItem => {
                            let li = document.createElement('li');
                                li.innerText = listItem;
                            featuresUL.appendChild(li);
                        });
                featuresDiv.appendChild(featuresHeader);
                featuresDiv.appendChild(featuresUL);
                const links = document.createElement('div');
                    const liveLink = document.createElement('a');
                        liveLink.href = item.liveLink;
                        liveLink.target = "_blank";
                        liveLink.rel = 'noopener';
                        liveLink.innerText = 'Live Project';
                links.appendChild(liveLink);
                    if(item.codeLink){
                        if(item.codeLink.frontend){
                            let frontend = document.createElement('a');
                                frontend.href = item.codeLink.frontend;
                                frontend.target = "_blank";
                                frontend.rel = 'noopener';
                                frontend.innerText = item.codeLink.backend ? 'Front End Code' : 'Code';
                                frontend.className = 'frontend-link';
                            links.appendChild(frontend);
                        }
                        if(item.codeLink.backend){
                            let backend = document.createElement('a');
                                backend.href = item.codeLink.backend;
                                backend.target = "_blank";
                                backend.rel = 'noopener';
                                backend.innerText = item.codeLink.frontend ? 'Backend End Code' : 'Code';
                                backend.className = 'backend-link';
                            links.appendChild(backend);
                        }
                    }
            [description, toolsDiv, featuresDiv, links].forEach(element => {details.appendChild(element);})
        container.appendChild(projectLI);
        
    })

    
    
}

document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
})