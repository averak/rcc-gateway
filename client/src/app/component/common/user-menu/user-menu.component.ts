import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/model/user.model';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css'],
})
export class UserMenuComponent implements OnInit {
  user!: UserModel;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.user = {
      firstName: '健太朗',
      lastName: '阿部',
    };
  }

  logout(): void {
    this.router.navigate(['/login']);
  }
}
