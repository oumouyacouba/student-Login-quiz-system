const username = document.getElementById("username")
const password = document.getElementById("password")
const btn = document.getElementById("btn")
const result = document.getElementById("result")
btn.onclick = function(){
    const inputusername = username.value
    const inputpassword = password.value
     // Vérification des champs
    if (inputusername === "" || inputpassword === "") {
        result.textContent = "Please fill all fields";
    } 
    else {
        result.textContent = "Registration successful";
    }
    

}
