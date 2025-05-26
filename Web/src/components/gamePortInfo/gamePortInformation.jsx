import './gamePort-info.css';
import AddToCart  from '../portAddToCart/addToCart';
const GamePortInfo = ({ game }) => {
  return (
    <div className=" border-0" style={{ 
     
    }}>
      <div className="position-relative">
        <img
          src={game.mainImage}
          alt={game.name}
          className="w-100 object-fit-cover imagen"
          style={{ 
            height: "600px", 
            objectPosition: "center top" 
          }}
        />
      </div>


      <div className="mt-4" style={{ fontSize: '1.5rem' }}> 
        <p>
          <strong>Developer: {game.developer.name}</strong> 
        </p>
        <p>
          <strong>Website: {game.website}</strong> 
        </p>
        <p>
          <strong>Release date: {game.releaseDate}</strong> 
        </p>
        <p>
          <strong>Tags: 
          {game.tags.map((tag) => (
            <span key={tag.id} style={{ fontSize: '1.5rem' }}>  </span>
          ))}</strong> 
        </p>
      </div>
      
        <AddToCart game={game}/>
      
    </div>
    
  );
};

export default GamePortInfo;