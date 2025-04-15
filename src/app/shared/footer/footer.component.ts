import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { CvDataService } from '../../services/cv-data.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgIf],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  personalInfo: any;
  currentYear: number = new Date().getFullYear();

  constructor(private cvDataService: CvDataService) { }

  ngOnInit(): void {
    this.personalInfo = this.cvDataService.getPersonalInfo();
  }
}