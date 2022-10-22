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
    image: null,
    admin: "admin"
}
window.addEventListener("click", (e) => {
    if(e.target.matches(".card-btn")){
        console.log(true)
        cardLocals.classList.toggle("card_locals_block")
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
                    object.image = `${item.avatar}`                    
                    window.localStorage.setItem("object_locals_work", JSON.stringify(object))
                    let parses = JSON.parse(window.localStorage.getItem("object_locals_work"))
                    renderLocalsDiv(parses)
                }
            }    
            )            
        }
        )
    }else{
        console.log(false)
    }
})
let cardLocals = renderElement(".card_locals")
let cardLocalsArray = []
function renderLocalsDiv(obj){
    cardLocalsArray = [...cardLocalsArray, obj]
    for(let i = 0; i<cardLocalsArray.length; i++){
        let img = createTag("img")
        img.src = cardLocalsArray[i].image
        console.log(img)
        let h3 = createTag("h3")
        h3.appendChild(textNode(cardLocalsArray[i].name))
        let h4  =createTag("h4")
        h4.appendChild(textNode(cardLocalsArray[i].admin))
        let p = createTag("p")
        p.appendChild(textNode(cardLocalsArray[i].name + " " +"Bizning adminimiz va bu kishi qo'ng'iroqqa har doim vaqtida javob beradi "))
        cardLocals.innerHTML = null
        cardLocals.appendChild(img)
        cardLocals.appendChild(h3)
        cardLocals.appendChild(h4)
        cardLocals.appendChild(p)
    }
}