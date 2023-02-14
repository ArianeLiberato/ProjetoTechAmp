import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  public appPages = [
    { title: 'Início', url: '/inicio/:id', icon: 'home' },
    { title: 'Perfil', url: '/perfil/:id', icon: 'person' },
    { title: 'Sair', url: '/folder/Sair', icon: 'exit' }
  ];

  nameUser = localStorage.getItem('name');
  
  constructor() {}


  ngOnInit(): void {   
  }
}

