import "./FormArticle.css";

import FieldsetButton from "../FieldsetButton/FieldsetButton.jsx";
import FieldsetInput from "../FieldsetInput/FieldsetInput.jsx";

export default function FormArticle() {
  function bmiCalculator() {

  }
  
  return (
    <article>
      <h2>Calcule:</h2>
      <form>
        <FieldsetButton />
        <FieldsetInput />
        <button onSubmit={bmiCalculator} className="btn" type="submit">
          Calcular
        </button>
      </form>
    </article>
  );
}
