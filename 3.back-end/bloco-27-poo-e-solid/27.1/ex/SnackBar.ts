class Customer {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class OrderItem {
  item: string;
  price: number;

  constructor(item: string, price: number) {
    this.item = item;
    this.price = price;
  }
}

class Order {
  customer: Customer;
  items: OrderItem[];
  paymentMethod: string;
  discount: number;

  constructor(
    customer: Customer,
    items: OrderItem[],
    paymentMethod: string,
    discount: number = 0,
  ) {
    this.customer = customer;
    this.items = items;
    this.paymentMethod = paymentMethod;
    this.discount = discount;
  }

  total(): number {
    return this.items.reduce((prev, curr) => prev + curr.price, 0);
  }

  totalWithDiscount(): number {
    return (this.total() * (1 - this.discount))
  }
}
