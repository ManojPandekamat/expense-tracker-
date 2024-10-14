import { React, useState } from "react";
import Option from "../../components/Option/Option.js";
import Navbar from "../../components/navrbar/Navbar.js";
import "./Apppage.css";
import { useData } from "../../context.js";
import Transaction from "../../components/Transaction/Transaction.js";
import '@fontsource/roboto';

function Apppage() {
  const [amount, setAmount] = useState("");
  const [desc, setDesc] = useState("");
  const [type, setType] = useState(false);
  var { data, totalSent } = useData();
  const { totalRecieved } = useData();
  const { fetchData } = useData();
  const { total } = useData();

  data = data.slice(0, 6);

  function showpage() {
    setAmount("");
    setDesc("");
    setType(false);
    const dialog = document.getElementById("dialog");
    dialog.showModal();
  }

  async function closedialog(event) {
    event.preventDefault();
    let now = new Date();
    const transactionData = {
      Amount: amount,
      Description: desc,
      Type: type,
      Date: {
        hours: now.getHours(),
        minutes: now.getMinutes(),
        seconds: now.getSeconds(),
        day: now.getDate(),
        month: now.getMonth() + 1,
        year: now.getFullYear(),
      },
    };

    const dialog = document.getElementById("dialog");

    try {
      // Post the data to the server

      const response = await fetch("http://localhost:5000/trans", {
        method: "POST",
        body: JSON.stringify(transactionData), // Send transactionData directly
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const response2 = await response.text();
      console.log("done");
      console.log("res:", response2);
    } catch (error) {
      console.error("Error creating transaction", error);
    }

    dialog.close();
    document.getElementById("checktype").value=false;
    setType(false);
    fetchData();
  }

  function getcolor(Type) {
    if (Type) {
      return "#1ddd1d";
    } else return "red";
  }

  function getcolor2(Type) {
    if (Type >= 0) {
      return "#1ddd1d";
    } else return "red";
  }


  return (
    <div>


      <dialog id="dialog">
        <form action="#" method="post">
          <button
            id="close-btn"
            onClick={() => {
              document.getElementById("dialog").close();
            }}
          >
            Cancel
          </button>

          <div className="dialog-divs">
            <div>Enter Amount</div>
            <input
              type="text"
              placeholder="Enter Amount"
              name="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
              autoComplete="off"
            ></input>
          </div>

          <div className="dialog-divs">
            <div>Enter Description</div>
            <input
              type="text"
              placeholder="Enter Description"
              name="Description"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              autoComplete="off"
            ></input>
          </div>

            <div className="dialog-divs2">
              <div style={{paddingLeft:"4rem"}}>

              Is credit
              </div>
              <input id="checktype"
                type="checkbox"
                value={type}
                checked={type}
                onChange={() => setType(!type)}
              ></input>
            </div>


          <button onClick={closedialog}>Add</button>

          <div>The current time and date are selected</div>
        </form>
      </dialog>

      <Navbar title="Expense Tracker" name="About us" target="about" />
      <div className="Add-expense">
        <button onClick={showpage}>Add Transaction</button>
      </div>
      <div className="Options">
        <Option
          name="Money spent"
          Amount={totalSent}
          target="/money-spent"
          color="red"
        />

        <Option
          name="Recieved Money"
          Amount={totalRecieved}
          target="/recieved-expenses"
          color="#1ddd1d"
        />
        <Option
          name="Total P/L"
          color={getcolor2(total)}
          Amount={total}
          target="/pandl-expenses"
        />
      </div>
      <Navbar title="Recent Expenses" name="More" target="money-spent" />

      <ul id="listTitle">
        <li id="one">Transactions</li>
        <li id="two">Date and Date</li>
        <li id="three">Amount</li>
      </ul>

      <ul id="list">


        {data.length > 0 ? (
          data.map((transaction, index) => (
            <li key={transaction._id || index}>
              {" "}
              {/* Use a unique key for each item */}
              <Transaction
                color={getcolor(transaction.Type)}
                fetchdata={transaction}
              />
            </li>
          ))
        ) : (
          <li>No transaction data available.</li>
        )}
      </ul>
    </div>
  );
}

export default Apppage;
