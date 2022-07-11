import customer from "../customer/customer";
import vehicle from "../vehicle/vehicle";
import CreateCustomerFactoryInterface from "./create-customer-factory.interface";
import CreateVehicleFactoryInterface from "./create-vehicle-factory.interface";
import EnterpriseCustomer from "../customer/enterprise-customer";
import EnterpriseCar from "../vehicle/enterprise-car";

export default class EnterpriseCustomerVehicleFactory
  implements CreateCustomerFactoryInterface, CreateVehicleFactoryInterface
{
  createCustomer(customerName: string): customer {
    return new EnterpriseCustomer(customerName);
  }

  createVehicle(vehicleName: string, customerName: string): vehicle {
    const customer = this.createCustomer(customerName);
    return new EnterpriseCar(vehicleName, customer);
  }
}
