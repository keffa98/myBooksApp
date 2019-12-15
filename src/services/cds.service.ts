import {CdsModel} from "../models/cds.model";

export class CdsService {
  cdList: CdsModel[] = [
    {
      title: 'No One',
      description: [
        'Lorepsum'
      ],
      isLend: false
    },
    {
      title: 'Black & Yellow',
      description: [
        'Lorepsum'
      ],
      isLend: true
    }
  ];

}
