import "./Details.css";
import "../../../node_modules/font-awesome/css/font-awesome.min.css";
import React from "react";
import Divider from "@material-ui/core/Divider";
import Header from "../../common/header";
import { MOCKS } from "../../common/js/constants";

const RestaurantBase = ({ data }) => {
  return (
    <div className="restaurant">
      <div className="image">
        <img src={data.img} alt={data.name} />
      </div>
      <div className="details">
        <div>
          <h2>{data.name}</h2>
          <p>{data.locality}</p>
        </div>
        <div className="tags">{data.tags.join(", ")}</div>
        <div className="rating-cost">
          <div>
            <p>
              <i className="fa fa-star icon"></i>
              {data.rating.average}
            </p>
            <p className="subtext">
              Average rating by {data.rating.count} customers
            </p>
          </div>
          <div>
            <p>
              <i className="fa fa-inr icon"></i>
              {data.cost}
            </p>
            <p className="subtext">Average cost for two people</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const FoodItem = ({ item }) => {
  return (
    <div className="food-item">
      <div className="item-base">
        <div className="tag"></div>
        <div className="name">{item.name}</div>
      </div>
      <div className="item-info">
        <div className="price"></div>
        <div className="add-to-cart"></div>
      </div>
    </div>
  );
};

const Menu = ({ menu }) => {
  return (
    <div>
      {menu.map(category => (
        <div key={category.name} className="food-category">
          <h3>{category.name}</h3>
          <Divider style={{ marginTop: 15, marginBottom: 15 }}></Divider>
          {category.items.map((item, i) => (
            <FoodItem key={i} item={item}></FoodItem>
          ))}
        </div>
      ))}
    </div>
  );
};

class Details extends React.Component {
  render() {
    return (
      <>
        <Header></Header>
        <main className="restaurant-details">
          <RestaurantBase data={MOCKS.allRestaurants[0]}></RestaurantBase>
          <div>
            <Menu menu={MOCKS.allRestaurants[0].categories}></Menu>
          </div>
        </main>
      </>
    );
  }
}
export default Details;
