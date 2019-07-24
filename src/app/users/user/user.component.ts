import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';

import { LoadUser } from 'src/app/store/actions';

import { User } from 'src/app/models/User.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: []
})
export class UserComponent implements OnInit {

  user: User;
  loading: boolean;
  error: any;

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.store.dispatch(new LoadUser(params['id'])));
    this.store.select('user').subscribe(user => {
      this.user = user.user;
      this.loading = user.loading;
      this.error = user.error;
    });
  }

}
