import { CustomFieldLego } from './config';

export const FIELD: Record<string, CustomFieldLego> = {
  TITLE: {
    id: 'title',
    type: 'input',
    label: 'Title',
    placeholder: 'Enter title',
  },
  DESCRIPTION: {
    id: 'description',
    type: 'textarea',
    label: 'Description',
    placeholder: 'Enter description',
  },
  LINK: {
    id: 'link',
    type: 'input',
    label: 'Link',
    placeholder: 'http://',
    expectType: 'url',
  },
  TRIBUTE: {
    id: 'tribute',
    type: 'tributeInput',
    label: 'Tribute',
    selectId: 'TRIBUTE_SELECT',
  },
};