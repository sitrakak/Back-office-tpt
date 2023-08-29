import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjetService } from 'src/app/shared/projet.service';

@Component({
  selector: 'app-liste-projet',
  templateUrl: './liste-projet.component.html',
  styleUrls: ['./liste-projet.component.css']
})
export class ListeProjetComponent implements OnInit {
  projets: any[] = [];
  loading: boolean = true;
  itemsPerPage: number = 8;
  currentPage: number = 1;
  searchTerm: string = ''; // New

  constructor(private router: Router, private projetService: ProjetService) {}

  ngOnInit(): void {
    this.getListprojet();
  }

  getListprojet() {
    this.projetService.getProjet().subscribe((data) => {
      this.projets = data;
      this.loading = false;
    });
  }

  onPageChange(pageNumber: number) {
    this.currentPage = pageNumber;
  }

  getPaginatedProjects() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.projets.slice(startIndex, endIndex);
  }

  calculateTotalPages() {
    return Math.ceil(this.projets.length / this.itemsPerPage);
  }
  
  filterProjects() {
    if (!this.searchTerm) {
      return this.getPaginatedProjects();
    }
    return this.getPaginatedProjects().filter(project =>
      project.nom.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
