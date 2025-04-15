import { Injectable, signal } from '@angular/core';
import { effect } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkMode = signal<boolean>(false);
  
  constructor() {
    // Verificar preferencia guardada
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.darkMode.set(savedTheme === 'dark');
    } else {
      // Verificar preferencia del sistema
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.darkMode.set(prefersDark);
    }
    
    // Aplicar tema inicial
    this.applyTheme();
    
    // Crear efecto para aplicar cambios
    effect(() => {
      const isDark = this.darkMode();
      this.applyTheme();
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
  }
  
  toggleTheme() {
    this.darkMode.update(value => !value);
  }
  
  isDarkMode() {
    return this.darkMode();
  }
  
  private applyTheme() {
    if (this.darkMode()) {
      document.documentElement.classList.add('dark-theme');
    } else {
      document.documentElement.classList.remove('dark-theme');
    }
  }
}