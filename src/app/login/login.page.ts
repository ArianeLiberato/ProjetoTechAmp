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
  users: any[] = []; 
  admin: any[]  = [];
  reparoCollection: AngularFirestoreCollection;
  constructor(
    //private authentication: AuthenticationService,
    private formBuilder: FormBuilder,
    private router: Router,
    private userauth: UserauthService,
    private af: AngularFirestore
    ) { this.reparoCollection = af.collection('usuario');   }

  ngOnInit() {
    this.userauth.consulta().subscribe(results => {
      this.users = results
      //console.log(this.users);
    
    });

    this.userauth.consultaAdmin().subscribe(results => {
      this.admin = results
      //console.log(this.users);
    
    });
 
    this.validaForm();
  }

  validaForm(){
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  mudarPerfil() {
    this.tipoPerfil = "Admin";
  }
  mudarPerfil2() {
    this.tipoPerfil = "Usuário"; 
  }

  login() {

    if(this.tipoPerfil == "Usuário"){


      for(let i = 0; i < this.users.length; i++){
        if (this.form.value.email == this.users[i].email && this.form.value.password == this.users[i].password) {
          this.router.navigate(['inicio/', this.users[i].id], {replaceUrl: true});
        }else{
          console.log('Usuário não encontrado!')
        }
      }

    }else if(this.tipoPerfil == "Admin"){

      for(let i = 0; i < this.admin.length; i++){
        if (this.form.value.email == this.admin[i].email && this.form.value.password == this.admin[i].password) {
          this.router.navigate(['admin/', this.admin[i].id], {replaceUrl: true});
        }else{
          console.log('Usuário não encontrado!')
        }
      }
    }else {
      console.log('não funcionou');
    }

  }
}


   /*  for(let i = 0; i < this.users.length; i++){
      if (this.tipoPerfil == 'Usuário' && this.form.value.email == this.users[i].email && this.form.value.password == this.users[i].password) {
        this.router.navigate(['inicio/', this.users[i].id], {replaceUrl: true});
      }else
       if (this.tipoPerfil == 'Admin' && this.form.value.email == this.users[i].email && this.form.value.password == this.users[i].password) { 
        this.router.navigate(['admin/', this.users[i].id], {replaceUrl: true});
      } else { 
        console.log('Usuario não encontrado!');
      }
    } */
  

