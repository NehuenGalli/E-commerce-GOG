const ExtraUserBar = (haveLoggout) => {
  return (
    <>
      {haveLoggout && <button className="btn ">Logout</button>}
      {!haveLoggout && <button className="btn ">Add Friend</button>}
    </>
  );
};
export default ExtraUserBar;
