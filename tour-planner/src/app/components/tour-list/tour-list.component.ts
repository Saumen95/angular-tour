import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tour-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tour-list.component.html',
  styleUrls: ['./tour-list.component.css']
})
export class TourListComponent implements OnInit {
  bookings: any[] = [];

  ngOnInit() {
    this.bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
  }
}
