window.addEventListener("load", () => {
    let form = renderElement(".register__form")
    form.addEventListener("submit", handleForm)
    let nameInput = renderElement(".register__form_name_input")
    let emailInput = renderElement(".register__form_email_input")
    let paswordInput = renderElement(".register__form_register_password")
    let error = renderElement(".error")
    let resultArray = []
    function handleForm(e){
        e.preventDefault()
        resultArray = [...resultArray, nameInput.value, emailInput.value, paswordInput.value]
        if(resultArray.includes("Shohijahon") && resultArray.includes("shohijahonmusinkulov@gmail.com") && resultArray.includes("82850406m")){
            console.log(true)
            window.location.replace("./index.html")
        }else {
            error.classList.add("block")
        }
    }
})