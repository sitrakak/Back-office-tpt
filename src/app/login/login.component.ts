import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { User } from '../models/User-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  identifiant='admin1' as string;
  password='12345' as string;
  message="";

  constructor(private authService : AuthService,
    private router:Router) { }

    onSubmit(){
      if(this.identifiant === "") return;
      if(this.password === "") return;
      console.log("Connexion de " + this.identifiant + " - " + this.password)
      let nouvelUser = new User();
      nouvelUser.identifiant = this.identifiant;
      nouvelUser.mdp = this.password;
      this.authService.logIn(nouvelUser)
      .subscribe(user => {
          if(user != null){
            this.authService.setLoggedTrue(user.id);
            localStorage.setItem("isAdmin", "true");
            this.router.navigate(["/e-gouvernance"]);
          }
      },
      (error) => {
        this.message="identifiant ou mot de passe Invalide";
        console.error('Une erreur s\'est produite lors de la connexion :');
      }
    );
  }
  sign_in()
  {
    this.router.navigate(['/sign-in']);
  }
}
