import styled from 'styled-components';

export const ContractOffersWrapper = styled.div`
  width: 80%;
  display: flex;
  border-left: 0.2rem solid ${({ theme }) => theme.colors.secondary};
  border-right: 0.2rem solid ${({ theme }) => theme.colors.tertiary};
`;
