
const saveUser = document.querySelector('#saveUser');
const createBlog = document.querySelector('#createBlog');

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

let blogsArray = [];

const blogs = document.querySelector('#blogs');

const getBlogs = async () => {
    const res = await fetch(`${endpoint}/blog/all`);
    return res.json();
};
const createBlogs = (data) => {
    return `
            <div>
                <img src="${data.img}" alt="${data.title}">
            </div>
            <div class="blog_block_grid_info">
                <div class="likeButton">"${data.time}</div>
                <h3>Новый формат сеансов</h3>
                <p>"${data.about}</p>
                <div class="likeButton">Читать статью</div>
            </div>
     `;
};
  
const drawBlogs = (dataElement) => {
     let div = document.createElement("div");
     div.classList.add('blog_block');
     let second = document.createElement("div");
     second.classList.add('blog_block_grid');
     second.innerHTML = createBlogs(dataElement);
     div.appendChild(second);
     blogs.appendChild(div);
};
  
getBlogs().then((data) => {
    blogsArray = data;
    console.log(blogsArray);
    blogsArray.forEach(element => {
        drawBlogs(element);
    });
});

createBlog.addEventListener('click', async () => {
    const time = document.querySelector("#time").value;
    const title = document.querySelector("#title").value;
    const about = document.querySelector("#about").value;
    const img = document.querySelector("#img").value;
    if (time && title && about && img) {
        const newBlog = {
            time,
            title,
            about,
            img
        };
        await fetch(`${endpoint}/blog/add`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(newBlog)
        })
    }
    const data = await getBlogs();

    blogs.innerHTML = "";
    blogsArray = data;
    blogsArray.forEach(element => {
        drawBlogs(element);
    });
})