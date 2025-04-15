import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { CvDataService } from '../../services/cv-data.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: any[] = [];

  constructor(private cvDataService: CvDataService) { }

  ngOnInit(): void {
    this.projects = this.cvDataService.getProjects();
  }
}