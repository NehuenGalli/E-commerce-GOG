import { ROUTES } from "../../constants";
import { Link } from "react-router";
const ModalTags = ({ tags }) => {
  return (
    <>
      <Link
        className="link-offset-1 badge "
        data-bs-toggle="modal"
        data-bs-target="#modalTag"
      >
        more...
      </Link>
      <div className="modal fade" id="modalTag" tabIndex="-1">
        <div className="modal-dialog modal-lg">
          <div className="modal-content custom-modal-bg">
            <div className="modal-header">
              <h1 className="modal-title fs-5 text-decoration-none text-white">
                All tags
              </h1>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              {tags.map((tag) => (
                <Link
                  key={tag.id}
                  to={`${ROUTES.TAGS}/${tag.id}`}
                  className="link-offset-1 badge text-white fs-6"
                >
                  {tag.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalTags;
