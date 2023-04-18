import { ReactNode } from 'react';
import styled from 'styled-components';
import Sidebar from '../SideBar/SideBar';
import SummaryField from '../SummaryField/SummaryField';

const MainContener = styled.div`
  margin-left: 300px;
`;

const MainPageWrapper = styled.div`
  margin: 0;
  width: 100%;
  height: 100vh;
  padding: 0;
  display: flex;
  background-color: ${({ theme }) => theme.colors.body};
`;

interface MainTemplateProps {
  children: ReactNode;
}
const MainTemplate = ({ children }: MainTemplateProps) => {
  return (
    <MainContener>
      <MainPageWrapper>
        <Sidebar />
        {children}
        <SummaryField />
      </MainPageWrapper>
    </MainContener>
  );
};

export default MainTemplate;
