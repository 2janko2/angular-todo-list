import {Component, OnInit} from '@angular/core';
import {ApiService} from "../core/services/api.service";
import {FormControl} from "@angular/forms";
import {debounceTime, of, switchMap} from "rxjs";

interface Todolist {
  addedDate: number,
  id: string,
  order: string,
  title: string
}

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {
  todolists$: any;
  filterArr: any = [];
  inputValue = new FormControl('');

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    console.log(this.inputValue.valueChanges)
    this.todolists$ = this.apiService.get('/todo-lists')
    this.inputValue.valueChanges.pipe(
      // debounceTime(1000),
      switchMap((value) => {
        return this.todolists$.subscribe((todolists: any) => {
          for (let todo of todolists) {
            if (todo.title.includes(value)) {
              this.filterArr.push(todo);
              this.todolists$ = of(this.filterArr);
              return this.todolists$
            } else {
              return []
            }
          }
        })
      })
    ).subscribe({
      next: (data) => {
      },
      error: (err) => {
      }
    })
  }
}
