"use strict"

window.onload = function(_event){
    
    
    
    const categorySelect = document.getElementById("category")
    categorySelect.onchange = populateActivites
    
    
    const activitySelect = document.getElementById("activity")
    activitySelect.onchange = renderActivityCard
    
    
    
    
    populateCategories(categories, categorySelect)
}

function populateCategories(categories, selectElement){
    // populate categories dropdown, using inner html
    let html = ""
    for (let index = 0 ;index < categories.length;index += 1 ){
        const currentCategory = categories[index]
        html += `<option value="${currentCategory}">${currentCategory}</option>`

    }
    console.log(html)
    selectElement.innerHTML = html
}



function populateActivites(event) {
    const selectedCategory = event.target.value
    console.log(selectedCategory)
}


function renderActivityCard(event){}