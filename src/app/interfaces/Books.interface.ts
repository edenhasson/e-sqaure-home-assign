import {Book} from "./Book.interface";

export interface Books {
  kind: string;
  totalItems: number
  items: Book[]
}
