import React, { useState, useEffect } from "react";
import DashboardHeader from "../../components/DashboardHeader";

import all_orders from "../../constants/orders";
import { calculateRange, sliceData } from "../../utils/table-pagination";

import "./style.css";
import DoneIcon from "../../assets/icons/done.svg";
import CancelIcon from "../../assets/icons/cancel.svg";
import RefundedIcon from "../../assets/icons/refunded.svg";
import { getActivity } from "../../axios/index.axios";

function Activity() {
  console.log("ko");
  const [search, setSearch] = useState("");
  const [orders, setOrders] = useState(all_orders);
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState([]);
  const [activity, setActivity] = useState([]);

  useEffect(() => {
    getActivity().then((res) => {
      setPagination(calculateRange(res.data, 5));
      setActivity(res.data);
    });
  }, []);
  useEffect(()=>{

  },[activity,setActivity])
  // Change Page
  const __handleChangePage = (new_page) => {
    console.log(new_page);
    setPage(new_page);
    setActivity(sliceData(activity, new_page, 5));
    
  };

  return (
    <div className="dashboard-content">
      <div className="dashboard-content-container">
        <div className="dashboard-content-header">
          <h2>Activity List</h2>
        </div>

        <table>
          <thead>
            <th>NAME</th>
            <th>TOPIC</th>
            <th>DURATION</th>
          </thead>

          {activity.length !== 0 ? (
            <tbody>
              {activity.map((item, index) => (
                <tr key={index}>
                  <td>
                    <span>{item.title}</span>
                  </td>
                  <td>
                    <span>{item.topic}</span>
                  </td>
                  <td>
                    <span>{item.duration}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          ) : null}
        </table>

        {/* {activity.length !== 0 ? (
          <div className="dashboard-content-footer">
            {pagination.map((item, index) => (
              <span
                key={index}
                className={item === page ? "active-pagination" : "pagination"}
                onClick={() => __handleChangePage(item)}
              >
                {item}
              </span>
            ))}
          </div>
        ) : (
          <div className="dashboard-content-footer">
            <span className="empty-table">No data</span>
          </div>
        )} */}
      </div>
    </div>
  );
}

export default Activity;
