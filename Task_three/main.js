import {Rectangle} from './rectangle.js'
import {Circle} from './circle.js'
import {Square} from './square.js'

// let rectangle = new Rectangle(1,2)
// console.log("rectangle area: ",rectangle.area())
// console.log("rectangle parameter: ",rectangle.parameter())
// let circle = new Circle(2)
// console.log("circle area: ",circle.area())
// console.log("circle parameter: ",circle.parameter())
// console.log(circle.toString())
// let square = new Square(2)

let circle = document.getElementById("circle")
let circip = document.getElementById("circip")
let sub = document.getElementById("sub")
let circleRes = document.getElementById("circleRes")
circle.addEventListener("click",function(){
    circip.style.display = "flex"
    sub.style.display="flex"
    width.style.display = "none"
    height.style.display = "none"
    subrect.style.display="none"
    side.style.display = "none"
    subSquare.style.display="none"
    squareRes.style.display="none"


    sub.addEventListener("click",function(){
    let radius = parseInt(circip.value)
    let circle = new Circle(radius)
        circleRes.innerHTML= circle.toString()
        circleRes.style.display="flex"
    })

})

let rectangle = document.getElementById("rectangle")
let width = document.getElementById("width")
let height = document.getElementById("height")
let subrect = document.getElementById("subrect")
let rectRes = document.getElementById("rectRes")
rectangle.addEventListener("click",function(){
    width.style.display = "flex"
    height.style.display = "flex"
    subrect.style.display="flex"
    circip.style.display = "none"
    sub.style.display="none"
    side.style.display = "none"
    subSquare.style.display="none"
    circleRes.style.display="none"
    squareRes.style.display="none"
    

    subrect.addEventListener("click",function(){
    let w = parseInt(width.value)
    let h = parseInt(height.value)
    let rectangle = new Rectangle(w,h)
        rectRes.innerHTML= rectangle.toString()
        rectRes.style.display="flex"
    })

})

let square = document.getElementById("square")
let side = document.getElementById("side")
let subSquare = document.getElementById("subSquare")
let squareRes = document.getElementById("squareRes")
square.addEventListener("click",function(){
    side.style.display = "flex"
    subSquare.style.display="flex"
    circip.style.display = "none"
    sub.style.display="none"
    width.style.display = "none"
    height.style.display = "none"
    subrect.style.display="none"
    rectRes.style.display="none"
    circleRes.style.display="none"

    subSquare.addEventListener("click",function(){
    let s = parseInt(side.value)
    let square = new Square(s)
        squareRes.innerHTML= square.toString()
        squareRes.style.display="flex"
    })

})