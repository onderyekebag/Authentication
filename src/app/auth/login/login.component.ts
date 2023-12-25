import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { LoginModel } from 'src/app/model/auth-model';
import { Login, UserAction } from 'src/app/store/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  loginForm = new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required]),
  })



constructor(private store:Store,private router:Router){}

ngOnInit(): void {
    
}

  onLogin(){
    const loginForm:LoginModel = this.loginForm.value;
    this.store.dispatch(new Login(loginForm))
      .subscribe(
        isLogin=>{
      if(isLogin.auth.token){
        this.router.navigateByUrl('/home')
      }
    },
    (err)=>{
      alert('Login Failed, Email or password is incorrect' + err);
      this.loginForm.reset()
    });
    
  }


}
