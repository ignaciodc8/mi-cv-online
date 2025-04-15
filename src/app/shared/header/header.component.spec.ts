import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgClass } from '@angular/common';
import { CvDataService } from '../../services/cv-data.service';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgClass],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  personalInfo: any;
  menuOpen = false;

  constructor(private cvDataService: CvDataService,  public themeService: ThemeService ) { }

  ngOnInit(): void {
    this.personalInfo = this.cvDataService.getPersonalInfo();
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }
  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}