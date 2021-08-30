const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const name = order.name;
  const phoneNumber = order.phoneNumber;
  const address = order.address;

  return `Olá ${deliveryPerson}, entrega para: ${name}, Telefone: ${phoneNumber}, R. ${address.street}, Nº: ${address.number}, AP: ${address.apartment}`;
}

console.log(customerInfo(order));

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  let newPerson = order.order.delivery.deliveryPerson;
  newPerson = 'Luiz Silva';

  let price = order.order.delivery.price;
  price = '50';

  const pizzas = order.order.pizza;
  const drinks = order.order.drinks.coke.type;

  return `Olá ${newPerson}, o total do seu pedido de ${Object.keys(pizzas)} e ${drinks} é R$ ${price},00`;
}

console.log(orderModifier(order));
