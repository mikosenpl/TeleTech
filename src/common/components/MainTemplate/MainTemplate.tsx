import { ReactNode } from 'react';
import Sidebar from '../SideBar/SideBar';
import SummaryField from '../SummaryField/SummaryField';
import { MainContener, MainPageWrapper } from './MainTemplate.styles';

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
