import { Component, OnInit } from '@angular/core';
import { NasaService } from '../../services/nasa.service';

@Component({
  selector: 'app-apod',
  templateUrl: './nasa.component.html',
  styleUrls: ['./nasa.component.css']
})
export class NasaComponent implements OnInit {
  astronomyPicture: any;

  constructor(private nasaService: NasaService) { }

  ngOnInit(): void {
    this.getAstronomyPicture();
  }

  selectedDate: string | null = null;
  getAstronomyPicture(): void {
    if (this.selectedDate) {
      this.nasaService.getAstronomyPicture(this.selectedDate)
        .subscribe({
          next: (data) => {
            this.astronomyPicture = data;
          },
          error: (error) => {
            console.error('Error al obtener la imagen astronómica:', error);
          }
        });
    } else {
      // Fallback to get today's image (optional)
      this.nasaService.getAstronomyPicture()
        .subscribe({
          next: (data) => {
            this.astronomyPicture = data;
          },
          error: (error) => {
            console.error('Error al obtener la imagen astronómica:', error);
          }
        });
    }
  }
}


