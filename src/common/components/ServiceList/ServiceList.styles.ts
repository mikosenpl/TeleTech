import styled from 'styled-components';

export const ServicesListWrapper = styled.div`
  width: 80%;
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-left: 0.2rem solid ${({ theme }) => theme.colors.secondary};
  border-right: 0.2rem solid ${({ theme }) => theme.colors.tertiary};
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
