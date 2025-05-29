import { Injectable } from '@angular/core';
import { TourBooking } from '../models/tour-booking';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private STORAGE_KEY = 'bookings';

  addBooking(booking: TourBooking): void {
    const bookings = this.getBookings();
    bookings.push(booking);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(bookings));
  }

  getBookings(): TourBooking[] {
    const data = localStorage.getItem(this.STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  }
}
