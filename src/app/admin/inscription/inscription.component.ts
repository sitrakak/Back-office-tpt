import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
public constructor(private router:Router, private authService:AuthService){}
image: string ='';
nom: string = '';
email: string = '';
identifiant: string = '';
password: string = '';
message:string='';


sign_in(): void {
  if (this.nom && this.email && this.identifiant && this.password) {
    const user = {
      nom: this.nom,
      email: this.email,
      identifiant: this.identifiant,
      mdp: this.password,
      image: this.image
    };
    this.authService.signUp(user).subscribe(
      (data : any)=> {
        this.message="Utilisateur cree! Veuillez-vous connecter."
        console.log(data);        
      }, err => { console.log(err) }
    );
  } else {
    this.message='Veuillez remplir les champs!';
  }
}

login(){
  this.router.navigate(['/login']);
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
