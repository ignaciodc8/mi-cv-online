import { Injectable } from '@angular/core';
import { CV_DATA } from '../data/cv-data';

@Injectable({
  providedIn: 'root'
})
export class CvDataService {
  constructor() { }

  getPersonalInfo() {
    return CV_DATA.personal;
  }

  getSkills() {
    return CV_DATA.skills;
  }

  getEducation() {
    return CV_DATA.education;
  }

  // Añade más métodos según necesites
}