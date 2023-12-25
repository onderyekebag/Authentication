
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Store } from "@ngxs/store";
import { Observable, map } from "rxjs";
import { AuthState } from "../store/auth.state";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn:'root'
})

export class AdminGuard implements CanActivate{
  constructor(private store: Store, private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      
    return this.store.select(AuthState.getUser).pipe(
      map(isAdmin => {
        if(isAdmin?.roles?.includes("Administrator")){
          return true
        }
        else{
          
          return false
        }
      }
        )
    );
  }
}