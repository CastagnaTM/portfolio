const fetchArticles = () => {
    try {
        fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@castagna.tm')
        .then(resp => resp.json())
        .then(data => {
            displayArticles(data.items);
            console.log(data.items);
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
    fetchArticles();
})