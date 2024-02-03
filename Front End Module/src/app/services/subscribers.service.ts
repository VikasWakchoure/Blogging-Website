import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class SubscribersService {

  constructor( private afs: AngularFirestore ) { }

  addSubs(subData: any){
    this.afs.collection('subscribers').add(subData).then(() => {
      console.log('Subscriber Saved Sucessfully');
    })
  }

  checkSubs(subEmail: string) {
    return this.afs.collection('subsribesr', ref => ref.where('email', '==', subEmail)).get()
  }
}
