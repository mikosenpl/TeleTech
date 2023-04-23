import styled from 'styled-components';

export const NewServiceWrappers = styled.div`
  width: 80%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  border-left: 0.2rem solid ${({ theme }) => theme.colors.secondary};
  border-right: 0.2rem solid ${({ theme }) => theme.colors.tertiary};
`;

export const InputFieldWrapper = styled.span`
  display: flex;
  flex-direction: column;
`;
