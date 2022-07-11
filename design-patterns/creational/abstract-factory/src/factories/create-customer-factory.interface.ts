import Customer from "../customer/customer";

export default interface CreateCustomerFactoryInterface {
  createCustomer(customerName: string): Customer;
}
