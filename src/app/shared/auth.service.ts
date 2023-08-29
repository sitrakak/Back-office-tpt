import { Injectable } from '@angular/core';
import { User } from '../models/User-model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  setLoggedTrue(idUser : string){
    localStorage.setItem("idUser", idUser);
  }
  loggedIn = false;

  constructor(
    private http:HttpClient
  ) { }
  // uri_api = 'http://localhost:8010/api';
  uri_api = 'https://projets-publics-api.onrender.com/api';

  logIn(user:User):Observable<any> {
    return this.http.post<User>(this.uri_api+ '/login', user);
  }

  signUp(user:User):Observable<any> {
    return this.http.post<User>(this.uri_api+ '/signup', user);
  }

  logOut() {
    console.log("ON SE DELOGGE")

    this.loggedIn = false;
  }

  // si on l'utilisait on ferai isAdmin().then(...)
  isAdmin() {
    // Pour le moment, version simplifiée...
    // on suppose qu'on est admin si on est loggué
    const isUserAdminPromise = new Promise((resolve, reject) => {
        resolve(this.loggedIn);
    });

    // on renvoie la promesse qui dit si on est admin ou pas
    return isUserAdminPromise;
  }
}
