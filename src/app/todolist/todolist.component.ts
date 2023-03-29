import {Component, OnInit} from '@angular/core';
import {ApiService} from "../core/services/api.service";
import {FormControl} from "@angular/forms";
import {BehaviorSubject, combineLatest, debounceTime, of, Subject, switchMap} from "rxjs";

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

  aCounter$ = new BehaviorSubject(0)
  bCounter$ = new BehaviorSubject(0)
  commonCounter: any;

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.testCombiner()
    this.todolists$ = this.apiService.get('/todo-lists')
    this.inputValue.valueChanges.pipe(
      debounceTime(1000),
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

  testCombiner() {
    addEventListener('keyup', (event) => {

      if (event.keyCode === 65) this.aCounter$.next(this.aCounter$.getValue() + 1);
      if (event.keyCode === 67) {
        return this.bCounter$.next(this.bCounter$.getValue() + 1);
      }
    })

    this.testTwo(this.aCounter$, this.bCounter$)

  }

  testTwo(a: any, b: any) {
    let i = 0;
    combineLatest([
      a, b
    ]).subscribe((data) => {
      this.commonCounter = data;
      console.log(this.commonCounter)
    })
  }

}
