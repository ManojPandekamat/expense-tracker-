import React from "react";
import Option from "../../components/OptionWithoutLink/Option";
import "./Total.css";
import { useData } from "../../context.js";
import Transaction from "../../components/Transaction/Transaction.js";
import { Link } from "react-router-dom";
import cancelIcon from '../../assets/cancel.svg';


function Total(props) {
    const { total ,data} = useData();
    var color = "black"

    if(total <0){
        color="red"
    }
    else{
        color="green"
    }

    function getcolor(Type){
        if(Type){
            return "green"
        }else
        return "red"
    }

  return (
    <div className="Total">
      {/* <button onClick={FetchAllTransaction()}>click</button> */}
      <div className="title">
      <div style={{color:"#DDF2FD"}} >{props.name}</div>
      <Link to={"/"}><img id="cancel-icon" src={cancelIcon}></img></Link>
        </div>
      
      <Option name="Total Amount" color={color} Amount={total} />

      <ul className="list">
        {data.length > 0 ? (
          data.map((transaction, index) => (
    
            <li key={transaction._id || index}>
              {" "}
              {/* Use a unique key for each item */}
              <Transaction color={getcolor(transaction.Type)} fetchdata={transaction} />
            </li>
          ))
        ) : (
          <li>No transaction data available.</li>
        )}
      </ul>
    </div>
  );
}
export default Total;

