import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Projet } from '../models/Projet-model';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  constructor(
    private http:HttpClient
  ) { }
  // uri_api = 'http://localhost:8010/api';
  uri_api = 'https://projets-publics-api.onrender.com/api';

  getProjet():Observable<any> {
    return this.http.get<Projet[]>(this.uri_api+ '/projets');
  }

  getProjetById(id: any):Observable<any> {
    return this.http.get<Projet[]>(this.uri_api+ '/projets/'+id);
  }

  getEtapeProjet(id: any):Observable<any> {
    return this.http.get<any[]>(this.uri_api+ '/etapes/projet/'+id);
  }

  addEtapeProjet(etape:any):Observable<any> {
    return this.http.post<Projet>(this.uri_api+ '/etapes', etape);
  }

  addProjet(projet:Projet):Observable<any> {
    return this.http.post<Projet>(this.uri_api+ '/projets', projet);
  }

  updateProjet(id: any, projet:Projet):Observable<any> {
    return this.http.put<Projet>(this.uri_api+ '/projets/'+id, projet);
  }

}
