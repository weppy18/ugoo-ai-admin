import { Address } from '../value-objects/Address';
import { GpsLocation } from '../value-objects/GpsLocation';
import { Person } from './Person';

export class Store {
  constructor(
    public id: string,
    public name: string,
    public address: Address,
    public gpsLocation: GpsLocation,
    public contactPerson: Person
  ) { }
}
