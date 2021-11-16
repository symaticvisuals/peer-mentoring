import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos : Todo[];
  constructor() {
    this.todos = [

    ]
   }

  ngOnInit(): void {
  }
 delete(todo: Todo){
   //find the index of todo we want to delete
   const index = this.todos.indexOf(todo);

    //splice the todo out of the array
    this.todos.splice(index,1)
    //splice (index, no. of items to delete)

 }
 add(todo: Todo){
   this.todos.push(todo);
 }



}
