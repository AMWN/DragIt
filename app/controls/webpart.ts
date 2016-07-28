import { Veld } from './veld';

export interface Webpart {
  omschrijving : string;
  velden? : Veld[];
  icon?: string;
}
