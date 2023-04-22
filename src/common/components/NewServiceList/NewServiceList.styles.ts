import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import styled from 'styled-components';

export const NewServiceWrapper = styled.div`
  width: 80%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  border-left: 0.2rem solid ${({ theme }) => theme.colors.secondary};
  border-right: 0.2rem solid ${({ theme }) => theme.colors.tertiary};
`;

export const NewServiceDialog = styled(Dialog)`
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

export const NewServiceDialogMainButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.secondary};
  border-color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSize.l};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary} !important;
  }
`;

export const ServicesTable = styled.table`
  width: 70%;
  border-collapse: collapse;
  margin: 2rem 0;
  font-size: ${({ theme }) => theme.fontSize.l};
  border-radius: 5px 5px 0 0;
  overflow: hidden;
  box-shadow: 0 0 20px ${({ theme }) => theme.colors.tertiary};

  thead tr {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.contrast};
    text-align: left;
    font-weight: 700;
  }

  th,
  td {
    padding: 1rem 2rem;
  }

  tbody tr:nth-of-type(even) {
    background-color: ${({ theme }) => theme.colors.tertiary};
    color: ${({ theme }) => theme.colors.contrast};
  }
`;
