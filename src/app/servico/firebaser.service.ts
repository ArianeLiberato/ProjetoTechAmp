import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

import { actionSheetController } from '@ionic/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class FirebaserService {

  userId = localStorage.getItem('userId')

  reparoCollection: AngularFirestoreCollection

  constructor(private af: AngularFirestore) { 
    this.reparoCollection = af.collection('techamp');
    
  }

  consultaOne(id: string){
    return this.reparoCollection.doc(id).valueChanges();
  }
  consulta(){
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
    return this.reparoCollection.add(item)
  }
  deletar(id: string){
    return this.reparoCollection.doc(id).delete();
  }
  atualizar(id: string, item: any){
    return this.reparoCollection.doc(id).update(item);
  }


}
