import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

import { actionSheetController } from '@ionic/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class FirebaseuService {

  usuariosCollection: AngularFirestoreCollection

  constructor(private af: AngularFirestore) { 
    this.usuariosCollection = af.collection('usuario');
    
  }

  consultaOne(id: string){
    return this.usuariosCollection.doc(id).valueChanges();
  }
  consulta(){
    return this.usuariosCollection.snapshotChanges().pipe(
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
    return this.usuariosCollection.add(item)
  }
  deletar(id: string){
    return this.usuariosCollection.doc(id).delete();
  }
  atualizar(id: string, item: any){
    return this.usuariosCollection.doc(id).update(item);
  }


}
