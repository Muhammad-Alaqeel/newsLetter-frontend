import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { User } from './User';
@Injectable({
  providedIn: 'root'
})
export class SubscribtionService {

  constructor(private http: HttpClient) { }
  postURL:string="http://localhost:1337/rest/user"

  addUser(user:User){
    
    return this.http.post<User>(this.postURL,user)

  }

}
