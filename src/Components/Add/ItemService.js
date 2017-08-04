import axios from "axios";

class ItemService {
  sendData(data, this_prop) {
    console.log("ItemService", data);
    axios
      .post("/items/add/post", {
        item: data
      })
      .then(function(response) {
        console.log(response);
        this_prop.push("/items");
      })
      .catch(function(error) {
        console.log(error);
      });
  }
}

export default ItemService;
