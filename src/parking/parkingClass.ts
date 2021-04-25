import { AutoTier } from "./autoTier";
import { BicycleTier } from "./bicycleTier";
import { MotorcycleTier } from "./motorCycleTier";

export class Parking {
  addTier(type: string, floor: number) {
    switch (type) {
      case "Auto":
        return new AutoTier(floor);
      case "Bicycle":
        return new BicycleTier(floor);
      case "Motorcycle":
        return new MotorcycleTier(floor);
      default:
        throw Error("Sorry, we can't create  " + type + "tier.");
    }
  }
}

const parking1 = new Parking();
const autoTier1 = parking1.addTier("Auto", 5);
autoTier1.amountOfFreeSpaces();
