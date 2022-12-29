
const saveUser = document.querySelector('#saveUser');

const endpoint = `http://localhost:8080`;

saveUser.addEventListener('click', async (e) => {
    e.preventDefault();
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const phone = document.querySelector("#phone").value;
    if (name && email && phone) {
    const newUser = {
        name,
        email,
        phone
    };
    await fetch(`${endpoint}/user/enroll`, {
            method: "POST",
            body: JSON.stringify(newUser),
            headers: {
                "Content-Type": "application/json",
            }
    });
}
});

let newsArray = [];

const news = document.querySelector('#news');

const getNews = async () => {
    const res = await fetch(`${endpoint}/news/all`);
    return res.json();
};
const createNews = (data) => {
    return `
        <div class="likeButton">${data.time}</div>
        <h3>${data.title}</h3>
     `;
};
  
const drawNews = (dataElement) => {
     let div = document.createElement("div");
     div.classList.add('news_grid_info');
     div.innerHTML = createNews(dataElement);
     news.appendChild(div);
};
  
getNews().then((data) => {
    newsArray = data;
    newsArray.forEach(element => {
        drawNews(element);
    });
});