import { Component } from '@angular/core';
const todo = [
  {
    id : 1,
    title: '吃饭',
    down: true
  },
  {
    id : 2,
    title: '写代码',
    down: false
  },
  {
    id: 3,
    title: '睡觉',
    down: true
  }
];
@Component({
selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todo: {
    id: number,
    title: string,
    down: boolean
  }[] = todo;

  addtodo(e): void{
    const todoContent = e.target.value;
    if (!todoContent.length){
      return;
    }
    const last = this.todo[this.todo.length - 1];
    this.todo.push(
      {
        id: last ? last.id + 1 : 1,
        title: todoContent,
        down: false
      }
     );
    e.target.value = ' ';
  }
  get toggleAll(){
   return this.todo.every(item => item.down);
  }
  set toggleAll(val){
    this.todo.forEach(item => item.down = val)
  }
}