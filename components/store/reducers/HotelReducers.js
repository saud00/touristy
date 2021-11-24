const initialState = {
    venues : [

        {
            id: 1,
            location:"Istanbul, Turkey",
            category: "Men wear",
            size: "8",
            color: "green",
            name: "Tree Dasher",
            image: "id1",
            quality: "Daily Running Shoe",
            price: 60,
            discount:function(){
                return this.price - (2 / 100) * this.price
            },
            disVal: 2,
            quantity: 10,
          },
          {
            id: 2,
            location:"Istanbul, Turkey",
            category: "Women wear",
            size: "9",
            color: "grey",
            name: "bag",
            image: "id2",
            quality: "Light and Breezy Sneaker",
            price: 80,
            discount: function(){
                return this.price - (2 / 100) * this.price
            },
            disVal: 2,
            quantity: 5,
          },
          {
            id: 3,
            location:"Istanbul, Turkey",
            category: "Men shoes",
            size: "8",
            color: "grey",
            name: "Wool Runner ",
            image: "id3",
            quality: "Cozy Sneaker",
            price: 400,
            discount: function(){
                return this.price - (2 / 100) * this.price
            },
            disVal: 2,
            quantity: 6,
          },
          {
            id: 4,
            location:"Istanbul, Turkey",
            category: "Women wear",
            size: "8",
            color: "red",
            name: "black dotted",
            image: "id4",
            quality: "Daily Running Shoe",
            price: 350,
            discount: function(){
                return this.price - (2 / 100) * this.price
            },
            disVal: 2,
            quantity: 4,
          },
          {
            id: 5,
            location:"Istanbul, Turkey",
            category: "Men wear",
            size: "6",
            color: "green",
            name: "Wool Hoodie",
            image: "id5",
            quality: "Light and Breezy Sneaker",
            price: 100,
            discount: function(){
                return this.price - (2 / 100) * this.price
            },
            disVal: 2,
            quantity: 1,
          },
          {
            id: 6,
            location:"Istanbul, Turkey",
            category: "women shoes",
            size: "9",
            color: "blue",
            name: "Wool Cardi - Long",
            image: "id6",
            quality: "Cozy Sneaker",
            price: 90,
            discount: function(){
                return this.price - (2 / 100) * this.price
            },
            disVal: 2,
            quantity: 4,
          },
          {
            id: 7,
            location:"Istanbul, Turkey",
            category: "Men wear",
            size: "8",
            color: "pink",
            name: "Trino™ Boxer Brief",
            image: "id7",
            quality: "Daily Running Shoe",
            price: 4000,
            discount: function(){
                return this.price - (2 / 100) * this.price
            },
            disVal: 2,
            quantity: 6,
          },
        // ,{
        // id:1,     
        // name:"Palazzo Avino",
        // location:"AMALFI COAST, ITALY",
        // Price:"Price per night from £84,004.91",
        // Trooms:"Forty-three, 10 of which are suites.",
        // Prices:"Double rooms from £84004.90 (€100,009), including tax at 10 per cent. Please note the hotel charges an additional local city tax of €5.00 per person per night on check-out.",
        // About:"Stepped gardens, several terraced areas (including one on the roof), free WiFi throughout and laundry service. In rooms: desk, flatscreen TV, iPod dock, minibar, air-conditioning, and free bottled water. Some rooms have terraces with sea views."
        // }
    ],

};


function HotelReducers(state = initialState, action){
    switch(action.type){
        case "INC":{
            const {discount, rooms}= action.payload
            console.log(discount, rooms)
            return{
                ...state
            }
        }
        default:{
            return state
        }
    }
}

export default HotelReducers