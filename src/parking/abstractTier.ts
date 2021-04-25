export abstract class BasicParkingTier<
  T extends { id: number; isFree: boolean }
> {
  public parkingSpaces: T[] = [];

  takeParkingSpace = (id: number) => {
    const space = this.parkingSpaces.find((item) => item.id === id);
    if (space) {
      if (space.isFree) {
        space.isFree = false;
        return space;
      }
      throw Error("This place is taken");
    } else {
      throw Error("We dont have parking space with that number");
    }
  };

  toFreeParkingSpace = (id: number) => {
    const space = this.parkingSpaces.find((item) => item.id === id);
    if (space) {
      if (space.isFree) {
        return space;
      }
      throw Error("This place is taken");
    } else {
      throw Error("We dont have parking space with that number");
    }
  };

  amountOfFreeSpaces() {
    return this.parkingSpaces.filter((item) => item.isFree);
  }
}
