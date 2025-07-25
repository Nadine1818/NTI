import {abstarctShape} from './shape.js'
export class Circle extends abstarctShape {

     constructor(radius){
        super()
        this.radius = radius
     }

      area() {
        return Math.floor(Math.PI * this.radius * this.radius)
        
     }

     parameter(){
        return Math.floor(2*Math.PI*this.radius)
     }

      toString(){
        return `Circle parameter = ${this.parameter()}. Circle area = ${this.area()}`
     }


}