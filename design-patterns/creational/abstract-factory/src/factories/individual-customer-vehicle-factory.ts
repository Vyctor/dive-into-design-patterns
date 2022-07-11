import customer from "../customer/customer";
import vehicle from "../vehicle/vehicle";
import CreateCustomerFactoryInterface from "./create-customer-factory.interface";
import CreateVehicleFactoryInterface from "./create-vehicle-factory.interface";
import IndividualCustomer from "../customer/individual-customer";
import IndividualCar from "../vehicle/individual-car";

export default class IndividualCustomerVehicleFactory
  implements CreateCustomerFactoryInterface, CreateVehicleFactoryInterface
{
  createCustomer(customerName: string): customer {
    return new IndividualCustomer(customerName);
  }

  createVehicle(vehicleName: string, customerName: string): vehicle {
    const customer = this.createCustomer(customerName);
    return new IndividualCar(vehicleName, customer);
  }
}
