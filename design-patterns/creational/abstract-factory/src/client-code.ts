import EnterpriseCustomerVehicleFactory from "./factories/enterprise-customer-vehicle-factory";
import IndividualCustomerVehicleFactory from "./factories/individual-customer-vehicle-factory";

const enterpriseCarFactory = new EnterpriseCustomerVehicleFactory();
const individualCarFactory = new IndividualCustomerVehicleFactory();

const individualCarOne = individualCarFactory.createVehicle("Fusca", "John");
const individualCarTwo = individualCarFactory.createVehicle("Fusion", "Vyctor");

const enterpriseCarOne = enterpriseCarFactory.createVehicle(
  "Ferrari",
  "Mecenas"
);
const enterpriseCarTwo = enterpriseCarFactory.createVehicle("Tesla", "Jane");

individualCarOne.pickup();
individualCarTwo.pickup();

enterpriseCarOne.pickup();
enterpriseCarTwo.pickup();
