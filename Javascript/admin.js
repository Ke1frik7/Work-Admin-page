// import { card } from "./card"
// let cardsElement = card()
// console.log(cardsElement)

function renderUsers(){
    let object = []
    axios({
        method: "GET",
        url: "https://reqres.in/api/users?page=2",
    })
    .then((response) => {
        let array = response.data.data
        let [admin1, admin2, admin3, ... menejs]= array
        object = [...object, admin1, admin2, admin3]
        renders(object)
    })
}
renderUsers()
let template = renderElement("template").content
let cards = renderElement(".admin__cards")
function renders(data){
    for(let i = 0; i<data.length; i++){
       console.log(data[i])
       let cloun = template.cloneNode(true)
       let img = cloun.querySelector(".card-img-top")
       img.src = data[i].avatar
       let title = cloun.querySelector(".card-name")
       title.textContent = "Admin"
       let name = cloun.querySelector(".card-names")
       name.textContent = data[i].name
       let btn = cloun.querySelector(".card-btn")
       btn.dataset.id = data[i].id
       cards.appendChild(cloun)
    }
}
let object = {
    name: null,   

}
window.addEventListener("click", (e) => {
    if(e.target.matches(".card-btn")){
        console.log(true)
        let btnId = e.target.dataset.id
        axios({
            method: "GET", 
            url: "https://reqres.in/api/users?page=2",
        })
        .then((response) => {
            let data = response.data.data
            data.map((item) => {
                if(btnId == item.id){
                    object.name = `${item.first_name} ${item.last_name}`                    
                    console.log(object)

                }
            })            
        })
    }else{
        console.log(false)
    }
})