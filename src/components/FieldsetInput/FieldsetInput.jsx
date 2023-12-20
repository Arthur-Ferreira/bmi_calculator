export default function FieldsetInput() {
  return (
    <fieldset>
      <p>
        <label htmlFor="age">Idade: </label>
        <input title="age" type="number" id="age" name="age" placeholder="Ex: 24" />
      </p>
      <p>
        <label htmlFor="height">Altura: </label>
        <input title="height" type="number" id="height" name="height" placeholder="Ex: 1.79" />
      </p>
      <p>
        <label htmlFor="weight">Peso: </label>
        <input title="weight" type="number" id="weight" name="weight" placeholder="Ex: 80.9" />
      </p>
    </fieldset>
  );
}
