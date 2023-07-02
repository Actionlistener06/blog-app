import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService{

  constructor(base : BaseService) {
    super(base.http);
   }
}
