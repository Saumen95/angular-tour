import { FormControl } from "@angular/forms";

export interface BookingFormType {
  destination: FormControl<string | null>;
  travelerName: FormControl<string | null>;
  travelerEmail: FormControl<string | null>;
  numberOfTravelers: FormControl<number | null>;
  departureDate: FormControl<string | null>;
  returnDate: FormControl<string | null>;
  accommodation: FormControl<string | null>;
  termsAccepted: FormControl<boolean | null>;
  visaNotes: FormControl<string | null>;
}
