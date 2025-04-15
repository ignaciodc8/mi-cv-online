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

  getSoftSkills() {
    return CV_DATA.softSkills;
  }

  getEducation() {
    return CV_DATA.education;
  }

  getProjects() {
    return CV_DATA.projects;
  }

  getInterests() {
    return CV_DATA.interests;
  }
}