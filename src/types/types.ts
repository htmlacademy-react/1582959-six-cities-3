export type Offer = {
    id: string;
    title: string;
    type: string;
    price: number;
    city: City;
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

export type Offers = Offer[];

export type Review = {
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

export type Reviews = Review[];

export type Card = {
            id: number;
            isPremium: boolean;
            previewImage: string;
            price: number;
            city: {
              name: string;
            };
            isFavorite: boolean;
            rating: number;
            title: string;
            type: string;
          };

export type Rating = {
            id: number;
            title: string;
          };

export type City = {
            name: string;
            latitude: number;
            longitude: number;
            zoom: number;
          };

export type Point = {
            name: string;
            latitude: number;
            longitude: number;
          };

export type Points = Point[];

export type CardLocation = 'cities' | 'favorites' | 'near-places';
