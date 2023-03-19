import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { LoaderService } from '../core/services/loader.service';

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
  isLoading = false;
  errors = [];
  authForm: FormGroup;

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private loaderService: LoaderService
  ) {
    this.authForm = this.fb.group({
      email: ['', Validators.email],
      password: ['', Validators.pattern(
        /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/
      )],
    });
  }

  onSubmitHandler() {
    this.isLoading = true;
    this.loaderService.setLoading(true);
    debugger;
    const credentials = this.authForm.value;
    this.userService.createSession('/api/todos', credentials, this.errors);
    this.loaderService.setLoading(false);
    this.isLoading = false;
  }
}
