function direktorAxios(){
    axios({
        method: "GET",
        url: "https://reqres.in/api/users?page=2"
    })
    .then((response) => {
        let array = response.data.data
        let [object1, obj2, obj3, obj4, obj5, ...direktorArray] = array
        max(direktorArray)
    })
}
direktorAxios()
let objectDirektor = {
    name: null, 
    img: null,
    id: null,
    direktor: "Direktor"
}
let template = renderElement("template").content
function max(array){
    array.map((item) => {
        objectDirektor.name = `${item.first_name} ${item.last_name}`
        objectDirektor.img= item.avatar
        objectDirektor.id = item.id
        renders(objectDirektor)
    })
}
let parentArray = []
let parent = renderElement(".direktor__cards")
function renders(object){
    parentArray = [...parentArray, object]
    for(let i = 0; i<parentArray.length; i++){
        console.log(parentArray[i])
        let clone = template.cloneNode(true)
        let images = clone.querySelector(".card_img_top")
        images.src = parentArray[i].img
        let title = clone.querySelector(".card-title")
        title.textContent = parentArray[i].name
        let users = clone.querySelector(".card-users")
        users.textContent = parentArray[i].direktor
        let btn = clone.querySelector(".card-btn")
        btn.dataset.id = parentArray[i].id
        parent.appendChild(clone)
    }
}
let endsArray = []
let cardLocals = renderElement(".card_locals")
window.addEventListener("click", (e) => {
    if(e.target.matches(".card-btn")){
        console.log(true)
        let id = e.target.dataset.id
        cardLocals.classList.toggle("card_locals_block")
        axios({
            method: "GET", 
            url: "https://reqres.in/api/users?page=2"
        })
        .then((response) => {
            let array = response.data.data
            for(let i = 0; i<array.length; i++){
                if(array[i].id == id){
                    endsArray = [...endsArray, array[i]]
                    for(let i = 0; i<endsArray.length; i++){
                        let imgs = createTag("img")
                        imgs.src = endsArray[i].avatar
                        let h2 = createTag("h3")
                        h2.appendChild(textNode(`${endsArray[i].first_name} ${endsArray[i].last_name}`))
                        let h4 = createTag("h4")
                        h4.textContent = `Loyihamiz direktori`
                        let p = createTag("p")
                        p.textContent = " Va bu kishi juda kuplab loyihalarni muvaffaqiyatli yakunlagan "
                        cardLocals.innerHTML = null
                        cardLocals.appendChild(imgs)
                        cardLocals.appendChild(h2)
                        cardLocals.appendChild(h4)
                        cardLocals.appendChild(p)
                    }
                }
            }
        })
    }else{
        console.log(false)
    }
})