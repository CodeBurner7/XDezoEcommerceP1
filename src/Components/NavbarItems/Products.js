// import React,{useState} from "react";
// import styled from "styled-components";
// import { ProductApi } from "../Api/ProductApi";


// const Products = () => {
//   const [api,setApi]=useState(ProductApi);
//   const Wrapper=styled.section`
//   `;
//   return (
//     <>
//     <Wrapper>
//     {api.map((curElem,index)=>{
//       return (
//       <div key={curElem.id} className='productmap_div'>
//         <figure>
//       <img src={curElem.image} alt="imagess" />
//       <figcaption className="caption">{curElem.category}</figcaption>
//       </figure>
//       <h1>{curElem.name}</h1>

//     </div>
//       )
//      })}
//      </Wrapper>
//      </>
//   )

// };

// export default Products;






// import React, { useState } from "react";
// import styled from "styled-components";
// import { ProductApi } from "../Api/ProductApi";
// import { RiListView } from "react-icons/ri";
// import { MdGridView } from "react-icons/md";

// const Products = () => {
//   const [api, setApi] = useState(ProductApi);

//   const Wrapper = styled.section`
//     display: flex;
//     flex-direction: column;
//     gap: 20px;

//     .sortsection {
//       display: flex;
//       justify-content: space-between;
//       align-items: center;
//       flex-wrap: wrap;
//       gap: 20px;
//     }

//     .product_list {
//       display: flex;
//       flex-wrap: wrap;
//       gap: 20px;
//     }

//     .product_list_lists {
//       flex: 1 1 200px;
//       max-width: 300px;
//       border: 1px solid #ccc;
//       padding: 20px;
//       border-radius: 8px;
//     }

//     .product_list_lists img {
//       width: 100%;
//       max-width: 100%;
//       height: auto;
//       border-radius: 8px;
//     }

//     .caption {
//       margin-top: 10px;
//       font-size: 14px;
//     }

//     h1 {
//       font-size: 18px;
//       margin: 10px 0;
//     }

//     p {
//       font-size: 16px;
//       color: #333;
//     }

//     input.search {
//       padding: 8px 10px;
//       border-radius: 4px;
//       border: 1px solid #ccc;
//     }

//     @media screen and (max-width: 768px) {
//       .product_list_lists {
//         flex-basis: calc(50% - 20px);
//       }
//     }

//     @media screen and (max-width: 480px) {
//       .product_list_lists {
//         flex-basis: 100%;
//       }
//     }
//   `;
//   return (
//     <>
//       <Wrapper>
//       <div className="sortsection">
//         <p>{`${api.length} Products Available`}</p>
//         <div className="view_category">
//         <RiListView />
//         <MdGridView />
//         </div>
//         <input type="text" name="search" className="search" placeholder="Search..."/>
//       </div>

//         <div className="product_list">
//         {api.map((curElem) => (
//           <div key={curElem.id} className="product_list_lists">
//             <figure>
//               <img src={curElem.image} alt="product" />
//               <figcaption className="caption">{curElem.category}</figcaption>
//             </figure>
//             <h1>{curElem.name}</h1>
//             <p>{curElem.price}</p>
//           </div>
//         ))}
//         </div>

//       </Wrapper>
//     </>
//   );
// };

// export default Products;



// import React, { useState } from "react";
// import styled from "styled-components";
// import { ProductApi } from "../Api/ProductApi";
// import { RiListView } from "react-icons/ri";
// import { MdGridView } from "react-icons/md";

// const Products = () => {
//   const [api, setApi] = useState(ProductApi);
//   const [searchText, setSearchText] = useState("");
//   const [list, setList] = useState(false);

// //   const Wrapper = styled.section`
// //   display: flex;
// //   flex-direction: column;
// //   gap: 20px;

// //   .sortsection {
// //     display: flex;
// //     justify-content: center;
// //     align-items: center;
// //     gap: 20px;
// //   }

// //   .view_category {
// //     display: flex;
// //     gap: 10px;
// //   }

// //   .view_category svg {
// //     cursor: pointer;
// //     font-size: 24px;
// //   }

// //   form {
// //     margin-top: 20px;
// //   }

