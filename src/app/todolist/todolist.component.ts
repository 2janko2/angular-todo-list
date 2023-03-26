import {Component, OnInit} from '@angular/core';
import {ApiService} from "../core/services/api.service";
import {map, mergeMap} from "rxjs/operators";
import {from} from "rxjs";

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
  tasks$: any;

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.todolists$ = this.apiService.get('/todo-lists')
  }
}
