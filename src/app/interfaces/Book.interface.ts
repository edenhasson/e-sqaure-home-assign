export interface Book {
  id: string;
  selfLink: string;
  volumeInfo: {
    title: string,
    subtitle: string,
    publishedDate: number,
    "authors": string[],
  };
}
