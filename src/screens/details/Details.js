import "./Details.css";
import "../../../node_modules/font-awesome/css/font-awesome.min.css";
import React from "react";
import Divider from "@material-ui/core/Divider";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import Card from "@material-ui/core/Card";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import Header from "../../common/header";
import CustomizedSnackBar from "../../common/custom-snackbar";
import { get } from "../../common/js/api";

const RestaurantBase = ({ data }) => {
  return (
    <div className="restaurant">
      <div className="image">
        <img src={data.photo_URL} alt={data.restaurant_name} />
      </div>
      <div className="details">
        <div>
          <h2>{data.restaurant_name}</h2>
          <p>{data.address.locality}</p>
        </div>
        <div className="tags">
          {data.categories.map(x => x.category_name).join(", ")}
        </div>
        <div className="rating-cost">
          <div>
            <p>
              <i className="fa fa-star icon"></i>
              {data.customer_rating}
            </p>
            <p className="subtext">
              Average rating by {data.number_customers_rated} customers
            </p>
          </div>
          <div>
            <p>
              <i className="fa fa-inr icon"></i>
              {data.average_price}
            </p>
            <p className="subtext">Average cost for two people</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const FoodItem = ({ item, add }) => {
  return (
    <div className="food-item">
      <div className="item-base">
        <div className="tag">
          <i
            className="fa fa-circle icon mar-rl"
            style={
              item.item_type === "VEG" ? { color: "green" } : { color: "red" }
            }
          ></i>
        </div>
        <div className="name">{item.item_name}</div>
      </div>
      <div className="item-info">
        <div className="price">
          <i className="fa fa-inr icon"></i>
          {item.price}
        </div>
        <div className="add-to-cart">
          <IconButton
            onClick={() => {
              add(item);
            }}
          >
            <AddIcon fontSize="small" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

const AddedFoodItem = ({ item, add, remove }) => {
  return (
    <div className="food-item added">
      <div className="item-base">
        <div className="tag">
          <i
            className="fa fa-stop-circle-o icon mar-rl"
            style={
              item.item_type === "VEG" ? { color: "green" } : { color: "red" }
            }
          ></i>
        </div>
        <div className="name">{item.item_name}</div>
      </div>
      <div className="item-info">
        <div className="add-to-cart">
          <IconButton
            onClick={() => {
              add(item, true);
            }}
          >
            <RemoveIcon fontSize="small" />
          </IconButton>
          <span>{item.count}</span>
          <IconButton
            onClick={() => {
              add(item);
            }}
          >
            <AddIcon fontSize="small" />
          </IconButton>
        </div>
        <div className="price">
          <i className="fa fa-inr icon"></i>
          {item.price}
        </div>
      </div>
    </div>
  );
};

const Menu = ({ menu, addItem }) => {
  return (
    <div>
      {menu.map(category => (
        <div key={category.id} className="food-category">
          <h3>{category.category_name}</h3>
          <Divider style={{ marginTop: 15, marginBottom: 15 }}></Divider>
          {category.item_list.map((item, i) => (
            <FoodItem add={addItem} key={i} item={item}></FoodItem>
          ))}
        </div>
      ))}
    </div>
  );
};

const Cart = ({ name, items, snackbar, addItem, history }) => {
  return (
    <Card className="cart">
      <CardContent>
        <div>
          <Badge
            className="badge"
            badgeContent={items.reduce((pV, cV) => pV + cV.count, 0)}
            color="primary"
            showZero
          >
            <ShoppingCartIcon />
          </Badge>
          <span className="cart-header">My Cart</span>
        </div>
        <div>
          {items.map(item => (
            <AddedFoodItem item={item} add={addItem}></AddedFoodItem>
          ))}
        </div>
        <div>
          <p className="total">
            <span>Total</span>{" "}
            <span>
              <i className="fa fa-inr icon"></i>
              {items.reduce((pV, cV) => pV + cV.price * cV.count, 0)}
            </span>
          </p>
        </div>
        <Button
          onClick={() => {
            snackbar("Please login first!");
            history.push({
              pathname: "/checkout/",
              state: {
                orderItems: items,
                total: items.reduce((pV, cV) => pV + cV.price * cV.count, 0),
                restaurantName: name
              }
            });
          }}
          className="checkout"
          variant="contained"
          color="primary"
        >
          Checkout
        </Button>
      </CardContent>
    </Card>
  );
};

class Details extends React.Component {
  constructor() {
    super();
    this.state = {
      callout: null,
      addedItems: [],
      data: null
    };
  }

  setSnackBar = text => {
    this.setState({ callout: text });
  };

  componentDidMount() {
    const { id } = this.props;
    get.restaurantDetails(id).then(data => {
      this.setState({ data });
    });
  }

  addItem = (item, negative) => {
    const itemCardIndex = this.state.addedItems.findIndex(
      x => x.id === item.id
    );

    if (negative && !~itemCardIndex) {
      return;
    }

    this.setSnackBar(
      negative ? "Item quantity decreased by 1!" : "Item added to cart!"
    );

    if (!~itemCardIndex) {
      this.setState(prev => {
        return {
          addedItems: [...prev.addedItems, { ...item, count: 1 }]
        };
      });
    } else {
      this.setState(prev => {
        prev.addedItems[itemCardIndex].count += negative ? -1 : 1;
        return {
          addedItems: [...prev.addedItems.filter(item => item.count > 0)]
        };
      });
    }
  };

  render() {
    const { callout, addedItems, data } = this.state;
    const { history } = this.props;
    return (
      <>
        <Header></Header>
        {data && (
          <main className="restaurant-details">
            <RestaurantBase data={data}></RestaurantBase>
            <div className="action-area">
              <Menu addItem={this.addItem} menu={data.categories}></Menu>
              <Cart
                name={data.restaurant_name}
                history={history}
                total={224}
                snackbar={this.setSnackBar}
                items={addedItems}
                addItem={this.addItem}
              ></Cart>
            </div>
          </main>
        )}
        <CustomizedSnackBar
          message={this.state.callout}
          onClose={() => {
            this.setSnackBar(null);
          }}
        ></CustomizedSnackBar>
      </>
    );
  }
}
export default Details;
