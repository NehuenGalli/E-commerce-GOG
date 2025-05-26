const AddToCart = ({game}) => {
    return (
        <div className="cart-container d-flex align-items-center px-5 border rounded my-5" 
             style={{ 
                backgroundColor: '#808080',
                

                }}>
  <p className="mb-0 " 
  style={{ 
    paddingBottom:'2.3rem',
    paddingTop:'2.5rem',
    fontSize: '2.5rem',
    color:'white',
    fontStyle:'bold',
    fontFamily: 'sans-serif',
    }}><strong>Buy {game.name}</strong></p>

  <div className="button-price-container d-flex align-items-center ms-auto  " style={{ gap: '1rem' }}>
    <p className="game-price mb-0 " 
    style={{ 
      fontSize: '2.5rem',
      color:'white',
      fontFamily: 'sans-serif',
      paddingRight:'5rem'
      }}><strong> USD
      {Number(game.price.amount).toFixed(2)}</strong>
    </p>
    <button 
      className="cart-button  rounded ml-5"
      style={{ 
        padding: '1rem',
        backgroundColor: '#9ACD32',
        border: 'none',
        borderRadius: '1px',
        fontSize: '1.7rem',
        fontFamily: 'sans-serif',
        width:'15rem'
      }}
    >
      <strong>Add to Cart</strong>
    </button>
  </div>
</div>
    );
  };
  
 
  
  export default AddToCart;