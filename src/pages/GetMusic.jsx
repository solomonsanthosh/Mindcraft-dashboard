import React, { useState, useEffect } from "react";



import { calculateRange, sliceData } from "../utils/table-pagination";

import './Activity/style.css'

import { getMusic } from "../axios/index.axios";

function Music() {
 
  const [search, setSearch] = useState("");
 
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState([]);
  const [music, setMusic] = useState([]);

  useEffect(() => {
    getMusic().then((res) => {
      setPagination(calculateRange(res.data, 5));
      setMusic(res.data);
    });
  }, []);
 
  // Change Page
//   const __handleChangePage = (new_page) => {
//     console.log(new_page);
//     setPage(new_page);
//     (sliceData(activity, new_page, 5));
    
//   };

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
            <th>LINK</th>
          </thead>

          {music.length !== 0 ? (
            <tbody>
              {music.map((item, index) => (
                <tr key={index}>
                  <td>
                    <span>{item.song}</span>
                  </td>
                  <td>
                    <span>{item.topic}</span>
                  </td>
                  <td>
                    <span>{item.link}</span>
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

export default Music;
