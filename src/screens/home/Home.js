import { Link } from "react-router-dom";
import "./Home.css";
import React from "react";
import Header from "../../common/header";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import {
  Input,
  Button,
  Card,
  CardMedia,
  CardActionArea,
  CardContent
} from "@material-ui/core";
import { MOCKS } from "../../common/js/constants";

import Typography from "@material-ui/core/Typography";
import { get } from "../../common/js/api";

class Home extends React.Component {

  componentDidMount(){
    get.allRestaurants();
  }
  render() {
    return (
      <>
        <Header
          middle={
            <div className="search-box">
              <Input type="text" placeholder="Search by Restaurant Name" />
              <SearchIcon />
            </div>
          }
        ></Header>
        <div className="restaurant-cards">
          {MOCKS.allRestaurants.map(restaurant => (
            <div key={restaurant.name}>
              <Link to={`/restaurant/${restaurant.id}`}>
                <Card className="restaurant-card">
                  <CardActionArea>
                    <CardMedia
                      style={{ height: "160px" }}
                      image="https://via.placeholder.com/728x100.png"
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {restaurant.name}
                      </Typography>
                      <br />
                      <Typography variant="body2" component="p">
                        {restaurant.tags.join(", ")}
                      </Typography>
                      <br />
                      <br />
                      <Typography
                        variant="body2"
                        component="p"
                        className="card-footer"
                      >
                        <span className="rating">
                          {restaurant.rating.average} ({restaurant.rating.count}
                          )
                        </span>
                        <span className="price">{restaurant.cost} for two</span>
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
