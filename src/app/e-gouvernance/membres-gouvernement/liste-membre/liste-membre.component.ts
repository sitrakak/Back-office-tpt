import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MembreService } from 'src/app/shared/membre.service';

@Component({
  selector: 'app-liste-membre',
  templateUrl: './liste-membre.component.html',
  styleUrls: ['./liste-membre.component.css']
})
export class ListeMembreComponent {
  membres: any[] = [];
  loading:boolean=true;
  public constructor(private router:Router, private membreService:MembreService){}

  ngOnInit() : void{
    this.getListMembre();
  }

  getListMembre(){
    this.membreService.getMembre()
    .subscribe(data => {
      this.membres = data;
      this.loading=false;
    });
  }
}
