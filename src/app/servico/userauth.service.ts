import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserauthService {
  userId = localStorage.getItem('userId');

  userCollection: AngularFirestoreCollection;
  adminCollection: AngularFirestoreCollection;
  reparoCollection: AngularFirestoreCollection;

  constructor(private af: AngularFirestore) { 
    this.userCollection = this.af.collection('usuario');
    this.adminCollection = this.af.collection('admin');
    this.reparoCollection = af.collection('techamp');   

  }

  consultaAdmin(){
    return this.adminCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data}
        })

      })
    )
  }

  consulta(){
    return this.userCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data}
        })

      })
    )
  }


  consultaOne(id: string){
    return this.userCollection.doc(id).valueChanges();
  }

}
