import { MenuItem } from '../models/MenuItem';
import {
  HOME_PATH,
  INTERNET_PATH,
  TELEVISION_PATH,
  CONTRACT_PATH,
  DEKODER_PATH,
  NEW_SERVICE_PATH,
} from './routes';

export const MenuItems: MenuItem[] = [
  { path: HOME_PATH, text: 'sidebar.home' },
  { path: INTERNET_PATH, text: 'sidebar.internet' },
  { path: TELEVISION_PATH, text: 'sidebar.television' },
  { path: CONTRACT_PATH, text: 'sidebar.contract' },
  { path: DEKODER_PATH, text: 'sidebar.decoder' },
  { path: NEW_SERVICE_PATH, text: 'sidebar.newService' },
];
