import styled from 'styled-components';

export const InternetOffersWrapper = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  border-left: 0.2rem solid ${({ theme }) => theme.colors.secondary};
  border-right: 0.2rem solid ${({ theme }) => theme.colors.tertiary};
`;
