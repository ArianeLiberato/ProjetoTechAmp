import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserauthService {

  userCollection: AngularFirestoreCollection

  constructor(private af: AngularFirestore) { 
    this.userCollection = this.af.collection('usuario');
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
