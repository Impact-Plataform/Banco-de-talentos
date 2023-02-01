const Card = ({ char }) => {
  const { name, gender, films, species } = char;
  return (
    <div>
      <p>{name}</p>
      <p>{gender}</p>
      <p>{species}</p>
      <p>{films}</p>
    </div>
  );
};

export default Card;
