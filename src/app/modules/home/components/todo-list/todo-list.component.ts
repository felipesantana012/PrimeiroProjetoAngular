import { Component, DoCheck, OnInit } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck{

  ngDoCheck(){
   this.setLocalStorete()
  }
    
public taskList: Array<TaskList>= JSON.parse( localStorage.getItem("list") || '[]');

public setEmitTaskList(event: string){
  this.taskList.push({task: event, checked: false})
}

public deleteItemTaskList(event: number){
  this.taskList.splice(event,1);
}

public deleteAllTaskList(){
  const confirm = window.confirm("Voce Deseja Deletar Tudo ?");
  if(confirm){
    this.taskList=[];
  }
}

public validationInput(event: string, index: number){

  if(!event.length){
    const confirm = window.confirm("Task esta vazia, deseja deletar ?");
    if(confirm){
      this.deleteItemTaskList(index);
    }
  }
}

public setLocalStorete(){
  this.taskList.sort( (first, last) => Number(first.checked) - Number(last.checked));
  localStorage.setItem("list", JSON.stringify(this.taskList));
}

}
