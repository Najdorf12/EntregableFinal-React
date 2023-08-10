import { useDispatch } from "react-redux"
import { setisLoading } from "../store/slices/isLoading"
import {useState, useEffect } from "react"
import axios from "axios"
import getConfig from "../utils/getConfig"


const Purchases = () =>{

   const dispatch = useDispatch();
   const [purchases,setPurchases] = useState([]);
   console.log(purchases)
   
   useEffect(()=>{
      dispatch(setisLoading(true))
      axios
      .get("https://e-commerce-api-v2.academlo.tech/api/v1/purchases",getConfig())
      .then(resp => {setPurchases(resp.data);
      console.log(resp.data)})
      .catch(error => console.error(error))
      .finally(dispatch(setisLoading(false)))
   },[])
   

   return(
    <main className="purchases">
    <h1>Purchases</h1>
    <div className="purchases_products">
    <ul>
      {
         purchases?.map(item =>(
            <li style={{listStyle:"none"}} key={item.id}>
               <img style={{width:"12rem",height:"14rem",objectFit:"cover"}} src={item.product?.images[0].url} alt="" />
               <p>{item.title}</p>
            </li>
         ))
      }
    </ul>
    </div>
   
    </main>
   )

}


export default Purchases