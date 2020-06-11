let homepage = document.querySelector(".homepage");
let userspage = document.querySelector(".userspage");
let one = document.querySelector(".one");
let two = document.querySelector(".two");
one.addEventListener("click", function (e) {
    e.preventDefault()
    homepage.style.display = 'block';
    userspage.style.display = 'none';
})
two.addEventListener("click", function (e) {
    e.preventDefault()
    userspage.style.display = 'block';
    homepage.style.display = 'none';
    let xml = new XMLHttpRequest();
    xml.open("get", "/api");
    xml.onreadystatechange = function () {
        if (xml.readyState == 4 && xml.status == 200) {
            display(JSON.parse(xml.responseText));
        }
    }
    xml.send()
})

function display(data) {
    console.log(data);
    let text = `<h1>Users</h1>`;
    for (let i = 0; i < data.length; i++) {
        text += `
            <h2>Name: ${data[i].name} Age: ${data[i].age}</h2>
        `
    }
    userspage.innerHTML = text;
}