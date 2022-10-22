window.addEventListener("load", () => {
    axios({
        method: "GET", 
        url: "https://reqres.in/api/users?page=2"
    })
    .then((response) => {
        sikles(response.data.data)
    })
})
let parent = renderElement(".menejers__cards")
let template = renderElement("template").content
let menejersArray = []
function sikles(arr){
    for(let i = 0; i<arr.length; i++){
        menejersArray = [...menejersArray, arr[i]]
    }
    let [admin1, admin2, admin3, ...menejers] = menejersArray
    let [menejer1, menejer2, ...direktor] = menejers
    renders(menejer1, menejer2)
}
let array = []
function renders(obj1, obj2){
    array = [...array, obj1, obj2]
    for(let i = 0; i<array.length; i++){
        let clone = template.cloneNode(true)
        let img = clone.querySelector(".card_img_top")
        img.src = array[i].avatar
        let title = clone.querySelector(".card__title")
        title.textContent = `${array[i].first_name} ${array[i].last_name}`       
        let cardUser = clone.querySelector(".card__user")
        cardUser.textContent = "Menejer"
        let btn = clone.querySelector(".card__btn")
        btn.dataset.id = array[i].id
        parent.appendChild(clone)
    }
}
let cardlocals = renderElement(".card_locals")
let objectMenejer = {
    name: null,
    img: null,
    menejer: "menejer"
}
window.addEventListener("click", btns)
function btns(e){
    if(e.target.matches(".card__btn")){
        console.log(true)
        let id = e.target.dataset.id
        axios({
            method: "GET",
            url: "https://reqres.in/api/users?page=2"
        })               
        .then((response) => {
            let array = response.data.data
            for(let i =0; i<array.length; i++){
                if(id == array[i].id){
                    objectMenejer.name = `${array[i].first_name} ${array[i].last_name}`
                    objectMenejer.img = array[i].avatar
                    console.log(objectMenejer)
                    localFunction(objectMenejer)
                }
            }
        })
    }else{
        console.log(false)
    }
}
let cardLocals = renderElement(".card_locals")
function localFunction(arr){
    let localArray = []
    localArray = [...localArray, arr]
    for(let i = 0; i<localArray.length; i++){
        console.log(localArray[i].img)
        cardlocals.classList.toggle("card_locals_block")
        let imagem = createTag("img")
        imagem.src = localArray[i].img
        let h3 = createTag("h3")
        h3.appendChild(textNode(localArray[i].name))
        let h4 = createTag("h4")
        h4.appendChild(textNode(localArray[i].menejer))
        let p = createTag("p")
        p.appendChild(textNode(localArray[i].name + " " + "Loyihamiz menejerlarimizdan biri"))
        cardlocals.innerHTML = null
        cardlocals.appendChild(imagem)
        cardlocals.appendChild(h3)
        cardlocals.appendChild(h4)
        cardlocals.appendChild(p)
    }
}