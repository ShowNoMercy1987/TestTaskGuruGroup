export interface ICard {
  id?: number;
  seen?: boolean;
  title?: string;
  address?: string;
  about?: string;
  createdAt?: string | any;
  price?: number | any;
  onClick?: () => void;
}