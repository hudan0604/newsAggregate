import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  clickedOnSignUp: boolean = false;

  clickedOnLogin: boolean = true;
  registerForm: FormGroup;
  userNameCtrl: FormControl;
  passwordCtrl: FormControl;
  passwordConfirmCtrl: FormControl;

  constructor(fb: FormBuilder) {
    this.userNameCtrl = fb.control('', [Validators.required]);
    this.passwordCtrl = fb.control('', [Validators.required, Validators.minLength(8)]);
    this.passwordConfirmCtrl = fb.control('', [Validators.required]);

    this.registerForm = fb.group({
      username: this.userNameCtrl,
      password: this.passwordCtrl,
      passwordConfirm: this.passwordConfirmCtrl
    })
  }

  signUpClicked() {
    this.clickedOnSignUp = true;
    this.clickedOnLogin = false;
  }
  loginClicked() {
    this.clickedOnLogin = true;
    this.clickedOnSignUp = false;
  }
  register(values) {
    console.log('register form values : ', values);
  }

  ngOnInit() {
  }

}
