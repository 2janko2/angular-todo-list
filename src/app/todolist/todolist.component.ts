import {Component, OnInit} from '@angular/core';
import {ApiService} from "../core/services/api.service";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {
  todolists$: any;

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.todolists$  = this.apiService.get('/todo-lists')
  }
}
