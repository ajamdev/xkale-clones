type cardId =
  | "card-cx"
  | "card-cyber"

  export interface Card {
  id: cardId;
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
  className?: string;
}