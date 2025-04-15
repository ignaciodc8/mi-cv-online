import { Component, OnInit } from '@angular/core';
import { NgFor, NgClass } from '@angular/common';
import { CvDataService } from '../../services/cv-data.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: any[] = [];
  softSkills: any[] = [];
  categories: string[] = [];
  activeCategory: string = 'Todas';

  constructor(private cvDataService: CvDataService) { }

  ngOnInit(): void {
    this.skills = this.cvDataService.getSkills();
    this.softSkills = this.cvDataService.getSoftSkills();
    
    // Extraer categorías únicas
    const allCategories = this.skills.map(skill => skill.category);
    this.categories = ['Todas', ...new Set(allCategories)];
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

  setActiveCategory(category: string): void {
    this.activeCategory = category;
  }

  getFilteredSkills(): any[] {
    if (this.activeCategory === 'Todas') {
      return this.skills;
    }
    return this.skills.filter(skill => skill.category === this.activeCategory);
  }
}