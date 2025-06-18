const WELCOME_CONTENTS = [
  {
      image: 'logo1',
      title: 'Shoperinto',
      content:'',
  },
  {
      image: 'i2',
      title: 'Shopping Bag',
      content: 'Add products to your shopping cart, and check them out later.',
      },
  {
      image: 'i3',
      title: 'Quick Search',
      content: 'Quickly find the products you like the most.',
      },
      {
      image: 'i4',
      title: 'Wishlist',
      content: 'Build a wishlist with your favourite products to buy them later',
      },
      {
      image: 'i5',
      title: 'Order Tracking',
      content: 'Monitor your orders and get updates when something changes.',
      },
      {
      image: 'i6',
      title: 'Notification',
      content: 'Monitor your orders and get updates when something changes.',
      },
      {
      image: 'i7',
      title: 'Stripe Payments',
      content: 'We support all payment options, thanks to Stripe.',
      },
      {
      image: 'i8',
      title: 'Apple Pay',
      content: 'Pay with a single click with Apple Pay.',
      },
]

const API_BASE_URL = "http://192.168.199.229:3001/"

const CATEGORIES =[{
    name: 'CLOTHING',
    img:'clothcat'
  },
  {
    name: 'ACCESSORIES',
    img:'acce'
  },
  {
    name: 'SHOES',
    img:'shoes'
  },
]

const Products = [
  {id:1,
    name: 'Black Long Dress',
    img: 'p1',
    price: 1299,
  },
  {id:2,
    name: 'Red Floral Summer Dress',
    img: 'p2',
    price: 999,
  },
  {id:3,
    name: 'Blue Denim Shirt Dress',
    img: 'p3',
    price: 1199,
  },
  {id:4,
    name: 'Green Sleeveless Maxi Dress',
    img: 'p1',
    price: 1399,
  },
  {id:5,
    name: 'White Lace Midi Dress',
    img: 'p3',
    price: 1499,
  },
  {id:6,
    name: 'Yellow Off-Shoulder Dress',
    img: 'p2',
    price: 1099,
  },
  {id:7,
    name: 'Pink Ruffle Mini Dress',
    img: 'p1',
    price: 899,
  },
  {id:8,
    name: 'Beige Bodycon Dress',
    img: 'p3',
    price: 1599,
  },
  {id:9,
    name: 'Navy Blue Wrap Dress',
    img: 'p2',
    price: 1299,
  },
  {id:10,
    name: 'Maroon Velvet Party Dress',
    img: 'p1',
    price: 1699,
  }
];


const CATE =[{
    name: 'Cook Like A Chef!',
    desc: 'Discover recipes tailored to your cravings or dietary needs',
    img: 'w1',
    route: 'CookLikeAChef',
  },
  {
    name: 'What to Cook?',
    desc: 'Discover recipes using only what\'s in your pantry',
    img: 'whatscooking',
    route: 'WhatToCook',
  },
  {
    name: 'Smart Meal Planner',
    desc: 'Plan your meals with personalized suggestions',
    img: 'mealplan',
    route: 'SmartMealPlanner',
  },
  {
    name: 'Pantry Pro',
    desc: 'Organize your food inventory and manage your list',
    img: 'cartcomp',
    route: 'PantryPro',
  },
  {
    name: 'Cart Companion',
    desc: 'Manage your shopping list and be ready for grocery runs',
    img: 'pantrypro',
    route: 'CartCompanion',
  },
]



export default {WELCOME_CONTENTS,CATEGORIES,API_BASE_URL,Products}