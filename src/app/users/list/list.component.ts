import { Component, OnInit } from '@angular/core';


import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';

import { User } from 'src/app/models/User.model';
import { LoadUsers } from 'src/app/store/actions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: []
})
export class ListComponent implements OnInit {

  users: User[] = [];
  loading: boolean;
  error: any;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.select('users').subscribe(users => {
      this.users = users.users;
      this.loading = users.loading;
      this.error = users.error;
    });

    this.store.dispatch(new LoadUsers());
  }

}
