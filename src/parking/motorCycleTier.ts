import { BasicParkingTier } from "./abstractTier";
import { AutoParkingSpace } from "./parkingTypes";

export class MotorcycleTier extends BasicParkingTier<AutoParkingSpace> {
  public amount = 100;
  constructor(floor: number) {
    super();
    this.parkingSpaces = [];
    this.parkingSpaces[this.amount - 1] = {
      floor: floor,
      id: this.amount,
      isFree: false,
    };
    this.parkingSpaces.forEach((item, index) => {
      this.parkingSpaces[index] = {
        id: index + 1,
        isFree: true,
        floor: floor,
      };
    });
  }
}
