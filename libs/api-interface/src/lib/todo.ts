export class Todo {
  id: number;
  title: string;
  description: string;
  active: boolean;
}
export const mockTodos: Todo[] = [
  {
    id: 1,
    title: 'new todo',
    description: 'another one bites the dust',
    active: true
  },
  {
    id: 2,
    title: 'other todo',
    description: 'this is the sound of C',
    active: false
  },
  {
    id: 3,
    title: 'added todo',
    description: 'Everybody loves kung fu fighting',
    active: true
  }
];
