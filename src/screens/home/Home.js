import { Link } from "react-router-dom";
import "./Home.css";
import React from "react";
import Header from "../../common/header";
import SearchIcon from "@material-ui/icons/Search";
import "../../../node_modules/font-awesome/css/font-awesome.min.css";
import {
  Input,
  Card,
  CardMedia,
  CardActionArea,
  CardContent
} from "@material-ui/core";

import Typography from "@material-ui/core/Typography";
import { get } from "../../common/js/api";

class Home extends React.Component {
  componentDidMount() {
    this.fetchRestaurants();
  }

  constructor() {
    super();
    this.state = {
      restaurants: []
    };
  }

  fetchRestaurants = name => {
    const apiFn = !name ? get.allRestaurants : get.findRestaurentByName;
    apiFn(name).then(data => {
      this.setState({
        restaurants: data.restaurants
      });
    });
  };

  render() {
    const { restaurants } = this.state;
    return (
      <>
        <Header
          middle={
            <div className="search-box">
              <Input
                type="text"
                onChange={e => {
                  this.fetchRestaurants(e.nativeEvent.target.value);
                }}
                placeholder="Search by Restaurant Name"
              />
              <SearchIcon />
            </div>
          }
        ></Header>
        <div className="restaurant-cards">
          {restaurants.map(restaurant => (
            <div key={restaurant.id}>
              <Link to={`/restaurant/${restaurant.id}`}>
                <Card className="restaurant-card">
                  <CardActionArea>
                    <CardMedia
                      style={{ height: "160px" }}
                      image={restaurant.photo_URL}
                      title={restaurant.restaurant_name}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {restaurant.restaurant_name}
                      </Typography>
                      <br />
                      <Typography
                        style={{ height: "50px" }}
                        variant="body2"
                        component="p"
                      >
                        {restaurant.categories}
                      </Typography>
                      <br />
                      <br />
                      <Typography
                        variant="body2"
                        component="p"
                        className="card-footer"
                      >
                        <span className="rating">
                          <i className="fa fa-star icon"></i>
                          {restaurant.customer_rating} (
                          {restaurant.number_customers_rated})
                        </span>
                        <span className="price">
                          <i className="fa fa-inr icon"></i>
                          {restaurant.average_price} for two
                        </span>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            </div>
          ))}
        </div>
      </>
    );
  }
}
export default Home;
