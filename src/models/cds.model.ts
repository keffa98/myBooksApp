export class CdsModel {
  title: string;
  description: string[];
  isLend: boolean;

  constructor(title: string) {
    this.isLend = false;
  }
}
