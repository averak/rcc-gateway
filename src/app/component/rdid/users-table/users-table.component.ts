import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  OnChanges,
  SimpleChanges,
  AfterViewInit,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UserModel } from 'src/app/model/user.model';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css'],
})
export class UsersTableComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() users: UserModel[] = [];

  @Output() userEdit = new EventEmitter<UserModel>();
  @Output() userDelete = new EventEmitter<UserModel>();

  columns: string[] = ['username', 'email', 'admissionYear', 'userRole', 'control'];
  dataSource!: MatTableDataSource<UserModel>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<UserModel>(this.users);
    this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.users !== undefined) {
      this.users = changes.users.currentValue;
      this.ngOnInit();
    }
  }

  onClickEdit(user: UserModel): void {
    this.userEdit.emit(user);
  }

  onClickDelete(user: UserModel): void {
    this.userDelete.emit(user);
  }
}
