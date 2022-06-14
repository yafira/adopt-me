import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div>
      {!pets.length ? (
        <h1>No pets found.</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            name={pet.name}
            animal={pet.animal}
            breed={pet.breed}
            key={pet.id}
            image={pet.images}
            location={`${pet.city}, ${pet.state}`}
            id={pet.id}
          />
        ))
      )}
    </div>
  );
};

export default Results;
