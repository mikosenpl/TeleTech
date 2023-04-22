import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import styled from 'styled-components';

// --- main
export const MainContentWrapper = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  border-left: 0.2rem solid ${({ theme }) => theme.colors.secondary};
  border-right: 0.2rem solid ${({ theme }) => theme.colors.tertiary};
`;

export const OffersWrapper = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const OfferCenter = styled(Card)`
  margin-top: 10rem;
  padding-top: 1rem;
  width: 25%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.tertiary};
  text-align: center;
  position: relative;

  .p-card-footer {
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    right: 1rem;
  }
`;

export const OfferSides = styled(Card)`
  margin: 15rem 2rem 0 2rem;
  padding-top: 1rem;
  width: 25%;
  height: 100%;
  text-align: center;
  position: relative;

  .p-card-footer {
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    right: 1rem;
  }
`;

export const OfferFooter = styled.div`
  display: flex;
  flex-direction: column;
`;

// --- ---
// --- text
export const PriceTextCenter = styled.span`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.contrast};
  font-size: ${({ theme }) => theme.fontSize.xxl};
`;

export const DescriptionOfferTextCenter = styled.p`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSize.xl};
`;

export const CurrencyTextCenter = styled.p`
  font-weight: 200;
  color: ${({ theme }) => theme.colors.contrast};
  font-size: ${({ theme }) => theme.fontSize.m};
`;

export const CheckButtonCenter = styled(Button)`
  background-color: ${({ theme }) => theme.colors.primary};
  border-color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSize.xl};

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary} !important;
    border-color: ${({ theme }) => theme.colors.secondary} !important;
  }
`;

export const PriceText = styled.span`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSize.xxl};
`;

export const DescriptionOfferText = styled.p`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSize.xl};
`;

export const CurrencyText = styled.p`
  font-weight: 200;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSize.m};
`;

export const OfferCheckListText = styled.p`
  padding: 0.5rem;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSize.l};
  position: relative;
`;
// --- ---
// --- ---
export const OfferCheckListTextCenter = styled.p`
  padding: 0.5rem;
  color: ${({ theme }) => theme.colors.contrast};
  font-size: ${({ theme }) => theme.fontSize.l};
  position: relative;
`;

export const CheckButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.primary};
  border-color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSize.xl};

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary} !important;
    border-color: ${({ theme }) => theme.colors.secondary} !important;
  }
`;
