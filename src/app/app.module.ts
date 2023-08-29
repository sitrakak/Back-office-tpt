import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RenduDirective } from './shared/rendu.directive';
import { FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { Routes, RouterModule } from '@angular/router';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { authGuard } from './shared/auth.guard';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { InscriptionComponent } from './admin/inscription/inscription.component';
import { EGouvernanceComponent } from './e-gouvernance/e-gouvernance.component';
import { CreateInfosComponent } from './e-gouvernance/infos/create-infos/create-infos.component';
import { ListeInfosComponent } from './e-gouvernance/infos/liste-infos/liste-infos.component';
import { ModifierInfosComponent } from './e-gouvernance/infos/modifier-infos/modifier-infos.component';
import { AjoutMembreComponent } from './e-gouvernance/membres-gouvernement/ajout-membre/ajout-membre.component';
import { ListeMembreComponent } from './e-gouvernance/membres-gouvernement/liste-membre/liste-membre.component';
import { ModifierMembreComponent } from './e-gouvernance/membres-gouvernement/modifier-membre/modifier-membre.component';
import { CreateProjetComponent } from './e-gouvernance/projet/create-projet/create-projet.component';
import { ListeProjetComponent } from './e-gouvernance/projet/liste-projet/liste-projet.component';
import { ModifierProjetComponent } from './e-gouvernance/projet/modifier-projet/modifier-projet.component';
import { AccueilComponent } from './accueil/accueil.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DetailsProjetComponent } from './e-gouvernance/projet/details-projet/details-projet.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'sign-in',
    component: InscriptionComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'e-gouvernance',component: EGouvernanceComponent,
    children: [
      {path:'',component:AccueilComponent},
      {path:'create-infos',component:CreateInfosComponent},
      {path:'liste-infos',component:ListeInfosComponent},
      {path:'modifier-infos/:id',component:ModifierInfosComponent},


      {path:'create-membre-gouvernement',component:AjoutMembreComponent},
      {path:'liste-membre-gouvernement',component:ListeMembreComponent},
      {path:'modifier-membre-gouvernement/:id',component:ModifierMembreComponent},

      {path:'create-projet',component:CreateProjetComponent},
      {path:'liste-projet',component:ListeProjetComponent},
      {path:'modifier-projet/:id',component:ModifierProjetComponent},
      {path:'details-projet/:id',component:DetailsProjetComponent},

      
      
    ]
  }
]
@NgModule({
  declarations: [
    AppComponent,
    RenduDirective,
    LoginComponent,
    AdminComponent,
    InscriptionComponent,
    EGouvernanceComponent,
    CreateInfosComponent,
    ListeInfosComponent,
    ModifierInfosComponent,
    AjoutMembreComponent,
    ListeMembreComponent,
    ModifierMembreComponent,
    CreateProjetComponent,
    ListeProjetComponent,
    ModifierProjetComponent,
    AccueilComponent,
    DetailsProjetComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule, RouterModule.forRoot(routes),
    HttpClientModule,
    MatNativeDateModule, ScrollingModule,
    MatButtonModule, MatIconModule, MatDividerModule,
    MatInputModule, MatFormFieldModule, MatDatepickerModule,
    MatListModule, MatCardModule, MatCheckboxModule, MatSlideToggleModule,
    MatTableModule, MatPaginatorModule,MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
