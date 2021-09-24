import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoginRequest } from 'src/app/request/login.request';

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.css'],
})
export class LoginCardComponent implements OnInit {
  @Output() loginTransit = new EventEmitter<LoginRequest>();

  requestBody: LoginRequest = {} as LoginRequest;
  hidePassword = true;

  constructor() {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.loginTransit.emit(this.requestBody);
  }
}
