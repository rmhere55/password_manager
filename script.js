//logic to fill
const DeletePasswords = (website)=>{
    
let data = localStorage.getItem("password")

let arr =JSON.parse(data)
arrUpdated =arr.filter((e)=>{
    return e["Website"]!== website;  //filtering out the password of that particular site from local storage
})
localStorage.setItem("password", JSON.stringify(arrUpdated))
alert 
(`All password for ${website} have been deleted`)
showPasswords()

localStorage.setItem("password", JSON.stringify(arrUpdated))
}
const showPasswords = ()=>{


let tb = document.querySelector("table")
let data = localStorage.getItem("password")
if(data == null){
    tb.innerHTML    = "No Data To show";
}
else{
    tb.innerHTML = `<tr>
    <th>Website</th>
    <th>Username</th>
    <th>password</th>
    <th>Delete</th>
    </tr>`
    let arr =JSON.parse(data)
    let str =""
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        
    str += `<tr>
<td>${ element.website}
    <img onclick="copyText(${element.website})" src="./copy.svg" alt="Copy" width="24" height="24"</td>
<td>${element.username}
    <img onclick="copyText(${element.username})" src="./copy.svg" alt="Copy" width="24" height="24"</td>
<td>${element.password}
    <img onclick="copyText(${element.password})" src="/copy.svg" alt="Copy" width="24" height="24"</td>
<td> <button  class = "btnsm" onclick="deletePasswords('${element.website}')">Delete</button></td>


</tr>`
}



tb.innerHTML += str;



}}



window.onload=()=>showPasswords();







// console.log(tb);


console.log("working");
showPasswords()
document.querySelector(".btn").addEventListener("click", (e)=>{
    e.preventDefault()
    console.log("Clicked...")
    // // console.log(   username.value , password.value)  
    // console.log(username.value, password.value);
    // //use id here from html
    // let password = localStorage.getItem("password")
    // console.log(password)
    console.log(username.value, passwords.value);

    // Use the correct key "passwords" instead of "password"
    let passwords = localStorage.getItem("passwords");
    console.log(passwords);
    if(passwords == null){
        let json = []
        json.push({ website:website.value ,username:username.value, password:passwords.value })
        alert("Password Saved");
        localStorage.setItem("password" , JSON.stringify(json))
    }
    else{
        let json = JSON.parse(localStorage.getItem("password"))
        json.push({website:website.value  , username:username.value, password:passwords.valueOf })
        alert("Password Saved");
        localStorage.setItem("password" , JSON.stringify(json))
    
    }
    showPasswords()

})
function deletePasswords(){
    let websites = document.querySelectorAll("#websites tr td img")[0].getAttribute("src")
    let index = parseInt(websites[1])-parseInt(1);
    let password =JSON.parse(localStorage.getItem("password"));
    password.splice([index], [1]);
    alert(`Deleted ${password[index]}`)
}



function copyText(Text) {
    // Your copy text logic here
    navigator.clipboard.writeText
    alert('Text copied!');
}



