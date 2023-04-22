import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import styled from 'styled-components';

export const MainContener = styled.div`
  margin-left: 300px;
`;

export const MainPageWrapper = styled.div`
  margin: 0;
  width: 100%;
  height: 100vh;
  padding: 0;
  display: flex;
  background-color: ${({ theme }) => theme.colors.body};
`;

export const ServiceDescriptionWrapper = styled.div`
  width: 50%;
  height: 80%;
  padding-top: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;

export const ServiceCardWrapper = styled.div`
  width: 50%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ServiceCardFooter = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImageServiceWrapper = styled.div`
  padding-right: 3rem;
  width: 90%;
  height: 30%;
  text-align: center;
`;

export const ServiceCardOffer = styled(Card)`
  margin-top: 10rem;
  padding-top: 1rem;
  width: 70%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.contrast};
  text-align: center;
  position: relative;

  .p-card-footer {
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    right: 1rem;
  }
`;

export const ServiceCardCheckButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.primary};
  border-color: ${({ theme }) => theme.colors.primary};
  padding: 2rem;
  font-size: ${({ theme }) => theme.fontSize.xl};

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary} !important;
    border-color: ${({ theme }) => theme.colors.secondary} !important;
  }
`;

export const ServiceCardCheckListText = styled.p`
  padding: 0.5rem;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSize.xl};
  position: relative;
`;

export const ServiceCardDescriptionText = styled.p`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSize.xl};
`;

export const ServiceCardCurrencyText = styled.p`
  font-weight: 200;
  color: ${({ theme }) => theme.colors.contrast};
  font-size: ${({ theme }) => theme.fontSize.m};
`;

export const DescriptionServiceText = styled.p`
  padding-right: 3rem;
  font-weight: 700;
  text-align: justify;
  line-height: 1.5rem;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSize.l};
`;

export const ServiceCardPriceText = styled.span`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSize.xxl};
`;

export const ImageService = styled.img`
  height: 100%;
  width: auto;
`;
