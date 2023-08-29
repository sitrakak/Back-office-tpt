import { Injectable } from '@angular/core';
import { User } from '../models/User-model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Info } from '../models/Info-model';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor(
    private http:HttpClient
  ) { }
  uri_api = 'https://projets-publics-api.onrender.com/api';
  // uri_api = 'http://localhost:8010/api';

  getInfo():Observable<any> {
    return this.http.get<Info[]>(this.uri_api+ '/infos');
  }

  getInfoById(id: any):Observable<any> {
    return this.http.get<Info[]>(this.uri_api+ '/infos/'+id);
  }

  updateInfos(id: any, info:Info):Observable<any> {
    return this.http.put<Info>(this.uri_api+ '/infos/'+id, info);
  }

  addInfos(info:Info):Observable<any> {
    return this.http.post<Info>(this.uri_api+ '/infos', info);
  }

}
