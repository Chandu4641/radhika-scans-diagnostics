export interface BookingData {
  packageId: string;
  packageName: string;
  name: string;
  phone: string;
  email: string;
  preferredDate: string;
  preferredTime: string;
  notes?: string;
}

export interface BookingResponse {
  success: boolean;
  message: string;
  bookingId?: string;
}

export const submitBooking = async (data: BookingData): Promise<BookingResponse> => {
  await new Promise(resolve => setTimeout(resolve, 1200));

  const shouldFail = Math.random() < 0.05;

  if (shouldFail) {
    return {
      success: false,
      message: 'Booking failed. Please try again.'
    };
  }

  const bookingId = `RSD${Date.now()}`;
  const bookings = JSON.parse(localStorage.getItem('radhikaBookings') || '[]');
  bookings.push({
    ...data,
    bookingId,
    timestamp: new Date().toISOString()
  });
  localStorage.setItem('radhikaBookings', JSON.stringify(bookings));

  return {
    success: true,
    message: 'Booking confirmed! We will contact you shortly.',
    bookingId
  };
};

export const getRecentBookings = () => {
  return JSON.parse(localStorage.getItem('radhikaBookings') || '[]');
};
