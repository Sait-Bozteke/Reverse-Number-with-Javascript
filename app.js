let num=document.getElementById("number")
let btn=document.getElementById("sbmt")
let result=document.getElementById("result")


btn.addEventListener("click", ()=>{
num=num.value.split("").reverse().join("")

result.innerText=num


}



)
