export type OfferItem = {
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

export type OfferList = OfferItem[];

export type Offer = OfferItem & {
  description: string;
  bedrooms: number;
  goods: [string];
  host: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
  images: [string];
  maxAdults: number;
}

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

export type Rating = {
  id: number;
  title: string;
};

export type City = {
  name: string;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
};

export type CardLocation = 'cities' | 'favorites' | 'near-places';

export type AuthData = {
  email: string;
  password: string;
};

export type UserData = AuthData & {
  name: string;
  avatarUrl: string;
  email: string;
  isPro: boolean;
  token: string;
};

export type CommentData = {
  id: string;
  comment: string;
  rating: number;
};

export type FavoriteData = {
  id: string;
  isFavorite: boolean;
}
