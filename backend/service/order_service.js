const orderRepo = require("../repo/order_repo");
const orderDTO=require("../dto/orderDTO");
const userService=require("../service/user_service");


function create(order) {
  return orderRepo.create(order);
}

function remove(id) {
  return orderRepo.remove(id);
}


function getAllOrders(userId) {
    const orders = orderRepo.getByRole(userId);
    const loggedUser=userService.getById(userId);

    const response = orders.map(order => {
      const orderDto = new orderDTO();
      orderDto.orderId = order.id;
      orderDto.date = orderRepo.getDate(order.id);
      orderDto.price = orderRepo.getPrice(order.id);
      orderDto.orderStatus = orderRepo.getStatus(order.id);
      orderDto.duration = orderRepo.getDuration(order.id);
      orderDto.vehicles=order.vehicles;
      const user=orderRepo.getUser(order.id);


      if(loggedUser.role==="Buyer")
      {const rentalObject=orderRepo.getRental(order.id);
        orderDto.name = rentalObject.name;
        orderDto.logo = rentalObject.imagePath;}
      else if(loggedUser.role=="Manager")
      { const rentalObject=orderRepo.getRental(order.id);
        orderDto.name = rentalObject.name;
        orderDto.userName=user.name;
        orderDto.surname=user.surname;
        orderDto.logo=user.image;
        orderDto.idUser=user.id;
        console.log(user.image)

      }
      

      return orderDto;
    });
  
    return response;
  }

function getAll() {
  return orderRepo.getAll();
}

function getById(id) {
  return orderRepo.getById(id);
}

function update(id, updatedOrder) {
  return orderRepo.update(id, updatedOrder);
}



module.exports = {
  create,
  remove,
  getAll,
  getById,
  update,
  getAllOrders,
};
