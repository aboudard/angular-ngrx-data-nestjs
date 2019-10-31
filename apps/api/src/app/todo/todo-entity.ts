import { InMemoryDBEntity } from '@nestjs-addons/in-memory-db';

export interface TodoEntity extends InMemoryDBEntity {
  id: number;
  title: string;
  description: string;
  active: boolean;
}
