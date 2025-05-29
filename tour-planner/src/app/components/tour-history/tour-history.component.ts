import { Component, OnInit } from '@angular/core';
import { BookingService } from '../../services/booking.service';

import { CommonModule } from '@angular/common';
import { TourBooking } from '../../models/tour-booking';

@Component({
  selector: 'app-tour-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tour-history.component.html',
})
export class TourHistoryComponent implements OnInit {
  bookings: TourBooking[] = [];

  constructor(private bookingService: BookingService) {}

  ngOnInit(): void {
    this.bookings = this.bookingService.getBookings();
  }
}
