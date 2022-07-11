import Customer from "../customer/customer";
import Vehicle from "../vehicle/vehicle";

export default interface CreateVehicleFactoryInterface {
  createVehicle(vehicleName: string, customerName: string): Vehicle;
}
