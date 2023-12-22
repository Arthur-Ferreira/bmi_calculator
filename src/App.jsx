import { useState } from "react";

import Header from "./components/Header/Header.jsx";
import InfoArticle from "./components/InfoArticle/InfoArticle.jsx";
import FormArticle from "./components/FormArticle/FormArticle.jsx";
import AppTable from "./components/AppTable/AppTable.jsx";

function App() {
  const [bmiValue, setBmiValue] = useState();
  const [bmiCalculated, setBmiCalculated] = useState(false);

  function handleBmiCalculation(bmi) {
    setBmiValue(bmi);
    setBmiCalculated(true);
  }

  return (
    <div>
      <Header />
      <main>
        <section>
          <InfoArticle />
          <FormArticle onBmiCalculated={handleBmiCalculation} 
          />
        </section>
        <AppTable bmiValue={bmiValue} bmiCalculated={bmiCalculated}/>
      </main>
    </div>
  );
}

export default App;
