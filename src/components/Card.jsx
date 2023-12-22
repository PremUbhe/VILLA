import React from "react";


const Card = ({ img, amount, title, bed, bath, area, floor, parking }) => {
    return (
        <div class="card p-2 my-2" style={{ width: '21rem' }}>
            <img src={img} class="card-img-top rounded" alt="..." />
            <div className="d-flex justify-content-between pt-2">
                <h6 className="p-2" style={{ backgroundColor: 'peachpuff' }}>Luxury Villa</h6>
                <h6 className="p-3 text-danger">${amount}</h6>
            </div>
            <div class="card-body d-flex flex-wrap">
                <h5 class="card-title">{title}</h5>
                <p class="card-text pe-3">Bedrooms: <span>{bed}</span></p>
                <p class="card-text pe-3">Bathrooms: <span>{bath}</span></p>
                <p class="card-text pe-3">Area: <span>{area}</span></p>
                <p class="card-text pe-3">Floor: <span>{floor}</span></p>
                <p class="card-text pe-3">Parking: <span>{parking}</span></p>

            </div>
            <hr />
            <button className="btn btn-dark w-75 align-self-center">Schedule a visit</button>
        </div>
    )
};


export default Card;