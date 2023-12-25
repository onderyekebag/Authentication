import { LoginModel } from "../model/auth-model";

export class Login{
    static readonly type='[AUTH] Login';
    constructor(public userLogin:LoginModel){}
}

export class UserAction{
    static readonly type='[AUTH] UserAction';
}

export class Logout{
    static readonly type='[AUTH] Logout';
}