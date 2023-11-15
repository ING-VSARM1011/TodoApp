import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrls: ['./labs.component.css']
})
export class LabsComponent {
    welcome = 'Hola';
    tasks = [
      'Instalar el Angular CLI',
      'Crear Proyecto',
      'Crear Componentes'
    ];
}
