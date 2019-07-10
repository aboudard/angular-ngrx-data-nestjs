import { EntityMetadataMap } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
  Todo: {}
};

// because the plural of "todo" is not "todos" by default in Nest
const pluralNames = { Todo: 'Todo' };

export const entityConfig = {
  entityMetadata,
  pluralNames
};
