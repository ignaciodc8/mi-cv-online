import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { CvDataService } from '../../services/cv-data.service';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [NgFor],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  education: any[] = [];

  constructor(private cvDataService: CvDataService) { }

  ngOnInit(): void {
    this.education = this.cvDataService.getEducation();
  }
}