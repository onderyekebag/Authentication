export interface UserModel {
  id?: number,
  firstName?: string,
  lastName?: string,
  email?: string,
  phoneNumber?: string,
  address?: string,
  zipCode?: string,
  builtIn?: boolean,
  roles?: string[]
}

export interface JWTToken{
    token?:string,
}

export interface LoginModel{
  email?:string | null | undefined,
  password?:string | null | undefined,
}
