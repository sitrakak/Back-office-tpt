import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MembreService } from 'src/app/shared/membre.service';

@Component({
  selector: 'app-ajout-membre',
  templateUrl: './ajout-membre.component.html',
  styleUrls: ['./ajout-membre.component.css']
})
export class AjoutMembreComponent {
  image: string ='';
  nom: string = '';
  prenom: string = '';
  debutService: Date = new Date();
  fonction: string = '';

  public constructor(private router:Router, private membreService:MembreService){}

  save(){
    if (this.nom && this.prenom && this.debutService && this.fonction) {
      const membre = {
        nom: this.nom,
        prenom: this.prenom,
        debut_service: this.debutService,
        fonction: this.fonction,
        image: this.image
      };
      this.membreService.addMembre(membre).subscribe(
        (data : any)=> {
          console.log(data);
          this.router.navigate(['/e-gouvernance/liste-membre-gouvernement']);
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
