import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';
   isRecipe:boolean=true;
constructor(){

}


  eventFeautreSelected(feature:string){
    console.log(feature)
if(feature=='recipe'){
  this.isRecipe=true;
}else{
this.isRecipe=false;
}
  }
}
