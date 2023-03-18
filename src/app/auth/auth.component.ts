import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

import { UserService } from '../core/services/user.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})

export class AuthComponent {
  intro = "Dear Applicant please type your credentials in the appropriate fields. Or contact the support desk"
  email = "Username:"
  password = "Password:"
  errors = [];
  authForm: FormGroup;

  constructor(private userService: UserService, private fb: FormBuilder) { 
    this.authForm = this.fb.group({
      email: [''],
      password: [''],
    });
  }

  onSubmitHandler() {
    debugger;
    const credentials = this.authForm.value;
    debugger;

    // event.preventDefault()
    this.userService.auth('/api/todos', credentials)
      .subscribe({
        next: (data) => {
          debugger;
          console.log(data);
        },
        error: (data) => {
          debugger;
          this.errors = data;
        }
      })
  }
}
