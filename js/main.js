const clickCat = new Audio("clickCat.wav");
const clickOut = new Audio("clickOut.wav");
const click2 = new Audio("click2.wav");

const btn = document.querySelector("#btn");
//

btn.addEventListener("click", ()=> {
    clickOut.play();
    show = document.querySelector(".container");
    splash = document.querySelector(".splash");
    splash.style.display = "none";
    show.style.display = "block";
})


let stuff = {};

async function load() {
    const res = await fetch("stuff.json"); // espera carregar o json
    stuff = await res.json(); // pega a resposta json
    //console.log(stuff);
}

const area = document.querySelector(".active-area");

function render(category) {
    let cat = category.dataset.category;
    let itens = stuff[cat];
    clickCat.play();
    //console.log(cat)

    area.innerHTML = "";

    itens.map(img => {
        const card = document.createElement("img");
        card.classList.add("card");
        card.src = img;
        area.appendChild(card);

        card.addEventListener("click", () => {
            a = document.getElementById(cat);
            a.src = img;
            //console.log(cat)
            click2.play();
        })

    })

}

load();



