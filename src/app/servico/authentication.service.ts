import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private angularAuth: AngularFireAuth
  ) { }

  loginUser(user){
   return this.angularAuth.signInWithEmailAndPassword(user.email, user.password);
  }

  logoutUser(){
    return this.angularAuth.signOut();
  }

  getAuth(){
    return this.angularAuth;
  }

}
