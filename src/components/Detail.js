// import React from "react";
// import { useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import axios from 'axios';

// import Footer from "./include/Footer";

// const Detail = () => {
//     const dispatch = useDispatch();
//     const id = useParams();
//     useEffect(() => {
//         dispatch(getproductdetails(id))
//     },[dispatch,id])
//     const getproductdetails = () => async(dispatch) =>{
//         try {
//             dispatch({type:GET_PRODUCT_DETAILS_REQUEST})
//             const { data } = await axios.get(`${URL}/products/${id}`)
//             dispatch({type:GET_PRODUCT_DETAILS_SUCCESS, payload:data})
//         } catch (error) {
//             dispatch({type:GET_PRODUCT_DETAILS_FAIL, payload:error.message})
//         }
//     }
//     const GET_PRODUCT_DETAILS_REQUEST = 'getproductdetailrequest';
//     const GET_PRODUCT_DETAILS_SUCCESS = 'getproductdetailsuccess';
//     const GET_PRODUCT_DETAILS_FAIL = 'getproductdetailfail';
//     const GET_PRODUCT_DETAILS_RESET = 'getproductdetailreset';
//   return (
//     <div className="main">
//         Hello
//       <Footer/>
//     </div>
//   );
// };

// export default Detail;
