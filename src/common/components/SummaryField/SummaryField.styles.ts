import { Button } from 'primereact/button';
import { PickList } from 'primereact/picklist';
import styled from 'styled-components';

export const SummaryFieldWrapper = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  background-color: ${({ theme }) => theme.colors.contrast};
  flex-direction: column;
  justify-content: space-between;
`;

export const SummaryButtonArea = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  flex-direction: column;
  text-align: end;
  justify-content: flex-end;
  padding: 1rem;
`;

export const SummaryListItem = styled.div`
  margin-top: 1rem;
  display: flex;
  width: 100%;
  height: 100%;
`;

export const SummaryListItemLeft = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const SummaryListItemLeftArea = styled.div`
  width: 100%;
  height: 50%;
  text-align: center;
`;

export const SummaryListItemRight = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  text-align: center;
  justify-content: flex-start;
  align-items: center;
`;

export const SummaryServiceNameText = styled.p`
  color: ${({ theme }) => theme.colors.tertiary};
  font-size: ${({ theme }) => theme.fontSize.l};
`;

export const SummaryPriceText = styled.p`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSize.xl};
`;

export const SummaryText = styled.p`
  text-align: center;
  margin-top: 1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSize.xl};
`;

export const SummaryButton = styled(Button)`
  margin-top: 1rem;
  background-color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.xxl};

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary} !important;
  }
`;
