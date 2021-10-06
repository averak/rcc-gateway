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
import { UserGroupModel } from 'src/app/model/user-group.model';

@Component({
  selector: 'app-user-groups-table',
  templateUrl: './user-groups-table.component.html',
  styleUrls: ['./user-groups-table.component.css'],
})
export class UserGroupsTableComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() userGroups: UserGroupModel[] = [];

  @Output() userGroupEdit = new EventEmitter<UserGroupModel>();
  @Output() userGroupDelete = new EventEmitter<UserGroupModel>();

  columns: string[] = ['name', 'description', 'members', 'control'];
  dataSource!: MatTableDataSource<UserGroupModel>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() {}

  ngOnInit(): void {
    // FIXME: バックエンドが完成するまではダミーデータを表示
    this.userGroups.push({
      name: '管理者',
      description: 'RCC Gatewayの全体管理者',
      roles: [],
      members: [],
    });

    this.dataSource = new MatTableDataSource<UserGroupModel>(this.userGroups);
    this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.userGroups !== undefined) {
      this.userGroups = changes.userGroups.currentValue;
      this.ngOnInit();
    }
  }

  onClickEdit(userGroup: UserGroupModel): void {
    this.userGroupEdit.emit(userGroup);
  }

  onClickDelete(userGroup: UserGroupModel): void {
    this.userGroupDelete.emit(userGroup);
  }
}
