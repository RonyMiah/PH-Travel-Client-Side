import {Button} from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceCard.css'


const ServiceCard = (props) => {

    

        // get the data using props 

    const {_id, service_name, img, subtitle, price} = props.prop;

    return (

            // service data show with card 

            <div 
            style={{"textDecoration": "none"}}  
            className="text-center col d-flex flex-column justify-content-between align-items-center py-5"
            >
            <div className="service__icon_container">
                {/* <i className={`${img} fa-3x services__icon`}></i> */}
                <img src={img} alt="" className="img-fluid service__img"/>
            </div>
            <h4 className="my-3 text-center">{service_name}</h4>
            <p className="text-center">{subtitle}</p>
            <h3 className="text-center"><b>${price}</b></h3>
            <Button as={Link} 
            variant="success" 
            style={{"padding": "5px 15px", "color": "white", "textDecoration": "none"}} 
            to={`/services/place-order/${_id}`}
            >
                Travel Now <i className="fas fa-plane mx-1"></i>
            </Button>
            </div>
            
    );
};

export default ServiceCard;