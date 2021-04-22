import { Purchase } from "./purchase.interface";

export class Repository {
  private fullList: Purchase[];
  constructor() {
    this.fullList = [];
  }
  getPurchases() {
    return this.fullList;
  }

  add(purch: Purchase): void {
    this.fullList.push(purch);
  }

  getById(id: number): Purchase | undefined {
    return this.fullList.find((item) => item.id === id);
  }

  delete(id: number): void {
    const index = this.fullList.findIndex((item) => item.id === id);
    this.fullList = this.fullList.splice(index, 1);
  }
}
