import React from 'react';

const Cards = ({ title, description }) => {
    return (
        <div className='col-lg-3 col-md-4 col-12'>
            <div className="card mb-3">
                {/* <img src="..." className="card-img-top" alt="..." /> */}
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href="#" className="btn btn-primary">Read More</a>
                </div>
            </div>
        </div>
    );
}

export default Cards;
