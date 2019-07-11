import { EntityMetadataMap } from '@ngrx/data';

export function activeFilter(entities: { active: boolean }[], search: boolean) {
  return entities.filter(e => e.active === search);
}

const entityMetadata: EntityMetadataMap = {
  Todo: {
    filterFn: activeFilter
  }
};

// because the plural of "todo" is not "todos" by default in Nest
const pluralNames = { Todo: 'Todo' };

export const entityConfig = {
  entityMetadata,
  pluralNames
};
