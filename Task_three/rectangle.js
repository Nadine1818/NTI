import {abstarctShape} from './shape.js'

export class Rectangle extends abstarctShape {

     constructor(width,height){
        super()
        this.width = width;
        this.height = height
     }

      area() {
        return this.width * this.height;
        
     }

     parameter(){
        return 2*(this.width + this.height)
     }

     toString(){
        return `Rectangle parameter = ${this.parameter()}. Retangle area = ${this.area()}`
     }


}