import { Component, OnInit } from '@angular/core';
import { TacheService } from 'src/app/shared/tache.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tache',
  templateUrl: './tache.component.html',
  styleUrls: ['./tache.component.css']
})
export class TacheComponent implements OnInit {
  

  constructor(private service : TacheService, private firestore: AngularFirestore,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
      this.service.formData = {
        
        nom : '',
        description : '',
        statut : false
       
      }
  }

  onSubmit(form: NgForm) {
    let data = Object.assign({}, form.value);
    delete data.id;
    if (form.value.id == null)
      this.firestore.collection('taches').add(data);
    else
      this.firestore.doc('taches/' + form.value.id).update(data);
    this.resetForm(form);
    this.toastr.success('Ajouter avec sucess', 'ToDo');
  }

}
