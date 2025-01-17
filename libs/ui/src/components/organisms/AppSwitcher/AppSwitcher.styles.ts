import styled from 'styled-components';

import { Theme } from '../../../types/theming';
import { DropdownButton } from '../../molecules';

export const AppSwitcherTrigger = styled(DropdownButton)`
  min-width: ${({ minWidth }: { minWidth: string }) => minWidth};
  padding: 0 4px 0 16px;

  &[data-state='open'] {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  svg.icon-right {
    color: ${({ theme }: { theme: Theme }) => theme.primary};
    margin-left: auto;
  }

  svg.icon-left {
    // TODO Need to know if colors are already applied to App SVGs
    color: ${({ theme }: { theme: Theme }) => theme.primary};
  }
`;
