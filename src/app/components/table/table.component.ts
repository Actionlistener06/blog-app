import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import {NgFor} from '@angular/common';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [MatTableModule, NgFor, MatTableDataSource,MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule]
})
export class TableComponent implements OnInit, AfterViewInit{
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  @Input()
  columns: Array<any>= [];
  @Input() 
  dataSet: Array<any>=[];
  
  dataSource!: MatTableDataSource<any>;
  displayedColumns: Array<any> = [];
   constructor() {

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.dataSet);
  }
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
  
  ngOnInit() {
   // set table columns
   this.displayedColumns = this.columns;   
  
   this.dataSource = new MatTableDataSource(this.dataSet);
   
 } 
 ngAfterWiewInit(){
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
 }
 applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}
}
