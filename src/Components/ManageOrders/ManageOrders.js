import React, {useState, useEffect} from 'react';
import { Button } from 'react-bootstrap';
import { Link} from 'react-router-dom';

const ManageOrders = () => {

    // use statwe for orders 

    const [orders, setOrders] = useState([])
    

    // get the data 
    

    useEffect(()=>{
        fetch('http://localhost:5000/my-orders')
        .then(res => res.json())
        .then(data => setOrders(data));
    }, []);


    // handle delete for manage the data 
    

    const handleDelete = (id, status) =>{
        const procced = window.confirm("Do you want to Cancel this order?")

        if(procced && status.toString() !== 'Completed'){
            const url = `http://localhost:5000/cancel-order/${id}`
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                const filtered = orders.filter((u)=> u._id !== id)
                setOrders(filtered)
                console.log(data)
            });
        }
        console.log(id)
    }



    return (
        <div>
            <div id="services" className="my-5">
                <h1 className="text-center fw-bold">Total Places Booked By Users</h1>

                

            <div className="container mx-auto row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-sm-1">
                

                {/* all orders to manage them added dynamically  */}
                
                {
                    orders.map(order=>{
                        return (
                            <div key={order?._id}
                            style={{"textDecoration": "none"}}  
                            className="text-left col d-flex flex-column justify-content-between align-items-center py-5"
                            >
                            <div>
                                <div className="service__icon_container">
                                <img src={order?.img} alt="" className="img-fluid service__img"/>
                                </div>
                                <h4 className="my-3">{order?.service_name} <span className="badge bg-primary">{order?.status}</span></h4>
                                <p>{order?.subtitle}</p>
                                <h3><b>${order?.price}</b></h3>
                                <p>Booked by: {order?.email}</p>
                                
                                
                                
                                {
                                    order?.status === 'Completed' ? <h6 className="text-success">Can't Update after completed</h6>
                                    : 
                                    <Button as={Link} data-id={order?._id} to={`/update-status/${order?._id}`} 
                                    variant="secondary" className="me-2"
                                    style={{"padding": "5px 15px", "background": "", "color": "white",         "textDecoration": "none"}} 
                                    >
                                    <i class="far fa-edit"></i> Update 
                                    </Button>
                                }
                                {
                                    order?.status === 'Completed' ? '' : <Button  
                                    variant="warning" className="ms-2"
                                    style={{"padding": "5px 15px", "background": "", "color": "white",  "textDecoration":                "none"}} onClick={(e)=>handleDelete (order?._id, order?.status)}
                                    >
                                    <i class="far fa-window-close"></i> Cancel 
                                    </Button>
                                }
                            </div>
                            </div>
                        )
                    })
                }

                </div>
            </div>
        </div>
    );
};

export default ManageOrders;