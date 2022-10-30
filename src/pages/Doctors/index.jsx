import React, {useState, useEffect} from 'react';
import DashboardHeader from '../../components/DashboardHeader';

import all_orders from '../../constants/orders';
import {calculateRange, sliceData} from '../../utils/table-pagination';

import './styles.css';
import DoneIcon from '../../assets/icons/done.svg';
import CancelIcon from '../../assets/icons/cancel.svg';
import RefundedIcon from '../../assets/icons/refunded.svg';
import { getCoach } from '../../axios/index.axios';

function Orders () {
    const [search, setSearch] = useState('');
    const [orders, setOrders] = useState(all_orders);
    const [page, setPage] = useState(1);
    const [pagination, setPagination] = useState([]);
    const [coach,setCoach] = useState([])

    useEffect(()=>{
        getCoach().then((res)=>{
            setPagination(calculateRange(res.data, 5));
            setCoach(sliceData(res.data, page, 5))
            
        })
    },[])
   

   
    // Change Page 
    const __handleChangePage = (new_page) => {
        setPage(new_page);
        setCoach(sliceData(coach, new_page, 5));
    }

    return(
        <div className='dashboard-content'>
            

            <div className='dashboard-content-container'>
                <div className='dashboard-content-header'>
                    <h2>Coaches List</h2>
                    
                </div>

                <table>
                    <thead>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>EXPERIENCE</th>
                        <th>Fee</th>
                        
                    </thead>

                    {coach.length !== 0 ?
                        <tbody>
                            {coach.map((item, index) => (
                                <tr key={index}>
                                    <td><span>{item.name}</span></td>
                                    <td><span>{item.email}</span></td>
                                    <td><span>{item.experience}</span></td>
                                    <td><span>Rs {item.fee}</span></td>
                                </tr>
                            ))}
                        </tbody>
                    : null}
                </table>

                {coach.length !== 0 ?
                    <div className='dashboard-content-footer'>
                        {pagination.map((item, index) => (
                            <span 
                                key={index} 
                                className={item === page ? 'active-pagination' : 'pagination'}
                                onClick={() => __handleChangePage(item)}>
                                    {item}
                            </span>
                        ))}
                    </div>
                : 
                    <div className='dashboard-content-footer'>
                        <span className='empty-table'>No data</span>
                    </div>
                }
            </div>
        </div>
    )
}

export default Orders;