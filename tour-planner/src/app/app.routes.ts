import { Routes } from '@angular/router';
import { TourBookingComponent } from './components/tour-booking/tour-booking.component';
import { TourListComponent } from './components/tour-list/tour-list.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'book', pathMatch: 'full' },
  { path: 'book', component: TourBookingComponent },
  { path: 'bookings', component: TourListComponent }
];
