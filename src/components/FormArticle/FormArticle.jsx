import "./FormArticle.css";

import { useState } from "react";

export default function FormArticle({ onBmiCalculated }) {
  const [enteredValues, setEnteredValues] = useState({
    age: "",
    height: "",
    weight: "",
  });

  const [bmiValue, setBmiValue] = useState();

  function handleValueChange(identifier, value) {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [identifier]: value,
    }));
  }

  let result;

  function handleSubmit(event) {
    event.preventDefault();

    const enteredHeight = enteredValues.height;
    const enteredWeight = enteredValues.weight;

    const bmi = enteredWeight / (enteredHeight * enteredHeight);

    setBmiValue(bmi.toFixed(1));
    onBmiCalculated(bmi.toFixed(1));
  }

  if (bmiValue) {
    result = (
      <div id="result">
        <h2>Resultado</h2>
        <p>Seu IMC é de {bmiValue} kg/m2.</p>
      </div>
    );
  }
  

  return (
    <article>
      <h2>Calcule:</h2>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <p>
            <label htmlFor="age">Idade: </label>
            <input
              title="age"
              type="number"
              id="age"
              name="age"
              placeholder="Ex: 24"
              onChange={(event) => handleValueChange("age", event.target.value)}
              value={enteredValues.age}
            />
          </p>
          <p>
            <label htmlFor="height">Altura: </label>
            <input
              title="height"
              type="number"
              id="height"
              name="height"
              placeholder="Ex: 1.79"
              required
              onChange={(event) =>
                handleValueChange("height", event.target.value)
              }
              value={enteredValues.height}
            />
          </p>
          <p>
            <label htmlFor="weight">Peso: </label>
            <input
              title="weight"
              type="number"
              id="weight"
              name="weight"
              placeholder="Ex: 80.9"
              required
              onChange={(event) =>
                handleValueChange("weight", event.target.value)
              }
              value={enteredValues.weight}
            />
          </p>
        </fieldset>
        <button className="btn">Calcular</button>
      </form>
      {result}
    </article>
  );
}
