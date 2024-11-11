import React from 'react';
import { FaStar, FaRegStar } from "react-icons/fa";


function Service(props) {
    return (
        <div className="card">
            <img src={props.img} alt="" />
            <h3>
                {props.name}
                <small>
                    {props.job}
                </small>
            </h3>
            <div className="stars">
                <i className='bi bi-star-fill' style={{ color: props.color }}></i>
                <i className='bi bi-star-fill' style={{ color: props.color }}></i>
                <i className='bi bi-star-fill' style={{ color: props.color }}></i>
                <i className='bi bi-star-fill' style={{ color: props.color }}></i>
                <i className='bi bi-star-fill' ></i>
            </div>
            <div className="buttons">
                <button>about me</button>
                <button>hire me</button>
            </div>
        </div>
    )

}

export default Service;