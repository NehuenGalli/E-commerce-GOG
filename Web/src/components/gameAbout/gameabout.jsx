const GameAbout = ({ game }) => {
    return (
      <div className="about mt-4"style={{fontFamily:'sans-serif'}}>
        <p><strong>ABOUT THIS GAME</strong></p>
        <p><strong>{game.description}</strong></p>
        <p><strong>REQUIREMENTS</strong></p>
        <p><strong>OS: {game.requirement.os.join(", ")}</strong></p> {/* Corregido */}
        <p><strong>Processor: {game.requirement.processor.join(", ")}</strong></p> {/* Corregido */}
        <p><strong>Memory: {game.requirement.memory} GB</strong></p>
        <p><strong>Graphics: {game.requirement.graphics.join(", ")}</strong></p> {/* Corregido */}
      </div>
    );
  };
  
  export default GameAbout;
  