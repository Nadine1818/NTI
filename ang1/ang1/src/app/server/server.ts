import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-server',
  standalone: false,
  templateUrl: './server.html',
  styleUrl: './server.css'
})

export class Server {
  message: string ="server is running"

  getnum(x:number,y:number):number{
    return x+y
  }

  imageurl:string='https://media.istockphoto.com/id/121199853/photo/closeup-of-guy-working-on-a-laptop-indoor.jpg?s=1024x1024&w=is&k=20&c=0uAngvDAolHrh_LUWorV6ZJD5AVO6g2tfavtw9PPHYQ='
  iserror:boolean=false;
  username="nadine"

  hello(){
    console.log("angular is running from here") 
  }

  changevalue(event:any){
    console.log(event.target.value);

  }

  ishere=false;
  users=["ali","mostafa","eman"]

}
