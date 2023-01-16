export type CardProps = {
  id: number;
  title: string;
  description: string;
  url: string;
  cover_image: string;
  tag_list: string[];
  readable_publish_date: string;
  published_at: string;
};

export type CardsProps = {
  articles: CardProps[];
};
