import { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useSelector,useDispatch } from 'react-redux';
import { getProductsCartThunk, updateProductsCartThunk,purchaseCartThunk } from '../store/slices/cart';


function SideBarCart({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getProductsCartThunk())
  },[])
 
 
  const incrementQuantity = productSelected => {
    
    dispatch(updateProductsCartThunk(productSelected.id, productSelected.quantity + 1))
  }
  const decrementQuantity = productSelected => {
    
      dispatch(updateProductsCartThunk(productSelected.id, productSelected.quantity - 1))    
  }

  return (
    <>
      <Button style={{   
    display: "block",
    padding: "var(--bs-nav-link-padding-y) var(--bs-nav-link-padding-x)",
    paddingRight: "var(--bs-navbar-nav-link-padding-x)",
    paddingLeft: "var(--bs-navbar-nav-link-padding-x)",
    fontSize: "var(--bs-nav-link-font-size)",
    fontWeight: "var(--bs-nav-link-font-weight)",
    color: "var(--bs-nav-link-color)",
    textDecoration:"none",
    background:"0 0",
    border: "0",
    transition:" color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out",
    borderRight: "1px solid rgba(0,0,0,.2)",
    borderLeft: "1px solid rgba(255,255,255,.1)"
     }}
     onClick={toggleShow} className="me-2">
      <i className='bx bx-cart'></i>
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Carrito :</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
         <div className='cart_container'>
         <ul>
            { cart?.map(product => (
              <li key={product.product?.id}>
                <div className='cart_btn-info'>
              <Button onClick={()=> decrementQuantity(product)}> - </Button>
                 <p>{product.quantity}</p> 
              <Button onClick={()=> incrementQuantity(product)}> + </Button>
              </div>
                <div className='cart_img'>
                <img src={product.product?.images[0]?.url} alt="" />
                </div>
                <div className='cart_info'>
                <p>{product.product?.title}</p>
                <p>${Math.floor(product.product?.price)}</p>
                </div>
              </li>
            ))
         }
         </ul>
         </div>
         
         <Button style={{marginTop:"10rem", marginLeft:"3rem", border:"none", filter:"drop-shadow(2px 2px 2px #b10647)", color:"whitesmoke",width:"80%" }} 
         onClick={()=>dispatch(purchaseCartThunk())}>COMPRAR</Button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
export default SideBarCart