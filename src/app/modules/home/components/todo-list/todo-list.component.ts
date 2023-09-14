import { Component, OnInit } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit{
  ngOnInit(): void {
    
  }

  public taskList: Array<TaskList>= [];

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

}
