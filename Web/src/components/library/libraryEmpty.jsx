import "./libraryEmpty.css";
import { useNavigate } from "react-router";
import { ROUTES } from "../../constants";

const LibraryEmpty = () => {

    const navigate = useNavigate();

    return (
        <div className="empty-library-container">
            <h2 className="empty-library-title">No tienes juegos en tu biblioteca</h2>
            <p className="empty-library-message">Explora nuestra tienda para encontrar juegos increíbles</p>
            <button className="empty-library-button" onClick={() => navigate(ROUTES.HOME)}>
                Add games
            </button>
        </div>
    );
};

export default LibraryEmpty;