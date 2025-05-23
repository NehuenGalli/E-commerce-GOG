const ListAllTags = ({ tags }) => {
  return (
    <div className="container my-3">
      <h3 className="mb-4">BROWSE BY CATEGORY</h3>
      <div className="mx-5 row row-cols-1 row-cols-lg-2 row-cols-xl-3 g-3">
        {tags.map((tag) => (
          <div key={tag.id} className="col ">
            <div className="card text-bg-dark rounded-1 ratio ratio-1x1">
              <img
                src={tag.image.src}
                className="card-img object-fit-cover opacity-75 h-100"
                alt={tag.name}
              />
              <div className="card-img-overlay d-flex align-items-end justify-content-center ">
                <h1 className="card-title">{tag.name}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListAllTags;
