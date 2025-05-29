import { Routes } from '@angular/router';
import { TourBookingComponent } from './components/tour-booking/tour-booking.component';
import { TourHistoryComponent } from './components/tour-history/tour-history.component';

export const routes: Routes = [
  { path: '', redirectTo: 'book-tour', pathMatch: 'full' },
  { path: 'book-tour', component: TourBookingComponent },
   { path: 'tour-history', component: TourHistoryComponent }
];
