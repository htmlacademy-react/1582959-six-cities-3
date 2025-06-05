export type Offers = {
    id: string;
    title: string;
    type: string;
    price: number;
    city: {
    name: string;
    location: {
    latitude: number;
    longitude: number;
    zoom: number;
    };
    };
    location: {
    latitude: number;
    longitude: number;
    zoom: number;
    };
    isFavorite: boolean;
    isPremium: boolean;
    rating: number;
    previewImage: string;
    };

export type Reviews = {
        id: string;
        date: string;
        user: {
        name: string;
        avatarUrl: string;
        isPro: boolean;
        };
        comment: string;
        rating: number;
        };

export type Cards = {
            id: number;
            isPremium: boolean;
            previewImage: string;
            price: number;
            isFavorite: boolean;
            rating: number;
            title: string;
            type: string;
          };

export type Rating = {
            id: number;
            title: string;
          }

export type CardLocation = 'cities' | 'favorites' | 'near-places';
