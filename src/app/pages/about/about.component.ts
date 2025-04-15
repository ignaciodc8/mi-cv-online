import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { CvDataService } from '../../services/cv-data.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgFor],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  personalInfo: any;
  interests: string[] = [];

  constructor(private cvDataService: CvDataService) { }

  ngOnInit(): void {
    this.personalInfo = this.cvDataService.getPersonalInfo();
    this.interests = this.cvDataService.getInterests();
  }
}