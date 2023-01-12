import { useParams } from "react-router-dom";

export const Character = () => {
  const params = useParams();
  return <>{`Character ${params.id}`}</>;
};
