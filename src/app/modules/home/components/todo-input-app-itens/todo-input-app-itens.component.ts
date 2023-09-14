import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-app-itens',
  templateUrl: './todo-input-app-itens.component.html',
  styleUrls: ['./todo-input-app-itens.component.scss']
})
export class TodoInputAppItensComponent {

  @Output() public emitItemTaskList = new EventEmitter();

  public addItemTaskList: string = "";

  public submitItemTaskList(){
    
   this.addItemTaskList = this.addItemTaskList.trim();

    if(this.addItemTaskList){
      this.emitItemTaskList.emit(this.addItemTaskList);
      this.addItemTaskList = "";
    }
     
    
    
  }

}
