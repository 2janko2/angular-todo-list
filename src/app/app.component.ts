import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.development';
import { LoaderService } from './core/services/loader.service';
import { UserService } from './core/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'todolist';

  constructor(
    private userService: UserService,
    private router: Router,
    private loaderService: LoaderService
  ) { }

  ngOnInit() {
    this.loaderService.setLoading(true);
    this.userService.me(`${environment.me}`);
    this.loaderService.setLoading(false);
  }
}
