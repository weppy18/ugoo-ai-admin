import { Store } from './Store';

export class Company {
  constructor(
    public id: string,
    public name: string,
    public website: string,
    public stores: Store[]
  ) { }
}
