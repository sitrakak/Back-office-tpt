import { formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjetService } from 'src/app/shared/projet.service';

@Component({
  selector: 'app-modifier-projet',
  templateUrl: './modifier-projet.component.html',
  styleUrls: ['./modifier-projet.component.css']
})
export class ModifierProjetComponent {
  image: string ='';
  nom: string = '';
  description: string = '';
  responsable: string = '';
  remarque: string = '';
  dateDebut: Date = new Date();
  dateLimite: Date = new Date();
  id!: String;

  public constructor(private router:Router, private route:ActivatedRoute, private projetService:ProjetService){}

  ngOnInit(){
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.projetService.getProjetById(this.id)
    .subscribe(data => {
      this.nom = data.nom;
      this.description = data.description;
      this.responsable = data.responsable;
      this.remarque = data.remarque;
      this.dateDebut = new Date(data.date_debut);
      this.dateLimite = new Date(data.date_limite);
      this.image = data.image;
    })
  }

  formatDateToYYYYMMDD(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  update(){
    if (this.nom && this.description && this.responsable && this.dateDebut && this.dateLimite) {
      const projets = {
        nom: this.nom,
        description: this.description,
        responsable: this.responsable,
        remarque: this.remarque,
        date_debut: this.dateDebut,
        date_limite: this.dateLimite,
        image: this.image,
      };
      this.projetService.updateProjet(this.id, projets).subscribe(
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
