import { useRouter } from 'next/dist/client/router'
import React ,{useState} from 'react'
import { useSelector } from 'react-redux'
import { makeStyles } from '@mui/styles';
import { FiPlus, FiMinus } from "react-icons/fi";
import { Button, useMediaQuery } from '@mui/material';

const styles=makeStyles({
  detailsLeft:{
       fontSize:"14px",  
},
detailsRight:{
       alignText:"flex-end"
  },
    btns: { display: "flex", margin: "5vh 5vw", cursor: "pointer" },
    btnSpan: {
      display: "flex",
      flexWrap: "noWrap",
      width: "100%",
    },
    btnPlus: {
      "&:hover": { backgroundColor: "khaki" },
      border: "1px solid black",
      height: "50px",
      width: "35px",
    },
    plusIcon: {
      height: "100%",
      width: "100%",
      display: "flex",
      flexGrow: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    btnNum: {
      textAlign: "center",
      "&:hover": { backgroundColor: "khaki" },
      borderTop: "1px solid black",
      borderBottom: "1px solid black",
      height: "50px",
      width: "35px",
    },
    btn: {
      height: "100%",
      width: "100%",
      display: "flex",
      flexWrap: "noWrap",
      justifyContent: "center",
      alignItems: "center",
    },
    cartBtn: {
      backgroundColor: "#19242f",
      width: "150%",
      height: "50px",
      marginLeft: "10px",
      borderRadius: "0",
    },
})

function Index() {
    const mobile = useMediaQuery('(max-width : 600px)')
    console.log(mobile)
    const classes = styles()

    const router = useRouter()
    const ids =router.query.id

    const {venues} = useSelector((state)=>state.HotelReducers)
    const filter = venues.filter(val=>val.id == ids)

    const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(filter.price);
  const [discount, setDiscount] = useState(filter.discount);

  const increment = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    setDiscount((prevDiscount) => prevDiscount + filter.discount);
    setPrice((prevPrice) => prevPrice + filter.price);
  };

  const decrement = () => {
    setQuantity((prevQuantity) => (prevQuantity <= 1 ? 1 : prevQuantity - 1));
    setPrice((prevPrice) =>
      prevPrice <= filter.price ? filter.price : prevPrice - filter.price
    );
    setDiscount((prevDiscount) =>
      prevDiscount <= filter.discount
        ? filter.discount
        : prevDiscount - filter.discount
    );
  };

  function AddCart() {
    dispatch({
      type: "ADD_CART",
      payload: { product, quantity, discount, price },
    });
    alert("new item added to your cart");
  }
    return (
        <div >
            {filter.map((val,ind)=>{
                return(
                    <div key={ind} style={{display:mobile? "block":"flex",flexDirection:"row", padding:"4rem"}}>
                        <div style={{width : mobile? "100%":"50%"}}>
                        <img src={`/img/hotels/${val.image}.jpeg`} height="100%" width="100%" alt="img" />
                        </div>

                        <div style={{width:"50%", backgroundColor:"silver"}}>
                        <h2 style={{textAlign:"center", fontFamily:"Open Sans", letterSpacing:".1px",transform:"scale(1.8, 1.4)"}}>
                            {val.name}
                        </h2>

                        <div style={{justifyContent:"flex-end", display:"flex", width:"100%",}}>
                        <div style={{width:"40%"}}>
                            <p style={{display:"flex",justifyContent:"space-between"}}> 
                                <span className={classes.detailsLeft}>per night: </span>  
                                <span className={classes.detailsRight} >${val.discount()}</span> 
                            </p>
                            <p style={{display:"flex",justifyContent:"space-between"}}> 
                                <span className={classes.detailsLeft}>  Free cancelation before </span>
                                <span className={classes.detailsRight}> 24 hours</span>  </p>
                        </div>
                        </div>
          
          <span className={classes.btns} style={{width : mobile? "100%":"50%"}}>
            <span>
              <span className={classes.btnSpan}>
                <span className={classes.btnPlus}>
                  <span className={classes.plusIcon} onClick={decrement}>
                    <FiMinus />
                  </span>
                </span>
                <span className={classes.btnNum}>
                  <span className={classes.btn}>{quantity}</span>
                </span>
                <span className={classes.btnPlus}>
                  <span className={classes.plusIcon} onClick={increment}>
                    <FiPlus />
                  </span>
                </span>

                <span>
                  <Button className={classes.cartBtn} onClick={AddCart}>
                    Book Now
                  </Button>
                </span>
              </span>
            </span>
          </span>
                        </div> 
                    </div>
                )
            })}
        </div>
    )
}

export default Index
