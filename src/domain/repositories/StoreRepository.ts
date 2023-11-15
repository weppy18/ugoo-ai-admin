import { Store } from '../entities/Store';
import { BaseRepository } from './BaseRepository';

export interface StoreRepository extends BaseRepository<Store> {
  // Add Store-specific methods...
}