// //   input.search {
// //     padding: 8px 10px;
// //     border-radius: 4px;
// //     border: 1px solid #ccc;
// //     width: 100%;
// //     max-width: 300px;
// //   }

// //   .product_list {
// //     display: flex;
// //     flex-direction: column;
// //     gap: 20px;
// //   }

// //   .product_list_lists {
// //     display: grid;
// //     grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
// //     gap: 20px;
// //   }

// //   .product_list_lists figure {
// //     margin: 0;
// //     padding: 0;
// //     overflow: hidden;
// //   }

// //   .product_list_lists img {
// //     width: 100%;
// //     height: auto;
// //     border-radius: 8px;
// //   }

// //   .product_list_lists h1,
// //   .product_list_lists p {
// //     margin: 0;
// //   }

// //   .product_list_lists .caption {
// //     font-size: 14px;
// //     margin-top: 5px;
// //   }

// //   @media screen and (max-width: 768px) {
// //     .product_list_lists {
// //       flex-basis: calc(50% - 20px);
// //     }
// //   }

// //   @media screen and (max-width: 480px) {
// //     .product_list_lists {
// //       flex-basis: 100%;
// //     }
// //   }
// // `;

//   const Wrapper = styled.section`
//     display: flex;
//     flex-direction: column;
//     gap: 20px;

//     .sortsection {
//       display: flex;
//       justify-content: space-between;
//       align-items: center;
//       flex-wrap: wrap;
//       gap: 20px;
//     }

//     .product_list {
//       display: flex;
//       flex-wrap: wrap;
//       gap: 20px;
//     }

//     .product_list_lists {
//       flex: 1 1 200px;
//       max-width: 300px;
//       border: 1px solid #ccc;
//       padding: 20px;
//       border-radius: 8px;
//     }

//     .product_list_lists img {
//       width: 100%;
//       max-width: 100%;
//       height: auto;
//       border-radius: 8px;
//     }

//     .caption {
//       margin-top: 10px;
//       font-size: 14px;
//     }

//     h1 {
//       font-size: 18px;
//       margin: 10px 0;
//     }

//     p {
//       font-size: 16px;
//       color: #333;
//     }

//     input.search {
//       padding: 8px 10px;
//       border-radius: 4px;
//       border: 1px solid #ccc;
//     }

//     @media screen and (max-width: 768px) {
//       .product_list_lists {
//         flex-basis: calc(50% - 20px);
//       }
//     }

//     @media screen and (max-width: 480px) {
//       .product_list_lists {
//         flex-basis: 100%;
//       }
//     }
//   `;
//   const updatefiltervalue = (e) => {
//     setSearchText(e.target.value);
//   };

//   const filteredProducts = api.filter((curElem) =>
//     curElem.name.toLowerCase().includes(searchText.toLowerCase())
//   );

//   const setListView = () => {
//     setList(true);
//   };

//   const setGridView = () => {
//     setList(false);
//   };

//   return (
//     <>
//       <Wrapper>
//         <div className="sortsection">
//           <p>{`${filteredProducts.length} Products Available`}</p>
//           <div className="view_category">
//             <RiListView onClick={setListView} />
//             <MdGridView onClick={setGridView} />
//           </div>
//           <form onSubmit={(e) => e.preventDefault()}>
//             <input
//               type="text"
//               name="text"
//               value={searchText}
//               onChange={updatefiltervalue}
//               placeholder="Search for items"
//             />
//           </form>
//         </div>

//         <div className={list ? "product_list" : "product_list_lists"}>
//           {filteredProducts.map((curElem) => (
//             <div key={curElem.id}>
//               <figure>
//                 <img src={curElem.image} alt="product" />
//                 <figcaption className="caption">{curElem.category}</figcaption>
//               </figure>
//               <h1>{curElem.name}</h1>
//               <p>{curElem.price}</p>
//             </div>
//           ))}
//         </div>
//       </Wrapper>
//     </>
//   );
// };

// export default Products;










// import React, { useState,useRef } from "react";
// import styled from "styled-components";
// import { ProductApi } from "../Api/ProductApi";
// import { RiListView } from "react-icons/ri";
// import { MdGridView } from "react-icons/md";
// import {NavLink} from "react-router-dom";


