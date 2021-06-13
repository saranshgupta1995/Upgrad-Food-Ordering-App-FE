export const LOGIN_MODAL_TABS = [
  {
    name: "Login",
    fields: [
      {
        label: "Contact No",
        type: "text",
        id: "contact",
        required: true
      },
      {
        label: "Password",
        type: "password",
        id: "password",
        required: true
      }
    ],
    buttonText: "Login"
  },
  {
    name: "Signup",
    fields: [
      {
        label: "First Name",
        type: "text",
        id: "first-name",
        required: true
      },
      {
        label: "Last Name",
        type: "text",
        id: "last-name",
        required: true
      },
      {
        label: "Email",
        type: "text",
        id: "email",
        required: true
      },
      {
        label: "Contact No",
        type: "text",
        id: "contact"
      },
      {
        label: "Password",
        type: "password",
        id: "password"
      }
    ],
    buttonText: "Login"
  }
];

export const MOCKS = {
  allRestaurants: [
    {
      name: "Pikachu",
      img: "hjghvfcbdv",
      tags: ["abc", "bcd", "cde", "efg"],
      cost: 1000,
      rating: {
        count: 2090,
        average: 2.2
      }
    },
    {
      name: "Pikachu2",
      img: "hjghvfcbdv",
      tags: ["abc", "bcd", "cde", "efg"],
      cost: 1000,
      rating: {
        count: 2001,
        average: 2.1
      }
    },
    {
      name: "Raichu",
      img: "hjghvfcbdv",
      tags: ["abc", "bcd", "cde", "efg"],
      cost: 1000,
      rating: {
        count: 1000,
        average: 2.4
      }
    },
    {
      name: "Pichu",
      img: "hjghvfcbdv",
      tags: ["abc", "bcd", "cde", "efg"],
      cost: 1000,
      rating: {
        count: 2000,
        average: 2.7
      }
    },
    {
      name: "Pikachu pika pika",
      img: "hjghvfcbdv",
      tags: ["abc", "bcd", "cde", "efg"],
      cost: 1000,
      rating: {
        count: 2000,
        average: 2.7
      }
    }
  ].map(x => {
    x.id = x.name;
    return x;
  })
};
