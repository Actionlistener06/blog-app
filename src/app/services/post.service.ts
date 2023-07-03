import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class PostService extends BaseService{

  constructor(base : BaseService) {
    super(base.http);
   }
   getPosts(){
    return this.getReq('/posts');
}
}
