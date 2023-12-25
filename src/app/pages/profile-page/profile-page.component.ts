import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { UserModel } from 'src/app/model/auth-model';
import { UserAction } from 'src/app/store/auth.actions';
import { AuthState } from 'src/app/store/auth.state';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit{
  @Select(AuthState.getUser) $user!:Observable<UserModel>


  constructor(private store:Store){}

  ngOnInit(): void {
    this.store.dispatch(new UserAction())
  }
}
