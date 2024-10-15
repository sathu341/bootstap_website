import { Suspense,lazy } from "react";
import UserHeader from "./userheader";
import { Route, Routes } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import Slide from "./slide";
import Usernav from "./usernav";

export default function UserHome(){
    const Cart=lazy(()=> import('./cart'))
    return(
        <>
         <Usernav/>
        
       <Slide/>
        <div>
             <Suspense fallback={ 
      <div style={{width:'60%',margin:'0 auto', display:'flex',justifyContent:'center'}}>
      <Spinner   animation="border" variant='danger'/>
      </div>
      }>
        <Routes>
          <Route path="/cart" element={<Cart/>}/> 
        
        </Routes>
    </Suspense>
             

        </div>
        
        </>
    )
}