// const Products = () => {
//   const [api, setApi] = useState(ProductApi);
//   const [searchText, setSearchText] = useState("");
//   const[list,setlist]=useState(false);
//   // const inputRef = useRef(null); // Ref for input element


//   const Wrapper = styled.section`
//     display: flex;
//     flex-direction: column;
//     gap: 20px;

//     .sortsection {
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       gap: 20px;
//     }

//     .product_list {
//       display: flex;
//       flex-wrap: wrap;
//       gap: 20px;
//       // justify-content:center;
//     }
//     .listview_list{
//       display:block;
//     }

//     // .product_list_lists {
//     //   display: grid;
//     //   grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
//     //   gap: 20px; /* Adjust the gap as needed */
//     // }

//     .product_list_lists {
//       width:300px;
//       height:350px;
//       border: 1px solid #ccc;
//       padding: 20px;
//       border-radius: 8px;
//       transition: transform 0.3s ease;
//       cursor: pointer;
//     }

//     .product_list_lists:hover {
//       transform: translateY(-5px);
//     }

//     .product_list_lists img {
//       width: 100%;
//       max-width: 100%;
//       min-width: 100%;
//       height:250px;
//       border-radius: 8px;
//     }

//     .caption {
//       margin-top: 10px;
//       font-size: 14px;
//     }

//     h1 {
//       font-size: 18px;
//       margin: 10px 0;
//     }

//     p {
//       font-size: 16px;
//       color: #333;
//     }

//     input.search {
//       padding: 8px 10px;
//       border-radius: 4px;
//       border: 1px solid #ccc;
//     }

//   `;

//   // Function to filter products based on search text
//   const updatefiltervalue = (e) => {
//     setSearchText(e.target.value);
//     // inputRef.current.focus(); // Focus on input after each keypress

//   };

//   // Filtered products based on search text
//   const filteredProducts = api.filter((curElem) =>
//     curElem.name.toLowerCase().includes(searchText.toLowerCase())
//   );
  
//   //for deciding list and grid view
//   const setlistview=()=>{
//     setlist(true);
//   }
//   const setgridview=()=>{
//     setlist(false);
//   }

//   return (
//     <>
//       <Wrapper>
//         <div className="sortsection">
//           <p>{`${filteredProducts.length} Products Available`}</p>
//           <div className="view_category">
//             <RiListView  onClick={setlistview}/>
//             <MdGridView  onClick={setgridview}/>
//           </div>
//           <form onSubmit={(e)=>{e.preventDefault()}}>
//       <input type="text"  
//        name="text" value={searchText} onChange={updatefiltervalue} placeholder='Search for items'  />
//     </form>
//         </div>

//         <div className={list ? "listview_list" : "product_list"}>
//           {filteredProducts.map((curElem) => (
//             <div key={curElem.id} className="product_list_lists">
//               <figure>
//                 <img src={curElem.image} alt="product" />
//                 <figcaption className="caption">{curElem.category}</figcaption>
//               </figure>
//               <h1>{curElem.name}</h1>
//               <p>{curElem.price}</p>
//               {list ? <p className="description">{curElem.description}</p> : null}
//             </div>
//           ))}
//         </div>

//       </Wrapper>
//     </>
//   );
// };

// export default Products;





import React, { useState } from "react";
import styled from "styled-components";
import { ProductApi } from "../Api/ProductApi";
import { RiListView } from "react-icons/ri";
import { MdGridView } from "react-icons/md";
import {NavLink} from "react-router-dom";

