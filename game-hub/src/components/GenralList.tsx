import useGanres, { Genre } from "../Hooks/useGenrel";

const GenralList = () => {
  const { data } = useGanres();
  return (
    <>
      <ul>
        {data.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GenralList;
