import { Component, Input } from '@angular/core';
import { ApiService } from '../core/services/api.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  intro = "Dear Applicant please type your credentials in the appropriate fields. Or contact the support desk"
  username = "Username:"
  password = "Password:"

  constructor(private apiService: ApiService){}

  onSubmitHandler() {
    debugger;
    this.apiService.post('/api/todos', {username: 'Ali', password: '123'})
  }
}
