document.getElementById("count-elements").innerText = 5;

let countElement  = document.getElementById("count-elements")
let saveElement = document.getElementById("save-elements")


let count = 0



function increment() {
    count += 1
    countElement.innerText = count 
}


function save() {
    let countDash = count + "-"
    saveElement.innerText += countDash
    console.log(count)
    countElement.innerText = 0
    count = 0
}