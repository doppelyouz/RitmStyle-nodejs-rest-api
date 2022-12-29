

const endpoint = `http://localhost:8080`;

const saveUser = document.querySelector('#saveUser');

saveUser.addEventListener('click', async (e) => {
    e.preventDefault();
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const phone = document.querySelector("#phone").value;
    console.log(name);
    console.log(email);
    console.log(phone);
    if (name && email && phone) {
    const newUser = {
        name,
        email,
        phone
    };
    console.log(newUser);
    await fetch(`${endpoint}/user/enroll`, {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
            "Content-Type": "application/json",
        }
    });
    }
});