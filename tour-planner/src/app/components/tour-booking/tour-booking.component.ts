import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { BookingFormType } from '../../models/booking-form-type';

@Component({
  selector: 'app-tour-booking',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './tour-booking.component.html',
  styleUrls: ['./tour-booking.component.css']
})
export class TourBookingComponent {
  bookingForm: FormGroup<BookingFormType>;

constructor(private fb: FormBuilder, private router: Router) {
  this.bookingForm = this.fb.group<BookingFormType>({
    destination: this.fb.control('', Validators.required),
    travelerName: this.fb.control('', [Validators.required, Validators.minLength(3), this.lettersOnlyValidator]),
    travelerEmail: this.fb.control('', [Validators.required, Validators.email]),
    numberOfTravelers: this.fb.control(1, [Validators.required, Validators.min(1)]),
    departureDate: this.fb.control('', [Validators.required, this.futureDateValidator]),
    returnDate: this.fb.control('', Validators.required),
    accommodation: this.fb.control('', Validators.required),
    termsAccepted: this.fb.control(false, Validators.requiredTrue),
    visaNotes: this.fb.control('')
  }, {
    validators: [this.returnAfterDepartureValidator]
  });
}

  get f() {
    return this.bookingForm.controls;
  }

  // Custom validators
  lettersOnlyValidator(control: AbstractControl): ValidationErrors | null {
    return /^[A-Za-z\s]+$/.test(control.value || '') ? null : { lettersOnly: true };
  }

  futureDateValidator(control: AbstractControl): ValidationErrors | null {
    const today = new Date();
    const selectedDate = new Date(control.value);
    return selectedDate >= today ? null : { futureDate: true };
  }

  returnAfterDepartureValidator(group: AbstractControl): ValidationErrors | null {
    const departure = new Date(group.get('departureDate')?.value);
    const ret = new Date(group.get('returnDate')?.value);
    return ret > departure ? null : { returnBeforeDeparture: true };
  }

  showVisaField(): boolean {
    return this.f['destination'].value === 'Maldives';
  }

  onSubmit() {
    if (this.bookingForm.invalid) return;
    const data = JSON.parse(localStorage.getItem('bookings') || '[]');
    data.push(this.bookingForm.value);
    localStorage.setItem('bookings', JSON.stringify(data));
    this.router.navigate(['/bookings']);
  }
}
