"use strict"

const iconsList = datiIniziali;
const cardsContainer = document.getElementById("container");
const filterSelect = document.getElementById("select");

// generate a copy of the given iconsList
const newIconsList = NewIconsListGenerator();
// call th function to display the icons
IconsDisplay();


// Event Listener to display the icons according to the selected filter once it's changed
filterSelect.addEventListener("change", function(){
    IconsDisplay()
})

// function to display the icons 
function IconsDisplay(){
    let filter = filterSelect.value;
 
    // empty the container to display only the wanted icons
    cardsContainer.innerHTML = "";


    newIconsList.forEach(icon => {
        let iconColor;
        // switch to give the icons a different color according to the different types
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
        // condition to select only the wanted icons to display
        if(filter == "all" || filter == icon.type){
            CardGenerator(icon, iconColor)
        }
    });
} 

// function to write into the html all the elemet that we want to display
function CardGenerator(element, color){

    const card =   `<div class="card">
                        <i class="${element.family} ${element.prefix}${element.name}" style="color:${color}"></i>
                        <h4>${element.name}</h4>
                    </div>`
    cardsContainer.innerHTML += card
}


// function to generate a copy of the given list
function NewIconsListGenerator(){

    let newList = iconsList.map(icon => {

        const { name, prefix, type, family } = icon;
    
        let newIcon = {
            name,
            prefix,
            type,
            family
        }
        return newIcon;
    });
    return newList   
}