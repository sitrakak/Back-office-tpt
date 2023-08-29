import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Membre } from '../models/Membre-model';

@Injectable({
  providedIn: 'root'
})
export class MembreService {

  constructor(
    private http:HttpClient
  ) { }
  // uri_api = 'http://localhost:8010/api';
  uri_api = 'https://projets-publics-api.onrender.com/api';

  getMembre():Observable<any> {
    return this.http.get<Membre[]>(this.uri_api+ '/memb_gouv');
  }
  
  getMembreById(id:any):Observable<any> {
    return this.http.get<Membre[]>(this.uri_api+ '/memb_gouv/'+id);
  }

  updateMembre(id:any, membre:Membre):Observable<any> {
    return this.http.put<Membre>(this.uri_api+ '/memb_gouv/'+id, membre);
  }

  addMembre(membre:Membre):Observable<any> {
    return this.http.post<Membre>(this.uri_api+ '/memb_gouv', membre);
  }

}
