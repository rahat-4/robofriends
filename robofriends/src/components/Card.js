const Card = ({ id, name, email }) => (
  <div className="bg-light-green dib ma2 pa2 br3 grow">
    <img src={`https://robohash.org/${id}`} alt={name} />
    <h3>{name}</h3>
    <p>{email}</p>
  </div>
);

export default Card;
