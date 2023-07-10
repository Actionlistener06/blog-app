import { Component, Output} from '@angular/core';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { UserModel } from 'src/app/models/user-model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list-table',
  templateUrl: './user-list-table.component.html',
  styleUrls: ['./user-list-table.component.css'],
  providers: [MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule]
})
export class UserListTableComponent {
  @Output() 
  displayedColumns: string[] = ['id', 'username', 'email', 'creation_date', 'is_active'];
  @Output()
  dataSource: Array<any>;

  constructor(private userService: UserService) {
    const users: UserModel[] = [];
    // Assign the data to the data source for the table to render
    this.dataSource = users;
    this.userService.getUsers().subscribe((data: UserModel[]) => {
      this.dataSource = data;
    }
    );
  }
}



 

/*
 ELEMENT_DATA!: UserModel[];
  constructor(private userService: UserService) {
    this.userService.getUsers().subscribe((data: UserModel[]) => {
      this.ELEMENT_DATA = data;
      console.log(this.ELEMENT_DATA);
    }
    );
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  columns = [
    {
      columnDef: 'id',
      header: 'No.',
      cell: (element: UserModel) => `${element.id}`,
    },
    {
      columnDef: 'username',
      header: 'Username',
      cell: (element: UserModel) => `${element.username}`,
    },
    {
      columnDef: 'email',
      header: 'Email',
      cell: (element: UserModel) => `${element.email}`,
    },
    {
      columnDef: 'creation_date',
      header: 'Date',
      cell: (element: UserModel) => `${element.creation_date}`,
    },
    {
      columnDef: 'is_active',
      header: 'Active',
      cell: (element: UserModel) => `${element.is_active}`,
    },
  ];
  dataSource = this.ELEMENT_DATA;
  displayedColumns = this.columns.map(c => c.columnDef);
}
*/
