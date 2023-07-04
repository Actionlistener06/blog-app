import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListTableComponent } from './components/user-list-table/user-list-table.component';
import { PostListTableComponent } from './components/post-list-table/post-list-table.component';
import { CategoryListTableComponent } from './components/category-list-table/category-list-table.component';
import { CommentListTableComponent } from './components/comment-list-table/comment-list-table.component';
import { TabComponent } from './components/tab/tab.component';
import { BaseService } from './services/base.service';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './components/table/table.component';
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import {  MatToolbarModule } from '@angular/material/toolbar';
import {  MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    UserListTableComponent,
    PostListTableComponent,
    CategoryListTableComponent,
    CommentListTableComponent,
    TabComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTabsModule,
    MatIconModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [BaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
