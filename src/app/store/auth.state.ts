import { Action, Selector, State, StateContext } from "@ngxs/store";
import { JWTToken, UserModel } from "../model/auth-model";
import { Injectable } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { Login, Logout, UserAction } from "./auth.actions";
import { tap } from "rxjs";


export interface AuthStateModel{
    token?:string;
    user:UserModel | null;
}

@State<AuthStateModel>({
    name:'auth',
    defaults:{
        token:undefined,
        user: null
    }
})

@Injectable()

export class AuthState{

    @Selector()
    static getToken ({token}:AuthStateModel):string | undefined{
        return token;
    }

    @Selector()
    static isAuthenticated(state: AuthStateModel): boolean {
      return !!state.token;
    }

    @Selector()
    static getUser (state:AuthStateModel):UserModel | null{
        return state.user;
    }

    constructor(private authService:AuthService){}

    @Action(Login)
    token(ctx:StateContext<AuthStateModel>,{userLogin}:Login){
        return this.authService.login(userLogin).pipe(
               tap((data)=>{
                const state = ctx.getState();
                ctx.patchState({
                    ...state,
                    token:(data as any).token
                })
                //localStorage.setItem('token',(data as any).token)
               }) 
        )
    }
    
    @Action(UserAction)
    user(ctx:StateContext<AuthStateModel>){
        return this.authService.getUser().pipe(
               tap((data)=>{
                const state = ctx.getState();
                ctx.patchState({
                    ...state,
                    user:data
                })
               }) 
        )
    }
    @Action(Logout)
    logout(ctx:StateContext<AuthStateModel>){
       ctx.setState({
        token:undefined,
        user:null
       })
    }
}