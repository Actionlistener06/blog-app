import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user-model';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService{

  constructor(base : BaseService) {
    super(base.http);
   }
   getUsers():Observable<UserModel[]>{
    return this.getReq('/users');
   }
}
