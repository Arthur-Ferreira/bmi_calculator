import "./AppTable.css";

export default function AppTable({ bmiValue, bmiCalculated }) {
  function getHighlightClass(bmi) {
    if (bmi <= 18.4) {
      return "highlighted";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      return "highlighted";
    } else if (bmi >= 25 && bmi <= 29.9) {
      return "highlighted";
    } else if (bmi >= 30 && bmi <= 34.9) {
      return "highlighted";
    } else if (bmi >= 35 && bmi <= 39.9) {
      return "highlighted";
    } else if (bmi > 40) {
      return "highlighted";
    }
    return "";
  }

  return (
    <section>
      <table>
        <tbody>
          <tr>
            <th>IMC</th>
            <th>Classificação</th>
          </tr>

          <tr className={bmiCalculated && bmiValue < 18.5 ? "highlighted" : ""}>
            <td>
              <strong>Menor que 18,5</strong>
            </td>
            <td>Magreza</td>
          </tr>
          <tr
            className={
              bmiCalculated && bmiValue >= 18.5 && bmiValue <= 24.9
                ? "highlighted"
                : ""
            }
          >
            <td>
              <strong>18,5 a 24,9</strong>
            </td>
            <td>Normal</td>
          </tr>
          <tr
            className={
              bmiCalculated && bmiValue >= 25 && bmiValue <= 29.9
                ? "highlighted"
                : ""
            }
          >
            <td>
              <strong>25 a 29,9</strong>
            </td>
            <td>Sobrepeso</td>
          </tr>
          <tr
            className={
              bmiCalculated && bmiValue >= 30 && bmiValue <= 34.9
                ? "highlighted"
                : ""
            }
          >
            <td>
              <strong>30 a 34,9</strong>
            </td>
            <td>Obesidade grau I</td>
          </tr>
          <tr
            className={
              bmiCalculated && bmiValue >= 35 && bmiValue <= 39.9
                ? "highlighted"
                : ""
            }
          >
            <td>
              <strong>35 a 39,9</strong>
            </td>
            <td>Obesidade grau II</td>
          </tr>
          <tr className={bmiCalculated && bmiValue > 40 ? "highlighted" : ""}>
            <td>
              <strong>Maior que 40</strong>
            </td>
            <td>Obesidade grau III</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
