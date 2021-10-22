import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { id, name, price, img } = service;

    return (
        <div className='service pb-3'>
            <img width="100%" src={img} alt="" />
            <h3 className='pt-5'>{name}</h3>
            <h5>Price: {price}</h5>
            <Link to={`/booking/${id}`}>
                <button className='btn btn-warning'>Book {name.toLowerCase()}</button>
            </Link>
        </div>
    );
};

export default Service;