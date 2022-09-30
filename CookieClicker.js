// console.log(document.getElementById("Project1"));
// console.log(document.getElementsByClassName("titleInner"));
// console.log(document.getElementsByTagName("div"));
// console.log(document.getElementsByTagName("body"));

// //step 1: make sure we have access to element

// //step 2: we need to access the style Property on the element
// let x = document.getElementsByClassName("titleInner")[0];
// // x.style.backgroundColor = "blue";
// //className .add() adds a new class to element .remove() and .contains() checks if it has a specified class.
// // console.log(document.getElementsByTagName("div").length);
// //console.createElement(""); creates a new free floating element
// x.classList.add("Milky")
// console.log(x.classList)
// console.log(x.classList.contains("Milky"))

// //element.appendChild(newElement) inserts a new element into the end of an existing element 
// //element.prepend(newElement) inserts at the beginning of an existing element
// //element.insertBefore(newElement,siblingElement)
// //element.removeChild(childElement);

// let b = document.createElement("p");
// b.innerText = "";
// let c = document.getElementsByClassName("left_navP")[0]
// c.appendChild(b);

let totalpoints = 0;
let purchasePoints = 0;
let autoPoints = 0;
const x = document.getElementById("Score");
let createbox = {
    class : ["titleInner","paragraphInner","buyButton"],
    title : ["Coffee Press","Coffee Press","Coffee Press","Coffee Press","Coffee Press"],
    cost : [10,15,25,125,225],
    unlock : [0,5,10,50,100],
    buybutton : ["Purchase"]
}



function removeMilky1(){
let first = "";
    for(let i = 0; i < 4; i++){
        first = document.getElementsByClassName("first")[i]
        first.classList.remove('MilkyUnlock');
    }
}
function removeMilky2(){
    let second = "";
        for(let i = 0; i < 4; i++){
            second = document.getElementsByClassName("second")[i]
            second.classList.remove('MilkyUnlock');
        }
    }
function removeMilky3(){
    let third = "";
        for(let i = 0; i < 4; i++){
            third = document.getElementsByClassName("third")[i]
                third.classList.remove('MilkyUnlock');
            }
        }
function removeMilky4(){
            let fourth = "";
                for(let i = 0; i < 4; i++){
                    fourth = document.getElementsByClassName("fourth")[i]
                    fourth.classList.remove('MilkyUnlock');
                }
            }
setInterval(function(event){
    purchasePoints = purchasePoints + autoPoints;
    totalpoints = totalpoints + autoPoints
    x.innerText = "Your Score: " + purchasePoints;
    if(totalpoints >= createbox["unlock"][1]){
        removeMilky1();
    }
    if(totalpoints >= createbox["unlock"][2]){
        removeMilky2();
    }
    if(totalpoints >= createbox["unlock"][3]){
        removeMilky3();
    }
    if(totalpoints >= createbox["unlock"][4]){
        removeMilky4();
    }
}, 1000)
const button = document.getElementsByTagName('button')[0]
button.addEventListener('click',function(evt){
    console.log ("button was clicked!")
    totalpoints = totalpoints + 1;
    purchasePoints = purchasePoints + 1;
    x.innerText = "Your Score: " + purchasePoints;
    console.log (totalpoints);
})
const FirstEquipment = document.getElementsByTagName('a')[1]
const SecondEquipment = document.getElementsByTagName('a')[2]
const ThirdEquipment = document.getElementsByTagName('a')[3]
const FourthEquipment = document.getElementsByTagName('a')[4]
const FifthEquiment = document.getElementsByTagName('a')[5]
console.log(document.getElementsByClassName('cost'));
const cost1 = document.getElementsByClassName('cost')[0]
const cost2 = document.getElementsByClassName('cost')[1]
const cost3 = document.getElementsByClassName('cost')[2]
const cost4 = document.getElementsByClassName('cost')[3]
const cost5 = document.getElementsByClassName('cost')[4]
FirstEquipment.addEventListener('click',function(evt){
    if(purchasePoints >= createbox['cost'][0]){
    autoPoints = autoPoints + 1;
    purchasePoints = purchasePoints - createbox['cost'][0]
    x.innerText = "Your Score: " + purchasePoints;
    createbox['cost'][0] = Math.floor(createbox['cost'][0]*1.25);
    cost1.innerText = "Cost: " + createbox['cost'][0]
    }
})
SecondEquipment.addEventListener('click',function(evt){
    if(purchasePoints >= createbox['cost'][1]){
    autoPoints = autoPoints + 5;
    purchasePoints = purchasePoints - createbox['cost'][1]
    x.innerText = "Your Score: " + purchasePoints;
    createbox['cost'][1] = Math.floor(createbox['cost'][1]*1.25);
    cost2.innerText = "Cost: " + createbox['cost'][1]
    }
})
ThirdEquipment.addEventListener('click',function(evt){
    if(purchasePoints >= createbox['cost'][2]){
    autoPoints = autoPoints + 10;
    purchasePoints = purchasePoints - createbox['cost'][2]
    x.innerText = "Your Score: " + purchasePoints;
    createbox['cost'][2] = Math.floor(createbox['cost'][2]*1.25);
    cost3.innerText = "Cost: " + createbox['cost'][2]
    }
})
FourthEquipment.addEventListener('click',function(evt){
    if(purchasePoints >= createbox['cost'][3]){
    autoPoints = autoPoints + 50;
    purchasePoints = purchasePoints - createbox['cost'][3]
    x.innerText = "Your Score: " + purchasePoints;
    createbox['cost'][3] = Math.floor(createbox['cost'][3]*1.25);
    cost4.innerText = "Cost: " + createbox['cost'][3]
    }
})
FifthEquiment.addEventListener('click',function(evt){
    if(purchasePoints >= createbox['cost'][4]){
    autoPoints = autoPoints + 100;
    purchasePoints = purchasePoints - createbox['cost'][4]
    x.innerText = "Your Score: " + purchasePoints;
    createbox['cost'][4] = Math.floor(createbox['cost'][4]*1.25);
    cost5.innerText = "Cost: " + createbox['cost'][4]
    }
})

