// import { Purchase } from "./purchase.interface";
import { Repository } from "./repo";
import { Purchase } from "./purchase.interface";
import { mockPurchase } from "./test_helper";

describe("repository", () => {
  // eslint-disable-next-line jest/no-hooks
  beforeEach(() => {
    const repo = new Repository();
  });
  it("add method", () => {
    expect.assertions(1);
    const repo = new Repository();
    const oranges: Purchase = {
      id: 1,
      title: "Oranges",
      price: 30,
      isBaught: false,
    };
    repo.add(oranges);
    expect(repo.getPurchases()).toHaveLength(1);
  });
  it("getById method", () => {
    expect.assertions(1);
    const repo = new Repository();
    const PURCHASE_1: Purchase = {
      id: 1,
      title: "Oranges",
      price: 30,
      isBaught: false,
    };
    const PURCHASE_2: Purchase = {
      id: 2,
      title: "Strawberry",
      price: 30,
      isBaught: false,
    };
    const PURCHASE_3: Purchase = {
      id: 3,
      title: "Lemon",
      price: 30,
      isBaught: false,
    };
    repo.add(PURCHASE_1);
    repo.add(PURCHASE_2);
    repo.add(PURCHASE_3);
    expect(repo.getById(PURCHASE_2.id)).toEqual(PURCHASE_2);
  });
});
