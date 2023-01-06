import { useParams } from "react-router-dom";
import { useCharactersContext } from "../../contexts";
import { changeSlug } from "../../helpers/slug";
import { GlobalStyles } from "../../styles";

const Detail = () => {
  const { characters } = useCharactersContext();
  console.log(characters);
  const params = useParams();

  const data = characters.filter((item) =>
    changeSlug(item.name).includes(params.name) ? item : "",
  );

  console.log(data);

  return (
    <div>
      {data.map(({ name }) => (
        <div key={name}>
          <h1>{name}</h1>
        </div>
      ))}
      <GlobalStyles backgroundColor="#303236" />
    </div>
  );
};

export default Detail;
