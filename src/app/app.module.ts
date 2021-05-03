import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { TachesComponent } from './taches/taches.component';
import { ToDoListComponent } from './taches/to-do-list/to-do-list.component';
import { TacheComponent } from './taches/tache/tache.component';
import { TacheService } from './shared/tache.service';
import {FormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ToastrModule } from 'ngx-toastr';
 

@NgModule({
  declarations: [
    AppComponent,
    TachesComponent,
    ToDoListComponent,
    TacheComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
    
  ],
  providers: [TacheService],
  bootstrap: [AppComponent]
})
export class AppModule { }
