export interface Package {
  id: string;
  name: string;
  originalPrice: number;
  offerPrice: number;
  genderTag: 'Male' | 'Female';
  slug: string;
  bullets: string[];
  popular?: boolean;
}

export const packages: Package[] = [
  {
    id: '1',
    name: 'Basic Health Package',
    originalPrice: 2500,
    offerPrice: 1999,
    genderTag: 'Male',
    slug: 'basic-male',
    bullets: [
      'Complete Blood Count (CBC)',
      'Lipid Profile',
      'Blood Sugar (Fasting)',
      'Kidney Function Test',
      'Liver Function Test'
    ]
  },
  {
    id: '2',
    name: 'Basic Health Package',
    originalPrice: 2500,
    offerPrice: 1999,
    genderTag: 'Female',
    slug: 'basic-female',
    bullets: [
      'Complete Blood Count (CBC)',
      'Lipid Profile',
      'Blood Sugar (Fasting)',
      'Kidney Function Test',
      'Thyroid Profile'
    ],
    popular: true
  },
  {
    id: '3',
    name: 'Master Health Package',
    originalPrice: 4500,
    offerPrice: 3499,
    genderTag: 'Male',
    slug: 'master-male',
    bullets: [
      'All Basic Package Tests',
      'Vitamin D & B12',
      'Cardiac Risk Markers',
      'Prostate Specific Antigen',
      'ECG & X-Ray Chest'
    ]
  },
  {
    id: '4',
    name: 'Master Health Package',
    originalPrice: 4500,
    offerPrice: 3499,
    genderTag: 'Female',
    slug: 'master-female',
    bullets: [
      'All Basic Package Tests',
      'Vitamin D & B12',
      'Cardiac Risk Markers',
      'Hormonal Profile',
      'ECG & Ultrasound Pelvis'
    ]
  }
];

export const testimonials = [
  {
    id: '1',
    name: 'Priya Sharma',
    rating: 5,
    text: 'Excellent service! Reports were delivered on time and staff was very professional. Highly recommend for health checkups.',
    location: 'Bangalore'
  },
  {
    id: '2',
    name: 'Rajesh Kumar',
    rating: 5,
    text: 'Very affordable packages with accurate results. The technicians are experienced and made me feel comfortable.',
    location: 'Bangalore'
  },
  {
    id: '3',
    name: 'Anita Desai',
    rating: 5,
    text: 'Modern equipment and clean facility. Booking was easy and the entire process was smooth. Will definitely return.',
    location: 'Bangalore'
  }
];
