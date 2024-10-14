import React from "react";
import Option from "../../components/OptionWithoutLink/Option";
import "./Total.css";
import Transaction from "../../components/Transaction/Transaction";
import { useData } from "../../context.js";
import { Link } from "react-router-dom";
import cancelIcon from '../../assets/cancel.svg';


function Total(props) {
    var { totalRecieved,data } = useData();
    data = data.filter(transaction => transaction.Type === true)

  return (
    <div className="Total">
      <div className="title">

      <div style={{color:"#DDF2FD"}} >{props.name}</div>
      <Link to={"/"}><img id="cancel-icon" src={cancelIcon}></img></Link>
      </div>


      <Option name="Total Amount" color="green" Amount={totalRecieved} />
      <ul className="list">
        {data.length > 0 ? (
          data.map((transaction, index) => (
            <li key={transaction._id || index}>
              {" "}
              {/* Use a unique key for each item */}
              <Transaction color="green" fetchdata={transaction} />
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

