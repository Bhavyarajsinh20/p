import useGanres from "../Hooks/useGenrel";

const GenralList = () => {
  const { genres } = useGanres();
  return (
    <>
      <ul>
        {genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GenralList;
