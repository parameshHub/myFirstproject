import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingrdient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
@ViewChild('nameInput',{static:false})nameInputRef:ElementRef;
@ViewChild('amountInput',{static:false})amountInputRef:ElementRef;
@Output() ingredientAdded=new EventEmitter<Ingrdient>();

  constructor() { }

  ngOnInit(): void {
  }
  onAddItem(){
    const igName=this.nameInputRef.nativeElement.value;
    const igAmount=this.amountInputRef.nativeElement.value;
    const newIngredient=new Ingrdient(igName,igAmount);
    this.ingredientAdded.emit(newIngredient);
  }
}
