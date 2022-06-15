import React, { useEffect, useState } from "react";
import axios from "axios";
import Business from "./Business/Business";

function Main() {
  const [count, setCount] = useState([]);
  var sum=0;
  var [sammy, setSammy] = useState();
  const [posts, setPosts] = useState([]);
 const getValue = async  () =>{
    sum=1;
    alert("swaraushdkfjsk")
    console.log(sum);
    setSammy(sum);
    
  } 
  const zipValue = async  () =>{
    sum=0;
    alert("swaraushdkfjsk")
    console.log(sum);
    setSammy(sum);
    
  } 
  // function getValue(){
  //  alert("function called");
  // } 
  const getData = async () => {
    // alert("butto9n CLicked")
    const reqUrl = `https://api.gramoday.net:8082/v1/user/bySlug?profileSlug=mmtradingco`;

    await axios.get(reqUrl).then((res) => {
      console.log(res.data);
      setCount(res.data.products);
      console.log(count);
        setPosts(res.data.products.posts)
        console.log("this is thew data which is taking time",res.data.products.posts)
      // if (res.data.isSuccess == true) {
      //   //setData here
      //   console.log("swaraj")
      //   console.log(count)

      // }else{
      //   console.log("ye false part hai")
      //   alert("error")
      //   console.log(res.data)
      //   setCount(res.data.data)
      // }
    });
  };

  useEffect(() => {
    getData();
  }, []);

  // const [businessData,setBuisnessData] = useState([])

  // const getBuisnessData = async () => {
  //   const reqUrl = `https://api.gramoday.net:8082/v1/user/bySlug?profileSlug=mmtradingco`;
  //   await axios
  //     .get(reqUrl)
  //     .then((res) => {
  //       if (res.data.isSuccess == true) {
  //         console.log(res);
  //         console.log(res.data, "res.data.buisness");
  //         console.log(res.data.data, "res.data.data");
  //         setBuisnessData(res.data.data);

  //        console.log("kagaz"+businessData)
  //         // alert("User Registered successFully")
  //       } else {
  //         alert("not valid");
  //       }
  //     })
  //     .then((err) => {
  //       // toast.error(err)
  //       console.log(err);
  //     });
  // };

  // useEffect(() => {
  //   getB.uisnessData();

  // }, [])
  return (
    <>
            {posts.map((value) => {

return (
<h1>{value.cmdtyID} ssaraj</h1>

);
   })}
      {/* main content  */}
      <div className="row">
        <div className="col-2"></div>
        {/* this is the content div  */}
        <div className="col-8">
          <div
            style={{
              display: "flex",
              justifyContent: "end",
              marginTop: "20px",
            }}
          >
            <button
              style={{
                width: "60px",
                height: "26px",
                borderRadius: "15px",
                backgroundColor: "rgb(59, 179, 91)",
                border: "none",
                color: "white",
              }}
            >
              share
            </button>
          </div>
          {/* div for profile image and profile details  */}
          <div
            class=" container"
            style={{
              width: "100%",
              marginBottom: "8px",
              
            }}
          >
            <div
              style={{
                display: "flex",
              }}
            >
              <div>
                <img
                  src="profile1.png"
                  class="card-img-top"
                  alt="..."
                  style={{
                    width: "100px",
                    marginTop: "10px",
                    marginLeft: "20px",
                  }}
                />
              </div>
              <div className="card-body ms-3">
                <h5 className="card-title fw-bold mb-3">ZABIULLA</h5>
 
                <span className="mt-3" > Bangalore, Karnataka</span>
                <br />
                <span style={{
                  fontStyle:"italic",
                  marginTop:"20px"
                }}>Speaks English</span>
                <br />
                            {/* buttons of connect */}
                            <div
              className="d-flex"
              style={{
                justifyContent: "",
                marginBottom: "15px",
              }}
            >
              <div>
                <button
                  style={{
                    width: "105px",
                    height: "28px",
                    borderRadius: "15px",
                    backgroundColor: "rgb(59, 179, 91)",
                    border: "none",
                    color: "white",
marginTop:"20px"
                  }}
                >
                  <img src="user.png" style={{
                    marginLeft:"-4px"
                  }} alt="" />
                  Connect
                </button>
              </div>
              <div>
              <button
                  style={{
                    width: "90px",
                    height: "28px",
                    borderRadius: "15px",
                    backgroundColor: "transparent",
                    border: "none",
                    color: "rgb(59, 179, 91)",
                    border:"1px solid rgb(59, 179, 91)",
                    marginTop:"20px",
                    marginLeft:"20px"

                  }}
                >
                  Contact
                </button>
              </div>
            </div>
                </div>
                </div>
                </div>
          {/* from here actual scrollbar sart */}
          <div
              className=" d-flex"
              style={{
                justifyContent: "space-evenly",
                marginBottom: "15px",
              }}
            >
              <div className="">
                <button
                  style={{
                    width: "90px",
                    height: "28px",
                    borderRadius: "15px",
                    backgroundColor: "transparent",
                    border: "none",
                    fontWeight:"bold",
                    
                  }} onClick={zipValue}
                >
                  BUSINESS
                </button>
                <div style={{
                  width:`${sammy? "0%" : "400%"}`,
                  height:"0.5vw",
                  backgroundColor:"green",
                  position:"relative",
                  
              left:"-160px"  ,
              marginRight:"100px"
              }}></div>
                
              </div>
              <div className="">
                <button
                  style={{
                    width: "90px",
                    height: "28px",
                    borderRadius: "15px",
                    backgroundColor: "transparent",
                    border: "none",
                    fontWeight:"bold",
                    marginLeft:"130px"
                  }} onClick={getValue}
                >
                  REVIEW
                </button>
                <div style={{
                  width:`${sammy? "160%" : "0%"}`,
                  height:"0.5vw",
                  backgroundColor:"green"
                }}>

                </div>
              </div>
             
            </div>
            <div style={
              {
                
              display:`${sammy? "none" : ""}`
              }
            }>
            <Business/>
            </div>

            
        </div>
      </div>
      {/* <div>
        {count.map((value) => {
          return <h1>{value.cmdtyStdName}</h1>;
        })}
        <h1> swaraj{count.cmdtyStdName}</h1>
      </div> */}
    </>
  );
}

export default Main;
