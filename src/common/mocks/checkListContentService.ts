import { Services } from '../enums/Services';
import { CheckListContentService } from '../models/checkListContentService';

export const mockCheckListContentService: CheckListContentService[] = [
  {
    nameOfService: Services.INTERNET_TELEVISION,
    list: [
      { text: 'offer.checkList.first' },
      { text: 'offer.checkList.second' },
      { text: 'offer.checkList.third' },
      { text: 'offer.checkList.fourth' },
      { text: 'offer.checkList.fifth' },
    ],
  },
  {
    nameOfService: Services.INTERNET_CONTRACT,
    list: [
      { text: 'offer.checkList.first' },
      { text: 'offer.checkList.second' },
      { text: 'offer.checkList.third' },
      { text: 'offer.checkList.fourth' },
      { text: 'offer.checkList.fifth' },
    ],
  },
  {
    nameOfService: Services.INTERNET_TELEVISION_DECODER,
    list: [
      { text: 'offer.checkList.first' },
      { text: 'offer.checkList.second' },
      { text: 'offer.checkList.third' },
      { text: 'offer.checkList.fourth' },
      { text: 'offer.checkList.fifth' },
    ],
  },
];
