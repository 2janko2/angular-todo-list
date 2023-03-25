import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { LoaderService } from '../core/services/loader.service';

import { UserService } from '../core/services/user.service';
import {ResultCodesEnum} from "../core/models/result-codes.model";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})

export class AuthComponent {
  intro = "Dear Applicant please type your credentials in the appropriate fields. Or contact the support desk"
  email = "Username:"
  password = "Password:"
  errors: any;
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
    try{
      this.loaderService.setLoading(true);
      this.userService.createSession('/api/login', this.authForm.value).subscribe({
        next: (data)=> {
          if(data.messages){
            this.errors = data.messages[0];
            this.userService.navigate(data);
          }
        },
        error: (err)=>{
          this.errors = err;
          console.log(err)
        }
      })
    } catch (e){
      this.errors = e;
    } finally {
      this.loaderService.setLoading(false);
    }

  }
}
