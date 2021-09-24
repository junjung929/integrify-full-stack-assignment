import { GeoLocation } from '.';

export default interface address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoLocation;
}
