// write your code here
fetch('http://localhost:3000/ramens')
    .then((res) => res.json())
    .then(data => data.forEach(ramen => {renderRamen(ramen)}))


    

function renderRamen(ramen){
    const ramenMenu = document.getElementById("ramen-menu")
    const img = document.createElement("img")
    img.src = ramen.image 

    ramenMenu.append(img)

    img.addEventListener("click", (e => {
        // const ramenDetail = document.querySelector("ramen-detail")
        const ramenImage = document.querySelector(".detail-image")
        const ramenName = document.querySelector(".name")
        const ramenRestaurant = document.querySelector(".restaurant")
        const ramenRating = document.getElementById("rating-display")
        const ramenComment = document.getElementById("comment-display")

        ramenImage.src = ramen.image
        ramenName.textContent = ramen.name 
        ramenRestaurant.textContent = ramen.restaurant 
        ramenRating.textContent = ramen.rating 
        ramenComment.textContent = ramen.comment 

        // ramenDetail.appendChild(ramenImage, ramenName, ramenRestaurant)
        // above is not necessary to include, since we didn't create something new to append 

    }))
}

function handleForm(){
const form = document.querySelector("#new-ramen")
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const newName = e.target["name"].value
    const newRestaurant = e.target["restaurant"].value
    const newImage = e.target["image"].value
    const newRating = e.target["rating"].value
    const newComment = e.target["new-comment"].value
// bracket notation above because we're targeting a string 
    const newRamenCard = {
        name: newName,
        restaurant: newRestaurant,
        image: newImage,
        rating: newRating,
        comment: newComment
    }

    renderRamen(newRamenCard)
    // const ramenMenu = document.getElementById("ramen-menu")
    // ramenMenu.appendChild(newRamenCard)
})
}

// function updateForm(){
//     const form = document.querySelector("#edit-ramen")
//     form.addEventListener("submit", (e) => {
//         e.preventDefault();
//         const updateRating = e.target["rating"].value
//         const updateComment = e.target["new-comment"].value
    
//         const updateRamenCard = {
//             name: document.querySelector(".name"),
//             restaurant: document.querySelector(".restaurant"),
//             image: document.querySelector(".detail-image"),
//             rating: updateRating,
//             comment: updateComment
//         }
    
//         renderRamen(updateRamenCard)
//         const ramenMenu = document.getElementById("ramen-menu")
//         ramenMenu.appendChild(updateRamenCard)
//     })
// }
handleForm()
// renderRamen()
updateForm()