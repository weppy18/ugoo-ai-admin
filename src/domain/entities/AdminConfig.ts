import { Store } from './Store';

export class AdminConfig {
  constructor(
    public id: string,
    public store: Store,
    public configUrl: string
  ) { }
}
