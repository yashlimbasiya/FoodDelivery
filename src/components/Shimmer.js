const Shimmer = () => {
  return (
    <div className="r-list">
      {Array(15)
        .fill("")
        .map((e) => (
          <div className="shimmer"></div>
        ))}
    </div>
  );
};

export default Shimmer;
