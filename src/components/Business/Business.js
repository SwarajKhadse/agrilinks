import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Business.css";
function Business() {
  const [count, setCount] = useState([]);
  const [adress, setAdress] = useState([]);
  let val = 1;
  const getData = async () => {
    // alert("butto9n CLicked")
    const reqUrl = `https://api.gramoday.net:8082/v1/user/bySlug?profileSlug=mmtradingco`;

    await axios.get(reqUrl).then((res) => {
      console.log(res.data);
      setCount(res.data.products);
      console.log(count);
      setAdress(res.data.products.posts);
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

  return (
    <>
      
    <div className="scroller">
      <div className="container">
        <h5
          style={{
            fontWeight: "bold",
            color: "rgb(59, 179, 91)",
          }}
        >
          Commission Agent
        </h5>
        <div
          style={{
            marginTop: "20px",
          }}
        >
          <span>Market Name</span>

          <span
            style={{
              fontWeight: "bold",
              marginLeft: "30px",
            }}
          >
            Yeshwanthapura Mandi
          </span>
        </div>
        <div
          style={{
            marginTop: "30px",
          }}
        >
          <span>Firm Name</span>

          <span
            style={{
              fontWeight: "bold",
              marginLeft: "30px",
            }}
          >
            MM Trading Comapny and Haji Dawood Usman and sons
          </span>
        </div>
        <br />
      <div style={{
            marginBottom: "30px",
          }}>
      <span>Shop Number</span>

<span
  style={{
    fontWeight: "bold",
    marginLeft: "30px",
  }}
>
  200
</span>
</div>
      </div>
      <div className="product">
            <h5 className="fw-bold ms-3 mt-3">product</h5>
      </div>
       
      {count.map((value) => {
        return (
          <div
            class="card container"
            style={{
              width: "98%",
              marginBottom: "8px",
              boxShadow: "0px 0px 3px black",
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
                    marginTop: "20px",
                    marginLeft: "20px",
                  }}
                />
              </div>
              <div className="card-body ms-3">
                <h5 class="card-title">{value.cmdtyStdName} mandi rates</h5>

                <span>Yeshwanthapura Mandi, Bangalore, KA</span>
                <br />
                <span>15 June, 2022</span>
                <br />
                <span className="fw-bold"> ₹20-21/1kg</span>
                <span
                  className="text-end"
                  style={{
                    fontStyle: "italic",
                    marginLeft: "440px",
                    fontSize: "12px",
                  }}
                >
                  Updated at 10:36 AM
                </span>
              </div>
              <div>
                <img
                  src="more.png"
                  alt=""
                  style={{
                    width: "20px",
                    marginRight: "20px",
                    marginTop: "15px",
                  }}
                />
              </div>
            </div>
            <hr />
            <div
              className="d-flex"
              style={{
                justifyContent: "space-evenly",
                marginBottom: "15px",
              }}
            >
              <div>
                <button
                  style={{
                    width: "90px",
                    height: "28px",
                    borderRadius: "15px",
                    backgroundColor: "rgb(59, 179, 91)",
                    border: "none",
                    color: "white",
                  }}
                >
                  share
                </button>
              </div>
              <div>
                <button
                  style={{
                    width: "100px",
                    height: "28px",
                    borderRadius: "15px",
                    backgroundColor: "rgb(194, 144, 50)",
                    border: "none",
                    color: "white",
                  }}
                >
                  Interested
                </button>
              </div>
            </div>
          </div>
         
        );
      })}
       </div>
    </>
  );
}
{
  /* <div style={{
            width:"100%",
            height:"10vw",
            backgroundColor:"red"
          }}>
               <h1>{value.cmdtyStdName}</h1>;
          </div> */
}
export default Business;
