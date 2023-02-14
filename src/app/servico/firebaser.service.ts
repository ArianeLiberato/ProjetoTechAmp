import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class FirebaserService {

  userId = localStorage.getItem('userId');
  user: any ={
  id: localStorage.getItem('userId')
};
  reparoCollection: AngularFirestoreCollection;

  constructor(private af: AngularFirestore) { 
    this.reparoCollection = af.collection('techamp/');
  }

  consultaOne(){
    //console.log(id);
    return this.reparoCollection.doc(this.userId).valueChanges();
  }
  consulta():any{
    return this.reparoCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data}
        })

      })
    )
  }
  
  cadastro(item: any){
    return this.reparoCollection.add(item);
  }
  deletar(id: string){
    return this.reparoCollection.doc(id).delete();
  }
  atualizar(item: any){
    return this.reparoCollection.doc(this.userId).update(item);
  }


}
