"use strict"

const iconsList = datiIniziali;
const cardsContainer = document.getElementById("container");

IconsDisplay(iconsList)

function IconsDisplay(icons){
    console.log("Log di icons", icons);
    for(let i=0; i< icons.length; i++){
        cardsContainer.innerHTML += ` <div class="card">
                                <i class="${icons[i].family} ${icons[i].prefix}${icons[i].name}"></i>
                            </div>`
    }
}