const Products = () => {
  const [api, setApi] = useState(ProductApi);
  const [searchText, setSearchText] = useState("");
  const [list, setList] = useState(false);

  const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;

  .sortsection {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    // background-color:red;
    margin:1rem 0;
    padding:10px 10px;
    box-shadow: 0px 1px 5px 1px rgba(0, 0, 255, 0.3);

  }

  .view_category {
    display: flex;
    gap: 15px;
    border:2px solid black;
  }

  .view_category svg {
    cursor: pointer;
    font-size: 30px;
    // &:active{
    //   color:green;
    //   background-color:yellow;
    // }
  }
  .view_category svg.active {
    color: white; /* Change color to green */
    background-color: black; /* Add yellow background */
  }

  form {
    // margin-top: 20px;
    // text-align:center;
    // align-items:center;
    // justify-content:center;

  }

  input.search {
    padding: 8px 10px;
    border-radius: 4px;
    border: 1px solid #ccc;
    width: 100%;
    max-width: 300px;
  }

  // of list view
    .product_list {
      display: flex;
      flex-wrap: wrap;
      gap: 30px;
    }

    .product_list .inside_listing{
      background-color:#E4E3DA;

    }

    .product_list img{
      width:400px;
      height:300px;
    }

    .product_list .inside_listing {
    display: flex;
    border: 1px solid black;
    border-radius: 8px;
    margin:2rem 1rem;
  }
    .inside_listing a{
    text-decoration:none;
  }

 .product_list figcaption{
    text-align:center;
    padding:5px;
    font-size:18px;
    color:black;
    text-decoration:none;
  }
  
  .product_list .inside_listing figure {
    flex: 1;
    margin: 0;
    padding: 0;
  }
  
  .product_list .inside_listing img {
    // width: 100%;
    width: 350px;
    height: 200px;
    border-radius: 8px 0 0 8px;
  }
  .product_list .all_description {
    flex: 1;
    padding: 0 20px; /* Adjust the padding as needed */
  }
  
  .product_list .all_description h1,
  .product_list .all_description p {
    margin: 0;
  }
  


  .product_list_lists {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
  }

  .inside_listing{
    border:1px solid black;
    border-radius:8px;
    box-shadow: 0px -2px 5px 2px rgba(0, 0, 255, 0.3);
    transition: transform 0.3s ease;
&:hover{
  transform:translateY(-10px);
}
  }

  .product_list_lists figure {
    // margin: 0;
    // padding: 0;
    // overflow: hidden;
    // background-color:green;
  }

  .product_list_lists img {
    width: 100%;
    height: 200px;
    border-radius: 8px;
  }

  .product_list_lists h1,
  .product_list_lists p {
    margin: 0;
  }

  .product_list_lists .caption {
    font-size: 14px;
    margin-top: 5px;
  }

  .product_list, .product_list_lists{
    margin:0 0 5rem 0;
  }

  @media screen and (max-width: 768px) {
    .product_list_lists {
      flex-basis: calc(50% - 20px);
    }
  }

  @media screen and (max-width: 480px) {
    .product_list_lists {
      flex-basis: 100%;
    }
  }
`;

 
  const updatefiltervalue = (e) => {
    setSearchText(e.target.value);
  };

  const filteredProducts = api.filter((curElem) =>
    curElem.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const setListView = () => {
    setList(true);
  };

  const setGridView = () => {
    setList(false);
  };

  return (
    <>
      <Wrapper>
        <div className="sortsection">

          <div className="view_category">
            <RiListView onClick={setListView} className={list ? "active" : ""} />
            <MdGridView onClick={setGridView} className={!list ? "active" : ""}/>
          </div>
          <h2>{`${filteredProducts.length} Products Available`}</h2>

          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              name="text"
              value={searchText}
              onChange={updatefiltervalue}
              placeholder="Search for items"
            />
          </form>
        </div>

        <div className={list ? "product_list" : "product_list_lists"}>
          {filteredProducts.map((curElem) => (
            // <div key={curElem.id}>
            //   <figure>
            //     <img src={curElem.image} alt="product" />
            //     <figcaption className="caption">{curElem.category}</figcaption>
            //   </figure>
            //   <h1>{curElem.name}</h1>
            //   <p>{curElem.price}</p>
            // </div>
<div className="inside_listing">
            <NavLink key={curElem.id} to={`/product/${curElem.id}`}>
                <figure>
                  <img src={curElem.image} alt="product" />
                  <figcaption className="caption" style={{textAlign:"center"}}><h1>{curElem.name}</h1> </figcaption>
                <hr style={{color:"black"}}></hr>
                </figure>
            </NavLink>
                <div className="all_description">
                <h1>{curElem.category}</h1>
                <p>{curElem.price}</p>
               { list? <p>{curElem.description}</p>: null}
                </div>

</div>
          ))}
          
        </div>
      </Wrapper>
    </>
  );
};

export default Products;


