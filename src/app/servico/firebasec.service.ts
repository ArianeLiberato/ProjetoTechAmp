import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

import { actionSheetController } from '@ionic/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class FirebaseService {

  itemCollection: AngularFirestoreCollection

  constructor(private af: AngularFirestore) { 
    this.itemCollection = af.collection('configuracao');
    
  }

  consultaOne(id: string){
    return this.itemCollection.doc(id).valueChanges();
  }
  consulta(){
    return this.itemCollection.snapshotChanges().pipe(
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
    return this.itemCollection.add(item)
  }
  deletar(id: string){
    return this.itemCollection.doc(id).delete();
  }
  atualizar(id: string, item: any){
    return this.itemCollection.doc(id).update(item);
  }


}
