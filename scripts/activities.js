"use strict"

window.onload = function(_event){


   
    const categorySelect = document.getElementById("category")
    categorySelect.onchange = populateActivites


    const activitySelect = document.getElementById("activity")
    activitySelect.onchange = renderActivityCard

    // populate categories dropdown, using inner html

    categorySelect.innerHTML = `
        <option value="fake-category-1">Fake Category 1</option>
        <option value="fake-category-2">Fake Category 2</option>
    `

}

function populateActivites(event) {
    console.log(event.target.value)
}


function renderActivityCard(event){}