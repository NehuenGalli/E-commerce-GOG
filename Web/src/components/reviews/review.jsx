import React, { useState } from 'react';
import './Reviews.css'; // Asegurate de tener este archivo
import thumbUp from './thumb-up.png';
import thumbDown from './thumb-down.png';
import CurrentReview from './currentReview';

const Reviews = ({ game,user }) => {
  
 

  return (
    
    <div className="container-fluid px-0">
      <h4>REVIEWS</h4>
      <CurrentReview />
      {/* Grid de reviews */}
      <div className="row gx-5 gy-2 mx-0 mt-2">
        {game.reviews.map((review, index) => (
          <div className="col-12 col-md-6 " key={index}>
            <div className="p-4 h-100  text-white rounded-3 d-flex flex-column" style={{
              height: '100px',
              fontSize: '1.2rem',
              backgroundColor: '#808080'
            }}>
              <div className="d-flex justify-content-between align-items-start mb-2">
                <div className="d-flex align-items-center">
                  <img 
                    src={review.user?.image || "avatar.png"} 
                    alt="avatar" 
                    className="img-fluid me-4 rounded-circle"
                    style={{
                      width: '70px',
                      height: '70px',
                      objectFit: 'cover'
                    }}
                  />
                  <p className=" fw-bold fs-4">{review.user?.name || "Anon"}</p>
                </div>
                <img 
                  src={review.isRecommended ? thumbUp : thumbDown} 
                  alt={review.isRecommended ? "Recommended" : "Not Recommended"} 
                  width="50"
                  className="ms-2"
                />
              </div>

              <div className="mt-auto px-5">
                <p className="pl-5 mb-0 pt-5 fs-5" style={{ lineHeight: '1.8' }}>{review.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
