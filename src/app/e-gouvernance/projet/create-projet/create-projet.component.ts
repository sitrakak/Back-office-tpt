import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProjetService } from 'src/app/shared/projet.service';

@Component({
  selector: 'app-create-projet',
  templateUrl: './create-projet.component.html',
  styleUrls: ['./create-projet.component.css']
})
export class CreateProjetComponent {
  image: string ='';
  nom: string = '';
  description: string = '';
  responsable: string = '';
  remarque: string = '';
  dateDebut: Date = new Date();
  dateLimite: Date = new Date();
  
  public constructor(private router:Router, private projetService:ProjetService){}

  save(){
    if (this.nom && this.description && this.responsable && this.remarque && this.dateDebut && this.dateLimite) {
      const projet = {
        nom: this.nom,
        description: this.description,
        responsable: this.responsable,
        remarque: this.remarque,
        date_debut: this.dateDebut,
        date_limite: this.dateLimite,
        image: this.image
      };
      this.projetService.addProjet(projet).subscribe(
        (data : any)=> {
          console.log(data);
          this.router.navigate(['/e-gouvernance/liste-projet']);
        }, err => { console.log(err) }
      );
    } else {
      console.log('Please fill all fields before submitting.');
    }
  }

  onImageChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement?.files?.length) {
      const file = inputElement.files[0];
      this.readFileAsBase64(file).then(base64Data => this.image = base64Data);
    }
  }

  private readFileAsBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = reader.result?.toString() || '';
        resolve(base64String);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }
}
