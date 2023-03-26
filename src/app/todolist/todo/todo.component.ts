import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {ApiService} from "../../core/services/api.service";
import {map} from "rxjs/operators";

type ItemsType = {
  id: string,
  title: string,
  todoListId?: string
}

type Task = {
  items: ItemsType[]
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})

export class TodoComponent implements OnInit {
  @Input() todolists$!: Observable<any>;
  tasks: ItemsType[] = [];

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.todolists$.pipe(
      map((data) => {
        data.map((item: any) => {
          const taskItems = this.apiService.get(`/todo-lists/${item.id}/tasks`).subscribe({
            next: (data: Task) =>{
              debugger;
              this.tasks.push(...data.items)
            },
            error: (data)=> {
              debugger;
            }
          })
          console.log(taskItems)
          debugger;
        })
        console.log(data)
        debugger;
      })
    ).subscribe()
  }

}
