const Flowers = (props) => {
  const { img, name, dec } = props;
  return (
    <div className="cards">
      <h2>{name}</h2>
      <img src={img} alt={name} />
      <p>{dec}</p>
      <button>Read more</button>
    </div>
  );
};

export default Flowers;
