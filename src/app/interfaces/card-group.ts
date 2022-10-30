import { Card } from "./card";

export interface CardGroup {
    id: number;
    name: string;
    subgroupName: string;
    creationDate: Date;
    cardsList: Card[];
}