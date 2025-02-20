import { configureStore, createSlice } from "@reduxjs/toolkit";
// import store from "./redux/store.js";

import { act } from "react";


     let productslice=createSlice({
        name:"Products",
     initialState:{
      Veg:[{name:"Carrot",price:100,image:"carrot2.jpg"},
        {name:"Tomato",price:150,image:"tomato.jpg"},
        {name:"Potato",price:70,image:"potato.jpg"},
        {name:"califlower",price:100,image:"califlower.jpg"},
        {name:"Ladyfinger",price:80,image:"ladyfinger.jpg"},
        {name:"Beans",price:90,image:"beans.jpg"},
         {name:"BooteleGuard",price:90,image:"bottele.jpg"},
        {name:"BeetRoot",price:210,image:"beetroot.jpg"},
        {name:"Lemon",price:60,image:"lemon.jpg"},
        {name:"Garlic",price:50,image:"garlic.jpg"},
        {name:"Banana",price:60,image:"banana.jpg"},
        {name:"BitterGuard",price:70,image:"kakara.jpg"},
        {name:"Ginger",price:60,image:"ginger.jpg"},
        {name:"Cabbbage",price:80,image:"cabbage.jpg"},
         {name:"Radish",price:90,image:"mullangi.jpg"},
        {name:"Capsicum",price:80,image:"cpsicum.jpg"},
        {name:"Brinjal",price:70,image:"brinjal.jpg"},
        {name:"Chilli",price:60,image:"chilli.jpg"},
        {name:"Ridge guard",price:80,image:"beerakaya.jpg"},
        {name:"Brocill",price:200,image:"brocill.jpg"}
      ],
        NonVeg:
        [{name:"Apple",price:200,image:"fruits/apple.jpg"},
          {name:"Guva",price:150,image:"fruits/guva.jpg"},
          {name:"Cherry",price:190,image:"fruits/cherry.jpg"},
          {name:"Grapes",price:180,image:"fruits/grapes.jpg"},
          {name:"Bluberry",price:210,image:"fruits/blueberry.jpg"},
          {name:"Mango",price:150,image:"fruits/mango.jpg"},
           {name:"Orange",price:180,image:"fruits/oronge.jpg"},
          {name:"Papaya",price:150,image:"fruits/papaya.jpg"},
          {name:"Pomagranet",price:220,image:"fruits/pomagranet.jpg"},
          {name:"Sithapal",price:230,image:"fruits/sithapal.jpg"},
          {name:"Kiwi",price:250,image:"fruits/kiwi.jpg"},
          {name:"Jack fruit",price:300,image:"fruits/panasa.jpg"},
          {name:"Strawberry",price:320,image:"fruits/straberry.jpg"},
          {name:"Watermelon",price:100,image:"fruits/watermelon.jpg"},
           {name:"Dragon fruit",price:240,image:"fruits/dragon.jpg"},
          {name:"Sapota",price:130,image:"fruits/sapota.jpg"},
          {name:"Pineapple",price:190,image:"fruits/pineapple.jpg"},
          {name:"Amla",price:100,image:"fruits/amla.jpg"},
          {name:"Avacado",price:200,image:"fruits/avacado.jpg"},
          {name:"litchi",price:180,image:"fruits/ilachi.jpg"}],
         Milk:
         [{name:"Buffalo milk",price:60,image:"milk/milk.webp"},
          {name:"Curd",price:30,image:"milk/curd.webp"},
          {name:"Cow milk",price:50,image:"milk/cowmilk.webp"},
          {name:"Panner",price:80,image:"milk/panner.jpg"},
          {name:"Buttter",price:80,image:"milk/amul butter.jpg"},
          {name:"Cream",price:70,image:"milk/amul cream.jpg"},
          {name:"lassi",price:50,image:"milk/lassi.jpg"},
          {name:"Butter milk",price:40,image:"milk/bu.webp"},
          {name:"ghee",price:200,image:"milk/ghee.webp"},
          {name:"Milk cake ice creame",price:190,image:"milk/milkice.jpeg"} ,
          {name:"cheese",price:90,image:"milk/cheese.webp"},
          {name:"yogurt",price:110,image:"milk/yogurt.webp"},
          {name:"protien shake",price:80,image:"milk/protienshake.webp"},
          {name:"milk shake",price:80,image:"milk/milkshake.webp"},
          {name:" Milk Bread",price:60,image:"milk/bread.webp"},
          {name:"amul ice creame",price:90,image:"milk/amul icecreme.jpg"},
          {name:"Rose milk",price:40,image:"milk/rosemilk.jpg"},
          {name:"badam milk",price:40,image:"milk/badam.webp"},
          {name:" Dood peda",price:180,image:"milk/kova.jpeg"},       
           {name:"Rasagulla",price:200,image:"milk/rasagulla.jpeg"}
        ],
         

     },
     reducers:{}
}
)
 const cartSlice=createSlice(
   {
      name:"Cart",
      initialState:[],
      reducers: {
   
         addToCart: (state, action) => {
           const item = state.find(item => item.name === action.payload.name);
           if (item) {
             item.quantity += 1;
           } else {
             state.push({ ...action.payload, quantity: 1 });
           }
         },
    
         increment: (state, action) => {
           const item = state.find(item => item.name === action.payload.name);
           if (item) {
             item.quantity += 1;
           }
         },

          decrement: (state, action) => {
            const item = state.find(item => item.name === action.payload.name);
            if (item&&item.quantity>1)
                {
              item.quantity -= 1;
            }
            else{
              return state.filter(item => item.name !== action.payload.name);
            }
          },
          remove: (state, action) => {
           return state.filter(item => item.name !== action.payload.name);
            
          },
          clearCart: () => []
        
        }
     });
      let purchaseslice= createSlice(
      {
        name:"PurchaseDetails",
        initialState:[],
        reducers:{
        purchasedetails:(state,action)=>
        {
          state.push(action.payload);
        }
       
        }
        
      }
    
     );
     let authslice = createSlice({
      name: "auth",
      initialState: {
        isAuthenticated: localStorage.getItem("username") ? true : false,
        user: localStorage.getItem("username") || "",
      },
      reducers: {
        login: (state, action) => {
          state.isAuthenticated = true;
          state.user= action.payload;
          localStorage.setItem("username", action.payload);
        },
        logout: (state) => {
          state.isAuthenticated = false;
          state.user= ""; 
          localStorage.removeItem("username");
        },
      },
    });
    

     

 const store=configureStore(
   {
    
    reducer:{Products:productslice.reducer,
            Cart:cartSlice.reducer,
            PurchaseDetails:purchaseslice.reducer,
            auth:authslice.reducer},

    }
)

export default store;
export const{addToCart,increment,decrement,remove,clearCart}=cartSlice.actions;
export const{purchasedetails}=purchaseslice.actions;
export const{login,logout}=authslice.actions;
