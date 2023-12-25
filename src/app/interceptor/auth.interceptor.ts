import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { AuthState } from '../store/auth.state';
import { JWTToken } from '../model/auth-model';
import { Login } from '../store/auth.actions';
import { state } from '@angular/animations';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {




  constructor(private store:Store) {}
  @Select(AuthState.getToken) $token!:Observable<any>;
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

  
  const token = this.store.selectSnapshot(AuthState.getToken)
    
    
   

  //  const token = localStorage.getItem('token');

    const requestClone = request.clone({
      setHeaders:{
        Authorization: `Bearer ${token}`,
      }
    })
    

    return next.handle(requestClone);
  }
}
