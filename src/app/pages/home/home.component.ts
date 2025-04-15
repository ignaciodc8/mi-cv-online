import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor, NgClass } from '@angular/common';
import { CvDataService } from '../../services/cv-data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, NgFor, NgClass],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  personalInfo: any;
  topSkills: any[] = [];

  constructor(private cvDataService: CvDataService) { }

  ngOnInit(): void {
    this.personalInfo = this.cvDataService.getPersonalInfo();
    this.topSkills = this.cvDataService.getSkills().slice(0, 4); // Mostrar solo las 4 primeras habilidades
  }

  getSkillIcon(skillName: string): string {
    const icons: {[key: string]: string} = {
      'Java': 'fa-java',
      'C#': 'fa-code',
      'SQL': 'fa-database',
      'JavaScript': 'fa-js',
      'Angular': 'fa-angular',
      'Inglés': 'fa-language'
    };
    
    return icons[skillName] || 'fa-code';
  }
}