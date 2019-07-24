import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../models/User.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string = 'https://reqres.in/api';

  constructor(
    private http: HttpClient
  ) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}/users?per_page=6&delay=2`)
      .pipe(
        map((resp: any) => resp.data)
      );
  }

  getUser(id: string): Observable<User> {
    return this.http.get<User>(`${this.url}/users/${id}?delay=2`)
      .pipe(
        map((resp: any) => resp.data)
      );
  }

}
