import { Person } from '../entities/Person';
import { BaseRepository } from './BaseRepository';

export interface PersonRepository extends BaseRepository<Person> {
  // Add Person-specific methods...
}
