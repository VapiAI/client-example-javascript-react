import { CharacterDetails } from "./CharacterDetails";

function CharacterPreview() {
  return (
    <div>
      <div className="border rounded-lg p-4 flex flex-col gap-2 w-96 m-3 h-auto">
        <h1 className="text-2xl text-center w-full">Character Designer</h1>
        <CharacterDetails />
      </div>
    </div>
  );
}

export { CharacterPreview };
