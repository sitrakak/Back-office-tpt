import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MembreService } from 'src/app/shared/membre.service';
import { ProjetService } from 'src/app/shared/projet.service';


@Component({
  selector: 'app-details-projet',
  templateUrl: './details-projet.component.html',
  styleUrls: ['./details-projet.component.css']
})


export class DetailsProjetComponent implements OnInit{
  id!:string;
  nom: string = '';
  description: string = '';
  dateDebut: string = '';
  datePrevu: string = '';
  remarque: string = '';
  image:string='';
  showForm: boolean = false;
  etapes: any;
  projet: any;

  public constructor(private router:Router, private route:ActivatedRoute, private projetService:ProjetService){}

  ngOnInit(){
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.getListEtape();
    this.getListProjet();
  }

  getListEtape() {
    this.projetService.getEtapeProjet(this.id).subscribe((data) => {
      this.etapes = data;
    });
  }
  
  getListProjet() {
    this.projetService.getProjetById(this.id)
    .subscribe(data => {
      this.projet = data;
    })
  }

  save(){
    if (this.nom && this.description && this.remarque && this.dateDebut && this.datePrevu) {
      const etape = {
        nom: this.nom,
        description: this.description,
        dateDebut: this.dateDebut,
        datePrevu: this.datePrevu,
        remarque: this.remarque,
        id_projet: this.id,
        image: this.image
      };
      this.projetService.addEtapeProjet(etape).subscribe(
        (data : any)=> {
          console.log(data);
          this.getListEtape();
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

  // Méthode pour lire une image sous forme de base64
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
  

  toggleForm(): void {
      this.showForm = !this.showForm;
  }


}
