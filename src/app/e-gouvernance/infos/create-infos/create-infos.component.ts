import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InfoService } from 'src/app/shared/info.service';

@Component({
  selector: 'app-create-infos',
  templateUrl: './create-infos.component.html',
  styleUrls: ['./create-infos.component.css']
})
export class CreateInfosComponent {
  image: string ='';
  title: string = '';
  date: Date = new Date();
  author: string = '';
  contenu: string = '';

  public constructor(private router:Router, private infoService:InfoService){}
  
  addInfo(){
    if (this.title && this.date && this.author && this.contenu) {
      const infos = {
        titre: this.title,
        date: this.date,
        nom_auteur: this.author,
        contenu: this.contenu,
        image: this.image
      };
      this.infoService.addInfos(infos).subscribe(
        (data : any)=> {
          console.log(data);
          this.router.navigate(['/e-gouvernance/liste-infos']);        
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
