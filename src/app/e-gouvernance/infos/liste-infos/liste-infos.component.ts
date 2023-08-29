import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InfoService } from 'src/app/shared/info.service';

@Component({
  selector: 'app-liste-infos',
  templateUrl: './liste-infos.component.html',
  styleUrls: ['./liste-infos.component.css']
})
export class ListeInfosComponent {
  infos: any[] = [];
  loading: boolean = true; 
  public constructor(private router:Router, private infoService:InfoService){}

  ngOnInit() : void{
    this.getListinfo();
  }

  getListinfo(){
    this.infoService.getInfo()
    .subscribe(data => {
      this.infos = data;
      this.loading = false;
    });
  }
}
