import { Offers } from '../types/types';

export const offers: Offers = [
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f00',
    isPremium: true,
    previewImage: 'img/apartment-01.jpg',
    price: 120,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 8,
      },
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },
    isFavorite: true,
    rating: 4,
    title: 'Beautiful & luxurious apartment at great location',
    type: 'Apartment'
  },
  {
    id: 'b242bade-6e83-40f9-93b7-08efcadbd678',
    isPremium: false,
    previewImage: 'img/room.jpg',
    price: 80,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3609553943508,
        longitude: 4.85309666406198,
        zoom: 10,
      },
    },
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 10,
    },
    isFavorite: false,
    rating: 4,
    title: 'Wood and stone place',
    type: 'Room'
  },
  {
    id: 'd52bf1af-2edd-47dc-89f0-38068abbb57c',
    isPremium: false,
    previewImage: 'img/apartment-02.jpg',
    price: 132,
    city: {
      name: 'Hamburg',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.929309666406198,
        zoom: 8,
      },
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 8,
    },
    isFavorite: false,
    rating: 4,
    title: 'Canal View Prinsengracht',
    type: 'Apartment'
  },
  {
    id: 'b4891f8a-0083-4d28-945a-5a398f16f7c0',
    isPremium: true,
    previewImage: 'img/apartment-03.jpg',
    price: 180,
    city: {
      name: 'Paris',
      location: {
        latitude: 52.3809553943508,
        longitude: 4.939309666406198,
        zoom: 10,
      },
    },
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 10,
    },
    isFavorite: true,
    rating: 5,
    title: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment'
  },
];
