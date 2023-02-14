import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { DisableSideMenu } from '../custom-decorator/disable-side-menu.decorator';
import { AuthenticationService } from 'src/app/servico/authentication.service'
import { UserauthService } from '../servico/userauth.service';

import { FirebaserService } from '../servico/firebaser.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@DisableSideMenu()
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  userId = localStorage.getItem('userId');
  tipoPerfil = "Usuário";
  nameButton = "Logar";
  form: FormGroup
  users: [] = []; 

  constructor(
    private authentication: AuthenticationService,
    private formBuilder: FormBuilder,
    private router: Router,
    private userauth: UserauthService,
    private af: AngularFirestore,
    private firebase: FirebaserService
    ) {  }

  ngOnInit() {

    this.validaForm(); 
    this.authentication.getAuth().user.subscribe(results => {
      localStorage.setItem('userId', results.uid );
    }); 
  
  }

  logar(){

    this.authentication.loginUser(this.form.value);
    this.router.navigate(['inicio/:id']);
  
  }
   
 /*    this.router.navigate(['inicio/:id']);
    console.log(this.userId); */

    /* localStorage.getItem('userId');
    this.router.navigate(['inicio/']);
    
    this.authentication.loginUser(this.form.value);
    console.log(localStorage.getItem('userId'));

    this.firebase.consultaOne(localStorage.getItem('userId')).subscribe(results => console.log(results)); */
    
  validaForm(){
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    })
  }
}

