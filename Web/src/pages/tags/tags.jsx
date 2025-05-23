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
      <ListAllTags tags={tags} />
      <ToastContainer />
    </>
  );
};

export default Tags;
