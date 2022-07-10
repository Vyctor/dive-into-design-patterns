import { Vehicle } from "../vehicles/vehicle";

export default abstract class VehicleFactory {
  abstract getVehicle(vehicleName: string): Vehicle;

  pickup(customerName: string, vehicleName: string): Vehicle {
    const car = this.getVehicle(vehicleName);
    car.pickup(customerName);
    return car;
  }
}
