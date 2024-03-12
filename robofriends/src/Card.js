const Card = ({ id, name, email }) => (
  <div>
    <img src={`"https://robohash.org/${id}"`} alt={name} />
    <h3>{name}</h3>
    <p>{email}</p>
  </div>
);

export default Card;
