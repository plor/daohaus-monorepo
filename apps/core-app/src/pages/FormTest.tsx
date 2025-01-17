import { FormBuilder } from '@daohaus/haus-form-builder';
import { CustomFields } from '../legos/config';
import { FORM } from '../legos/form';

export function FormTest() {
  return <FormBuilder form={FORM.TOKEN_SETTINGS} customFields={CustomFields} />;
}

export default FormTest;
