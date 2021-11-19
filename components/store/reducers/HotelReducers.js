const initialState = {
    venue:[
        {
            id: 1,
            category: "Men wear",
            size: "8",
            color: "green",
            name: "Tree Dasher",
            image: "rings",
            quality: "Daily Running Shoe",
            price: 60,
            discount: 60 - (2 / 100) * 60,
            disVal: 2,
            quantity: 10,
          },
          {
            id: 2,
            category: "Women wear",
            size: "9",
            color: "grey",
            name: "bag",
            image: "bag1",
            quality: "Light and Breezy Sneaker",
            price: 80,
            discount: 80 - (2 / 100) * 80,
            disVal: 2,
            quantity: 5,
          },
          {
            id: 3,
            category: "Men shoes",
            size: "8",
            color: "grey",
            name: "Wool Runner ",
            image: "shoes",
            quality: "Cozy Sneaker",
            price: 400,
            discount: 400 - (2 / 100) * 400,
            disVal: 2,
            quantity: 6,
          },
          {
            id: 4,
            category: "Women wear",
            size: "8",
            color: "red",
            name: "black dotted",
            image: "hijab",
            quality: "Daily Running Shoe",
            price: 350,
            discount: 350 - (2 / 100) * 350,
            disVal: 2,
            quantity: 4,
          },
          {
            id: 5,
            category: "Men wear",
            size: "6",
            color: "green",
            name: "Wool Hoodie",
            image: "watch",
            quality: "Light and Breezy Sneaker",
            price: 100,
            discount: 100 - (2 / 100) * 100,
            disVal: 2,
            quantity: 1,
          },
          {
            id: 6,
            category: "women shoes",
            size: "9",
            color: "blue",
            name: "Wool Cardi - Long",
            image: "white",
            quality: "Cozy Sneaker",
            price: 90,
            discount: 90 - (2 / 100) * 90,
            disVal: 2,
            quantity: 4,
          },
          {
            id: 7,
            category: "Men wear",
            size: "8",
            color: "pink",
            name: "Trino™ Boxer Brief",
            image: "rings",
            quality: "Daily Running Shoe",
            price: 4000,
            discount: 4000 - (2 / 100) * 4000,
            disVal: 2,
            quantity: 6,
          },
          {
            id: 8,
            category: "Women wear",
            size: "8",
            color: "yellow",
            name: "wool ",
            image: "heels",
            quality: "Light and Breezy Sneaker",
            price: 550,
            discount: 550 - (2 / 100) * 550,
            disVal: 2,
            quantity: 3,
          },
          {
            id: 9,
            category: "Men wear",
            size: "10",
            color: "green",
            name: "Trino™ Brief",
            image: "rings",
            quality: "Cozy Sneaker",
            price: 40,
            discount: 40 - (2 / 100) * 40,
            disVal: 2,
            quantity: 1,
          }
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
    

}

export default function HotelReducers(state = initialState, action){
    switch(action.type){
        case "INC":{
            return {
                ...state
            }
        }
    }
}