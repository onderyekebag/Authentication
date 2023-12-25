import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { AuthState } from './store/auth.state';
import { Observable } from 'rxjs';
import { Logout, UserAction } from './store/auth.actions';
import { JWTToken } from './model/auth-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
 isLogin:boolean=true;
  user:any;
 @Select(AuthState.isAuthenticated) $isUserLogin !: Observable<boolean>;
 @Select(AuthState.getUser) $user !: Observable<any>;

  constructor(private store:Store,private router:Router){}

  ngOnInit(): void {
    this.$user.subscribe(x=>{
      this.user = x
      
    })
    
  }

  logout(){
    this.store.dispatch(new Logout());
    this.router.navigateByUrl('/home');
    //!localStorage.removeItem('token');
  }

}
