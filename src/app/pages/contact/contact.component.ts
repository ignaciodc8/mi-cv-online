import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { CvDataService } from '../../services/cv-data.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  personalInfo: any;
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
  formSubmitted = false;
  formError = false;

  constructor(private cvDataService: CvDataService) { }

  ngOnInit(): void {
    this.personalInfo = this.cvDataService.getPersonalInfo();
  }

  submitForm(): void {
    // Validación básica
    if (!this.formData.name || !this.formData.email || !this.formData.message) {
      this.formError = true;
      return;
    }
    
    // En un caso real, aquí enviarías los datos a un backend
    console.log('Formulario enviado:', this.formData);
    
    // Simular envío exitoso
    this.formSubmitted = true;
    this.formError = false;
    
    // Resetear formulario
    this.formData = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }
}