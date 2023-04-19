import { Navigate, Route, Routes } from 'react-router';
import MainPage from './MainPage';
import {
  CONTRACT_PATH,
  DEKODER_PATH,
  HOME_PATH,
  INTERNET_PATH,
  TELEVISION_PATH,
} from '../common/constants/routes';
import InternetOffersPage from './InternetOffersPage';
import TelevisionOffersPage from './TelevisionOffersPage';
import ContractOffersPage from './ContractOffersPage';
import DecoderOffersPage from './DekoderOffersPage';

const Routing = () => {
  return (
    <Routes>
      <Route path={HOME_PATH} element={<MainPage />} />
      <Route path={INTERNET_PATH} element={<InternetOffersPage />} />
      <Route path={TELEVISION_PATH} element={<TelevisionOffersPage />} />
      <Route path={CONTRACT_PATH} element={<ContractOffersPage />} />
      <Route path={DEKODER_PATH} element={<DecoderOffersPage />} />
      <Route path="*" element={<Navigate to={HOME_PATH} replace />} />
    </Routes>
  );
};

export default Routing;
