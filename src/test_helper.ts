import { Purchase } from "./purchase.interface";

const mockPurchase = (
  id = 1,
  title = "New title",
  price = 30,
  isBaught = false
) => ({
  id,
  title,
  price,
  isBaught,
});

export { mockPurchase };
