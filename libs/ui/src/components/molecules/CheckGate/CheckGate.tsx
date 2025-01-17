import { ReactNode, useState } from 'react';
import { CheckedState } from '@radix-ui/react-checkbox';
import { FieldWrapper } from '../FieldWrapper';
import { Checkbox } from '../../atoms/Checkbox';
import { Buildable } from '../../../types/formAndField';
import { CheckGateBox } from './CheckGate.styles';

type CheckGateProps = {
  gateLabel: string;
  fields: Array<ReactNode>;
};

export const CheckGate = ({ id, fields, gateLabel, rules, ...props }: Buildable<CheckGateProps>) => {
  const [gatedOn, toggleGate]= useState(false);

  const onCheckedChanged = (checked: CheckedState) => {
    toggleGate(checked.valueOf() as boolean);
  };

  return (
    <FieldWrapper {...props} id={id} rules={rules}>
       <Checkbox
          id={id}
          title={gateLabel}
          onCheckedChange={onCheckedChanged}
        /> 
      {gatedOn && (
        <CheckGateBox>
          {fields}
        </CheckGateBox>
      )}
    </FieldWrapper>
  );
};

export default CheckGate;
