export interface TourImage {
  url: string;
  alt: string;
}

export interface TourItinerary {
  day: number;
  title: string;
  description: string;
  activities: string[];
  overnight: string;
}

export interface Tour {
  id: string;
  title: string;
  description: string;
  location: string;
  price: number;
  duration: string;
  coverImage: string;
  images: TourImage[];
  inclusions: string[];
  exclusions: string[];
  itinerary: TourItinerary[];
  category: 'Family' | 'Honeymoon' | 'Corporate' | 'Adventure' | 'Cultural';
}

export const tours: Tour[] = [
  {
    id: 'skardu-valley-explorer',
    title: 'Skardu Valley Explorer',
    description: 'Experience the majestic beauty of Skardu Valley with visits to Deosai Plains, Upper Kachura Lake, and Shigar Fort.',
    location: 'Skardu, Gilgit-Baltistan',
    price: 85000,
    duration: '5 Days / 4 Nights',
    coverImage: '/images/tours/skardu-valley.jpg',
    category: 'Adventure',
    images: [
      { url: '/images/tours/skardu-1.jpg', alt: 'Deosai Plains' },
      { url: '/images/tours/skardu-2.jpg', alt: 'Upper Kachura Lake' },
      { url: '/images/tours/skardu-3.jpg', alt: 'Shigar Fort' }
    ],
    inclusions: [
      'Hotel accommodation (4 nights)',
      'Daily breakfast and dinner',
      'Transportation in 4x4 vehicle',
      'Professional local guide',
      'Airport transfers',
      'Sightseeing as per itinerary',
      'Basic first aid kit'
    ],
    exclusions: [
      'Flights to/from Skardu',
      'Personal expenses',
      'Travel insurance',
      'Tips for guide and driver',
      'Any activity not mentioned in inclusions'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Skardu',
        description: 'Arrive in Skardu, transfer to hotel, and evening visit to Skardu Bazaar.',
        activities: ['Airport pickup', 'Hotel check-in', 'Visit Skardu Bazaar', 'Welcome dinner'],
        overnight: 'Skardu Hotel'
      },
      {
        day: 2,
        title: 'Deosai Plains Adventure',
        description: 'Full-day excursion to Deosai Plains, the second-highest plateau in the world.',
        activities: ['Drive to Deosai', 'Wildlife spotting', 'Picnic lunch', 'Photography session'],
        overnight: 'Skardu Hotel'
      },
      {
        day: 3,
        title: 'Lakes and Forts',
        description: 'Visit Upper Kachura Lake and explore the historic Shigar Fort.',
        activities: ['Upper Kachura Lake visit', 'Shigar Fort tour', 'Local culture experience'],
        overnight: 'Skardu Hotel'
      },
      {
        day: 4,
        title: 'Manthal Buddha Rock and Satpara Lake',
        description: 'Explore ancient Buddhist heritage and visit the serene Satpara Lake.',
        activities: ['Visit Manthal Buddha Rock', 'Satpara Lake excursion', 'Optional boating'],
        overnight: 'Skardu Hotel'
      },
      {
        day: 5,
        title: 'Departure',
        description: 'Morning free for shopping, then transfer to airport.',
        activities: ['Souvenir shopping', 'Airport transfer'],
        overnight: 'N/A'
      }
    ]
  },
  {
    id: 'hunza-honeymoon-retreat',
    title: 'Hunza Honeymoon Retreat',
    description: 'A romantic getaway in the picturesque Hunza Valley, perfect for newlyweds.',
    location: 'Hunza, Gilgit-Baltistan',
    price: 95000,
    duration: '6 Days / 5 Nights',
    coverImage: '/images/tours/hunza-valley.jpg',
    category: 'Honeymoon',
    images: [
      { url: '/images/tours/hunza-1.jpg', alt: 'Baltit Fort' },
      { url: '/images/tours/hunza-2.jpg', alt: 'Attabad Lake' },
      { url: '/images/tours/hunza-3.jpg', alt: 'Eagle\'s Nest' }
    ],
    inclusions: [
      'Luxury hotel accommodation',
      'All meals included',
      'Private transportation',
      'Couples photoshoot',
      'Romantic dinners',
      'All entrance fees',
      'Guided tours'
    ],
    exclusions: [
      'Flights',
      'Personal expenses',
      'Travel insurance',
      'Optional activities',
      'Tips'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Welcome to Hunza',
        description: 'Arrival and transfer to luxury hotel with welcome dinner.',
        activities: ['Airport pickup', 'Hotel check-in', 'Welcome dinner with valley view'],
        overnight: 'Luxury Hotel Hunza'
      },
      {
        day: 2,
        title: 'Baltit Fort & Karimabad',
        description: 'Explore the historic Baltit Fort and Karimabad bazaar.',
        activities: ['Baltit Fort tour', 'Shopping in Karimabad', 'Romantic dinner'],
        overnight: 'Luxury Hotel Hunza'
      }
    ]
  },
  {
    id: 'gb-corporate-retreat',
    title: 'GB Corporate Retreat',
    description: 'Team building and corporate retreat in the serene mountains of Gilgit-Baltistan.',
    location: 'Naltar Valley, Gilgit-Baltistan',
    price: 150000,
    duration: '4 Days / 3 Nights',
    coverImage: '/images/tours/naltar-valley.jpg',
    category: 'Corporate',
    images: [
      { url: '/images/tours/naltar-1.jpg', alt: 'Conference Setup' },
      { url: '/images/tours/naltar-2.jpg', alt: 'Team Activities' },
      { url: '/images/tours/naltar-3.jpg', alt: 'Valley View' }
    ],
    inclusions: [
      'Conference facilities',
      'Team building activities',
      'All meals',
      'Accommodation',
      'Transportation',
      'Professional facilitator',
      'AV equipment'
    ],
    exclusions: [
      'Flights',
      'Personal expenses',
      'Additional activities',
      'Travel insurance'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival and Setup',
        description: 'Team arrival, orientation, and initial sessions.',
        activities: ['Welcome briefing', 'Team lunch', 'Afternoon session', 'Group dinner'],
        overnight: 'Naltar Resort'
      }
    ]
  }
];

export default tours; 