import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/servico/authentication.service'
import { DisableSideMenu } from '../custom-decorator/disable-side-menu.decorator';
import { FirebaserService } from '../servico/firebaser.service';
import { UserauthService } from '../servico/userauth.service';
@DisableSideMenu()
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  nameButton = "Logar";
  form: FormGroup
  

  constructor(
    //private authentication: AuthenticationService,
    private formBuilder: FormBuilder,
    private router: Router,
    private authentication: AuthenticationService,
    private firebase: FirebaserService
    
    ) { }

  ngOnInit() { 
    this.validaForm();
    this.authentication.getAuth().user.subscribe(results => {
      localStorage.setItem('userId', results.uid );
    });    
  }


  validaForm(){
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }


  logar(){
    this.authentication.loginUser(this.form.value);
    console.log(localStorage.getItem('userId'));
    this.firebase.consultaOne(localStorage.getItem('userId')).subscribe(results => console.log(results));
  }


}
