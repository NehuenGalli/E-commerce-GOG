import { getTags } from "../../services/gameServices";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import ListAllTags from "../../components/listAllTags/ListAllTags";
const Tags = () => {
  const [tags, setTags] = useState([]);
  useEffect(() => {
    getTags()
      .then((tags) => setTags(tags))
      .catch((error) => toast.error(error));
  }, []);
  return (
    <>
      <div className="container">
        <h3 className="my-4">BROWSE BY CATEGORY</h3>
        <ListAllTags tags={tags} />
      </div>
      <ToastContainer />
    </>
  );
};

export default Tags;
