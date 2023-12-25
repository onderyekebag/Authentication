import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { LoginModel } from '../model/auth-model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  

  constructor(private http:HttpClient,@Inject('API_URL') private apiUrl: string) { }

  login(user:LoginModel){
    return this.http.post(`${this.apiUrl}/login`,user)
  } 
  getUser(){
    return this.http.get(`${this.apiUrl}/user`)
  } 
}
