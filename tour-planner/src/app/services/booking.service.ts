import { Injectable } from '@angular/core';
import { TourBooking } from '../models/tour-booking';


@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private storageKey = 'tourBookings';

  addBooking(booking: TourBooking): void {
    const bookings = this.getBookings();
    booking.id = Date.now().toString();
    booking.bookingDate = new Date().toISOString();
    bookings.push(booking);
    localStorage.setItem(this.storageKey, JSON.stringify(bookings));
  }

  getBookings(): TourBooking[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }
}
