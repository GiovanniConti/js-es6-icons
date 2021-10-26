"use strict"

const iconsList = datiIniziali;
const cardsContainer = document.getElementById("container");

IconsDisplay(iconsList)

/*
function IconsDisplay(icons){
    console.log("Log di icons", icons);
    for(let i=0; i< icons.length; i++){
        cardsContainer.innerHTML += ` <div class="card">
                                <i class="${icons[i].family} ${icons[i].prefix}${icons[i].name}"></i>
                                <h4>${icons[i].name}</h4>
                            </div>`
    }

}
*/



function IconsDisplay(icons){

    icons.forEach(icon => {
        let iconColor;
        switch (icon.type){
            case "animal" :
                iconColor = "blue";
                break
            case "vegetable" :
                iconColor = "orange";
                break
            case "user" :
                iconColor = "purple";
                break
        }
        CardGenerator(icon, iconColor)
    });
} 

function CardGenerator(element, color){
    console.log(element);
    console.log(color);
    const card =   `<div class="card">
                        <i class="${element.family} ${element.prefix}${element.name}" style="color:${color}"></i>
                        <h4>${element.name}</h4>
                    </div>`
    cardsContainer.innerHTML += card
}