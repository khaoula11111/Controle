import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Tache } from './tache.model';

@Injectable({
  providedIn: 'root'
})
export class TacheService {

  formData : Tache;

  constructor(private firestore:AngularFirestore) { }

getTaches(){
  this.firestore.collection('taches').snapshotChanges()
}
}
