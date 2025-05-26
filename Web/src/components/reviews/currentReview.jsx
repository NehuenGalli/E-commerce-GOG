import './currentReview.css';
const CurrentReview = ()=>{
    return(
    <div className="review-container mx-3">
    <div className="px-2 py-4  text-white rounded-3 d-flex flex-column"
        style={{backgroundColor: '#808080'}}>
      <div className="d-flex justify-content-between align-items-start mb-2">
        <div className="d-flex align-items-center">
          <img 
            src='./user.png'
            alt="" 
            className="img-fluid me-4 rounded-circle"
            style={{
              width: '70px',
              height: '70px',
              objectFit: 'cover'
            }}
          />
          <p className="mb-0 fw-bold fs-4">Sirexa</p>
        </div>
      </div>
  
      <div className="mt-auto mb-3">
        <p className="mb-0 fs-5" style={{ lineHeight: '1.8' }}>
          
        </p>
      </div>
  
      <div className="review-input-container">
        <input 
          type="text" 
          placeholder="Text" 
          className="form-control mb-2 border-0"
          style={{backgroundColor:'transparent'}}
        />
        <button className="btn btn-primary "
                style={{display: 'block',
                    margin: '0 auto',  
                    width: 'fit-content',
                    color:''}}>Add Review</button>
      </div>
    </div>
  </div>
  )
}
export default CurrentReview;