import './AppTable.css';

export default function AppTable() {
  return (
    <section id="result">
          <table className="table-striped">
            <tbody>
              <tr>
                <th>IMC</th>
                <th>Classificação</th>
              </tr>

              <tr>
                <td>
                  <strong>Menor que 18,5</strong>
                </td>
                <td>Magreza</td>
              </tr>
              <tr>
                <td>
                  <strong>18,5 a 24,9</strong>
                </td>
                <td>Normal</td>
              </tr>
              <tr>
                <td>
                  <strong>25 a 29,9</strong>
                </td>
                <td>Sobrepeso</td>
              </tr>
              <tr>
                <td>
                  <strong>30 a 34,9</strong>
                </td>
                <td>Obesidade grau I</td>
              </tr>
              <tr>
                <td>
                  <strong>35 a 39,9</strong>
                </td>
                <td>Obesidade grau II</td>
              </tr>
              <tr>
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