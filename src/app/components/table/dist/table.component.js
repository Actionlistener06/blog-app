"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TableComponent = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var table_1 = require("@angular/material/table");
var form_field_1 = require("@angular/material/form-field");
var input_1 = require("@angular/material/input");
var sort_1 = require("@angular/material/sort");
var paginator_1 = require("@angular/material/paginator");
var TableComponent = /** @class */ (function () {
    function TableComponent() {
        this.columns = [];
        this.dataSet = [];
        this.displayedColumns = [];
        // Assign the data to the data source for the table to render
        this.dataSource = new table_1.MatTableDataSource(this.dataSet);
    }
    TableComponent.prototype.ngAfterViewInit = function () {
        throw new Error('Method not implemented.');
    };
    TableComponent.prototype.ngOnInit = function () {
        // set table columns
        this.displayedColumns = this.columns;
        this.dataSource = new table_1.MatTableDataSource(this.dataSet);
    };
    TableComponent.prototype.ngAfterWiewInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    TableComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    __decorate([
        core_1.ViewChild(paginator_1.MatPaginator)
    ], TableComponent.prototype, "paginator");
    __decorate([
        core_1.ViewChild(sort_1.MatSort)
    ], TableComponent.prototype, "sort");
    __decorate([
        core_1.Input()
    ], TableComponent.prototype, "columns");
    __decorate([
        core_1.Input()
    ], TableComponent.prototype, "dataSet");
    TableComponent = __decorate([
        core_1.Component({
            selector: 'app-table',
            templateUrl: './table.component.html',
            styleUrls: ['./table.component.css'],
            providers: [table_1.MatTableModule, common_1.NgFor, table_1.MatTableDataSource, form_field_1.MatFormFieldModule, input_1.MatInputModule, table_1.MatTableModule, sort_1.MatSortModule, paginator_1.MatPaginatorModule]
        })
    ], TableComponent);
    return TableComponent;
}());
exports.TableComponent = TableComponent;
