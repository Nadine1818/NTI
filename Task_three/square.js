import {abstarctShape} from './shape.js'
export class Square extends abstarctShape {
     constructor(side){
        super()
        this.side = side
     }

      area() {
        return this.side * this.side;
        
     }

     parameter(){
        return 4*this.side
     }

      toString(){
        return `Square parameter = ${this.parameter()}. Square area = ${this.area()}`
     }

}