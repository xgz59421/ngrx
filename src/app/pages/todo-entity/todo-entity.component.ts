import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { fromEvent, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { AppState } from 'src/app/store';
import { addEntityTodo, deleteEntityTodo } from 'src/app/store/actions/todo-entity.actions';
import { EntityTodo } from 'src/app/store/reducers/todo-entity.reducer';
import { selectEntityTodos } from 'src/app/store/selectors/todo-entity.selectors';

@Component({
  selector: 'app-todo-entity',
  templateUrl: './todo-entity.component.html',
  styles: [
  ]
})
export class TodoEntityComponent{

  @ViewChild('AddTodoInput') AddTodoInput!:ElementRef
  todos: Observable<EntityTodo[]>
  public todoitem = "";
  constructor(private store: Store<AppState>) {
    this.todos = this.store.pipe(select(selectEntityTodos))
  }

  addTodo(){
    console.log(this.todoitem);
    this.store.dispatch(addEntityTodo({title: this.todoitem}));
    this.todoitem = ''
  }
  deleteTodo(id: string){ 
    console.log(id);
    this.store.dispatch(deleteEntityTodo({id}))
  }
  changeTodo(){
    // console.log(this.todoitem);
  }
}
