const order = {
  customer : {
    address : {
      city : "Torino"
    }
  }
};

if (order && order.customer && order.customer.address && !order.customer.address.city) {
  console.log('City is required');
}