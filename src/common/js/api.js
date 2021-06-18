const BASE = "http://localhost:8080/api";

const DEV_ENV = "dev";

const ENV = "DEV_ENV";

const GET_CACHE = {};

const MOCKS = {
  allRestaurants: {
    restaurants: [
      {
        id: "1dd86f90-a296-11e8-9a3a-720006ceb890",
        restaurant_name: "3 Wise Monkeys",
        photo_URL:
          "https://b.zmtcdn.com/data/res_imagery/42597_RESTAURANT_obp1.jpg",
        customer_rating: 4.9,
        average_price: 1100,
        number_customers_rated: 28,
        address: {
          id: "24615498-a238-11e8-9077-720006ceb890",
          flat_building_name: "The Unicontental, 3rd Road",
          locality: "Khar",
          city: "Mumbai",
          pincode: "400058",
          state: {
            id: "c860e78a-a29b-11e8-9a3a-720006ceb890",
            state_name: "Maharashtra"
          }
        },
        categories: "Chinese, Continental, Indian, Italian, Snacks"
      },
      {
        id: "246165d2-a238-11e8-9077-720006ceb890",
        restaurant_name: "Gateway Taproom",
        photo_URL:
          "https://b.zmtcdn.com/data/pictures/0/18564740/686000d2b5cfebfad3300f313eaae79c.jpg?output-format=webp",
        customer_rating: 4.7,
        average_price: 2200,
        number_customers_rated: 714,
        address: {
          id: "7c174b25-bb31-46a8-87b4-c06ffc9d5f8f",
          flat_building_name:
            "Godrej BKC, Unit 3, Plot C - 68, G Block, Bandra Kurla Complex",
          locality: "Bandra Kurla Complex",
          city: "Mumbai",
          pincode: "400112",
          state: {
            id: "c860e78a-a29b-11e8-9a3a-720006ceb890",
            state_name: "Maharashtra"
          }
        },
        categories: "Chinese, Continental, Indian, Italian, Snacks, Sweet Dish"
      },
      {
        id: "2461973c-a238-11e8-9077-720006ceb890",
        restaurant_name: "Lion Heart",
        photo_URL:
          "https://b.zmtcdn.com/data/res_imagery/18432402_RESTAURANT_f755bf0b6a6ee7aca44d7ddffd464b7e.jpg",
        customer_rating: 4.5,
        average_price: 1200,
        number_customers_rated: 562,
        address: {
          id: "7d174a25-ba31-45a8-85b4-b06ffc9d5f8f",
          flat_building_name: "Dr. B A Marg, Opposite Rani Baug, Byculla East",
          locality: "Byculla",
          city: "Mumbai",
          pincode: "400018",
          state: {
            id: "c860e78a-a29b-11e8-9a3a-720006ceb890",
            state_name: "Maharashtra"
          }
        },
        categories:
          "Chinese, Continental, Drinks, Indian, Italian, Snacks, Sweet Dish"
      },
      {
        id: "3097b8f4-a294-11e8-9a3a-720006ceb890",
        restaurant_name: "Loud Silence",
        photo_URL:
          "https://b.zmtcdn.com/data/reviews_photos/94a/be67cc20a6ab663f95330e5af6afb94a_1521359398.jpg",
        customer_rating: 4.4,
        average_price: 600,
        number_customers_rated: 658,
        address: {
          id: "f114b346-a237-11e8-9077-720006ceb890",
          flat_building_name: "K Star Hotel, Plot 46 & 55",
          locality: "CBD-Belapur",
          city: "Navi Mumbai",
          pincode: "400102",
          state: {
            id: "c860e78a-a29b-11e8-9a3a-720006ceb890",
            state_name: "Maharashtra"
          }
        },
        categories: "Chinese, Continental, Indian, Italian, Snacks"
      },
      {
        id: "359f7e8a-a23b-11e8-9077-720006ceb890",
        restaurant_name: "Rikē - Terrace Bar & Grill",
        photo_URL:
          "https://b.zmtcdn.com/data/pictures/0/18600990/249d197cb4d6537d5560d0a74c9fa4ce.jpg",
        customer_rating: 4.2,
        average_price: 1800,
        number_customers_rated: 2002,
        address: {
          id: "6c84c29a-3a79-4a60-adad-d1cf9fb44575",
          flat_building_name: "C18, Dreamworks, Dalia Estate",
          locality: "Veera Desai Area",
          city: "Mumbai",
          pincode: "400011",
          state: {
            id: "c860e78a-a29b-11e8-9a3a-720006ceb890",
            state_name: "Maharashtra"
          }
        },
        categories: "Chinese, Continental, Drinks, Indian, Italian, Snacks"
      },
      {
        id: "5485eb18-a23b-11e8-9077-720006ceb890",
        restaurant_name: "Splitsvilla Bar & Lounge",
        photo_URL:
          "https://b.zmtcdn.com/data/pictures/9/18634739/6d62975f9bb88caec207ef0c1f570f81.jpg?output-format=webp",
        customer_rating: 4,
        average_price: 1000,
        number_customers_rated: 849,
        address: {
          id: "9c174b25-cb31-66a8-98b4-d06ffc9d5f9f",
          flat_building_name: "House 101, Opposite Vijay Sales",
          locality: "Chembur",
          city: "Mumbai",
          pincode: "400092",
          state: {
            id: "c860e78a-a29b-11e8-9a3a-720006ceb890",
            state_name: "Maharashtra"
          }
        },
        categories: "Chinese, Continental, Indian, Italian, Snacks, Sweet Dish"
      },
      {
        id: "5485e5b4-a23b-11e8-9077-720006ceb890",
        restaurant_name: "Raasta",
        photo_URL:
          "https://b.zmtcdn.com/data/res_imagery/18354546_RESTAURANT_c7eaf3dcf52bc4034e59767f01a73472.jpg",
        customer_rating: 3.6,
        average_price: 1500,
        number_customers_rated: 2848,
        address: {
          id: "8c174b25-bb31-56a8-88b4-d06ffc9d5f89",
          flat_building_name: "4th & 5th floor, Rohan Plaza",
          locality: "Khar",
          city: "Mumbai",
          pincode: "400052",
          state: {
            id: "c860e78a-a29b-11e8-9a3a-720006ceb890",
            state_name: "Maharashtra"
          }
        },
        categories: "Chinese, Continental, Drinks, Indian, Snacks"
      },
      {
        id: "9df46816-a294-11e8-9a3a-720006ceb890",
        restaurant_name: "Oozo",
        photo_URL:
          "https://b.zmtcdn.com/data/pictures/4/18528394/6c3590212b3700b1b160422fd8478287.jpg?output-format=webp",
        customer_rating: 3.2,
        average_price: 2500,
        number_customers_rated: 298,
        address: {
          id: "24614e76-a238-11e8-9077-720006ceb890",
          flat_building_name: "Floor 1, Jalaram Commercial Centre",
          locality: "Sakinaka",
          city: "Mumbai",
          pincode: "400072",
          state: {
            id: "c860e78a-a29b-11e8-9a3a-720006ceb890",
            state_name: "Maharashtra"
          }
        },
        categories: "Chinese, Continental, Indian, Italian, Snacks, Sweet Dish"
      }
    ]
  },
  restaurantsByName: {
    restaurants: [
      {
        id: "5485eb18-a23b-11e8-9077-720006ceb890",
        restaurant_name: "Splitsvilla Bar & Lounge",
        photo_URL:
          "https://b.zmtcdn.com/data/pictures/9/18634739/6d62975f9bb88caec207ef0c1f570f81.jpg?output-format=webp",
        customer_rating: 4,
        average_price: 1000,
        number_customers_rated: 849,
        address: {
          id: "9c174b25-cb31-66a8-98b4-d06ffc9d5f9f",
          flat_building_name: "House 101, Opposite Vijay Sales",
          locality: "Chembur",
          city: "Mumbai",
          pincode: "400092",
          state: {
            id: "c860e78a-a29b-11e8-9a3a-720006ceb890",
            state_name: "Maharashtra"
          }
        },
        categories: "Chinese, Continental, Indian, Italian, Snacks, Sweet Dish"
      }
    ]
  },
  restaurantDetails: {
    id: "5485eb18-a23b-11e8-9077-720006ceb890",
    restaurant_name: "Splitsvilla Bar & Lounge",
    photo_URL:
      "https://b.zmtcdn.com/data/pictures/9/18634739/6d62975f9bb88caec207ef0c1f570f81.jpg?output-format=webp",
    customer_rating: 4,
    average_price: 1000,
    number_customers_rated: 849,
    address: {
      id: "9c174b25-cb31-66a8-98b4-d06ffc9d5f9f",
      flat_building_name: "House 101, Opposite Vijay Sales",
      locality: "Chembur",
      city: "Mumbai",
      pincode: "400092",
      state: {
        id: "c860e78a-a29b-11e8-9a3a-720006ceb890",
        state_name: "Maharashtra"
      }
    },
    categories: [
      {
        id: "2ddf5e9c-ecd0-11e8-8eb2-f2801f1b9fd1",
        category_name: "Chinese",
        item_list: [
          {
            id: "f55086f7-b51e-4044-b258-b7b96c4b7f42",
            item_name: "Cataplana Algarve",
            price: 245,
            item_type: "VEG"
          },
          {
            id: "2ddf36f6-ecd0-11e8-8eb2-f2801f1b9fd1",
            item_name: "pastry",
            price: 210,
            item_type: "VEG"
          }
        ]
      },
      {
        id: "2ddf6158-ecd0-11e8-8eb2-f2801f1b9fd1",
        category_name: "Continental",
        item_list: [
          {
            id: "2ddf4768-ecd0-11e8-8eb2-f2801f1b9fd1",
            item_name: "chillie chowmine",
            price: 210,
            item_type: "NON_VEG"
          },
          {
            id: "2ddf6a5e-ecd0-11e8-8eb2-f2801f1b9fd1",
            item_name: "Grilled 0",
            price: 203,
            item_type: "VEG"
          },
          {
            id: "2ddf42d6-ecd0-11e8-8eb2-f2801f1b9fd1",
            item_name: "matar paneer",
            price: 270,
            item_type: "VEG"
          },
          {
            id: "2ddf4e66-ecd0-11e8-8eb2-f2801f1b9fd1",
            item_name: "mushroom biryani",
            price: 203,
            item_type: "VEG"
          },
          {
            id: "2ddf3be2-ecd0-11e8-8eb2-f2801f1b9fd1",
            item_name: "naan",
            price: 30,
            item_type: "VEG"
          }
        ]
      },
      {
        id: "2ddf567c-ecd0-11e8-8eb2-f2801f1b9fd1",
        category_name: "Indian",
        item_list: [
          {
            id: "2ddf27ce-ecd0-11e8-8eb2-f2801f1b9fd1",
            item_name: "chiken burger",
            price: 100,
            item_type: "NON_VEG"
          },
          {
            id: "2ddf59f6-ecd0-11e8-8eb2-f2801f1b9fd1",
            item_name: "Corn-On-The-Cob",
            price: 270,
            item_type: "VEG"
          },
          {
            id: "2ddf6a5e-ecd0-11e8-8eb2-f2801f1b9fd1",
            item_name: "Grilled 0",
            price: 203,
            item_type: "VEG"
          },
          {
            id: "2ddf36f6-ecd0-11e8-8eb2-f2801f1b9fd1",
            item_name: "pastry",
            price: 210,
            item_type: "VEG"
          },
          {
            id: "2ddf2f4e-ecd0-11e8-8eb2-f2801f1b9fd1",
            item_name: "vanilla icecream",
            price: 230,
            item_type: "VEG"
          }
        ]
      },
      {
        id: "2ddf5546-ecd0-11e8-8eb2-f2801f1b9fd1",
        category_name: "Italian",
        item_list: [
          {
            id: "f55086f7-b51e-4044-b258-b7b96c4b7f42",
            item_name: "Cataplana Algarve",
            price: 245,
            item_type: "VEG"
          },
          {
            id: "2ddf5546-ecd0-11e8-8eb2-f2801f1b9fd1",
            item_name: "Chicken Roll",
            price: 150,
            item_type: "NON_VEG"
          },
          {
            id: "2ddf6284-ecd0-11e8-8eb2-f2801f1b9fd1",
            item_name: "Espetada",
            price: 210,
            item_type: "NON_VEG"
          },
          {
            id: "2ddf4e66-ecd0-11e8-8eb2-f2801f1b9fd1",
            item_name: "mushroom biryani",
            price: 203,
            item_type: "VEG"
          },
          {
            id: "2ddf230a-ecd0-11e8-8eb2-f2801f1b9fd1",
            item_name: "pizza",
            price: 200,
            item_type: "NON_VEG"
          }
        ]
      },
      {
        id: "2ddf57a8-ecd0-11e8-8eb2-f2801f1b9fd1",
        category_name: "Snacks",
        item_list: [
          {
            id: "2ddf5546-ecd0-11e8-8eb2-f2801f1b9fd1",
            item_name: "Chicken Roll",
            price: 150,
            item_type: "NON_VEG"
          },
          {
            id: "2ddf59f6-ecd0-11e8-8eb2-f2801f1b9fd1",
            item_name: "Corn-On-The-Cob",
            price: 270,
            item_type: "VEG"
          },
          {
            id: "2ddf6284-ecd0-11e8-8eb2-f2801f1b9fd1",
            item_name: "Espetada",
            price: 210,
            item_type: "NON_VEG"
          },
          {
            id: "2ddf42d6-ecd0-11e8-8eb2-f2801f1b9fd1",
            item_name: "matar paneer",
            price: 270,
            item_type: "VEG"
          },
          {
            id: "2ddf3be2-ecd0-11e8-8eb2-f2801f1b9fd1",
            item_name: "naan",
            price: 30,
            item_type: "VEG"
          }
        ]
      },
      {
        id: "2ddf59f6-ecd0-11e8-8eb2-f2801f1b9fd1",
        category_name: "Sweet Dish",
        item_list: [
          {
            id: "2ddf4768-ecd0-11e8-8eb2-f2801f1b9fd1",
            item_name: "chillie chowmine",
            price: 210,
            item_type: "NON_VEG"
          }
        ]
      }
    ]
  }
};

const apiGet = (url, mock) => {
  if (ENV === DEV_ENV) {
    return new Promise(res => {
      return res(mock);
    });
  }
  return fetch(BASE + url, {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-cache"
    }
  }).then(resStream => resStream.json());
};

const apiPost = (url, data) =>
  fetch(url, {
    method: "POST",
    body: JSON.stringify(data)
  });

export const get = {
  findRestaurentByName: name => {
    return apiGet(`/restaurant/name/${name}`, MOCKS.restaurantsByName);
  },
  allPaymentMethods: () => apiGet("/payment"),
  allRestaurants: () => apiGet("/restaurant", MOCKS.allRestaurants),
  restaurantDetails: id => apiGet("/restaurant/" + id, MOCKS.restaurantDetails)
};

export const post = {
  login: data => {
    return apiPost("customer/login");
  },
  signup: data => {
    return apiPost(`${BASE}/customer/signup`, data);
  }
};
