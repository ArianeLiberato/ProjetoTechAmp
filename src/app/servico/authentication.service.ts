import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private angularAuth: AngularFireAuth,
    private router: Router
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

 /*  loginAdmin(admin) {
    return this.angularAuth.signInWithEmailAndPassword(admin.)
  } */
}
