export interface TourBooking {
  id: string;
  destination: string;
  travelerName: string;
  travelerEmail: string;
  numberOfTravelers: number;
  departureDate: string;
  returnDate: string;
  accommodation: string;
  specialRequests?: string;
  visaNotes?: string;
  bookingDate: string;
}
