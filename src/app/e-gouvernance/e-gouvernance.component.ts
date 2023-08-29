import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-e-gouvernance',
  templateUrl: './e-gouvernance.component.html',
  styleUrls: ['./e-gouvernance.component.css']
})
export class EGouvernanceComponent {
  constructor(
    private router:Router) { }
  ngOnInit(){
    if(localStorage.getItem("idUser")==null){
      this.router.navigate(['/login']);
    }
  }
  deconnecter(){
    localStorage.removeItem("idUser");
    this.router.navigate(['/login']);
  }
}
