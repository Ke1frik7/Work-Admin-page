window.addEventListener("load",() => {
    let admin = renderElement("#admins")
    let menejer = renderElement("#menejers")
    let direktor = renderElement("#direktors")
    admin.addEventListener("click", () => {
        window.location.replace("admin.html")
    })
    menejer.addEventListener("click",() => {
        window.location.replace("menejer.html")
    })
    direktor.addEventListener("click", () => {
        window.location.replace("direktor.html")
    })
    window.addEventListener("click", (e) => {
        if(e.target.matches("#ad")){
            window.location.replace("admin.html")
            console.log(true)
        }else if(e.target.matches("#man")){
            window.location.replace("menejer.html")
        }else if(e.target.matches("#der")){
            window.location.replace("direktor.html")
        }else{
            console.log(false)
        }
    })
    function renderUsers(user){
        let object = []
        axios({
            method: "GET",
            url: "https://reqres.in/api/users?page=2",
        })
        .then((response) => {
            let array = response.data.data
            console.log(array)
            let [admin1, admin2, admin3, ... menejs]= array
                     
        })
    }
    renderUsers("Shox")
})