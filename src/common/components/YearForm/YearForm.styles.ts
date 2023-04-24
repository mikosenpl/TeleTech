import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import styled from 'styled-components';

export const YearFormWrappers = styled.div`
  width: 80%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  border-left: 0.2rem solid ${({ theme }) => theme.colors.secondary};
  border-right: 0.2rem solid ${({ theme }) => theme.colors.tertiary};
`;

export const YearFormDialog = styled(Dialog)`
  width: 30vw;

  .p-dialog-header .p-dialog-title {
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: 700;
  }

  .p-dialog-content {
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  label {
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: 700;
  }
`;

export const YearFormDialogMainButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.secondary};
  border-color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSize.l};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary} !important;
  }
`;
