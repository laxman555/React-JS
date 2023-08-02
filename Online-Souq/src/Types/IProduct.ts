
export interface IProduct {
  id?: Number;
  title?: String;
  description?: String;
  category?: String;
  image?: String;
  price?: number;
  rating?: IRating;
}
export interface IRating {
  rate?: Number;
  count?: number;
}
