import Header from "./components/Header/Header.jsx";
import InfoArticle from "./components/InfoArticle/InfoArticle.jsx";
import FormArticle from "./components/FormArticle/FormArticle.jsx";
import AppTable from "./components/AppTable/AppTable.jsx";

function App() {
  return (
    <div>
      <Header />
      <main>
        <section>
          <InfoArticle />
          <FormArticle />
        </section>
        <AppTable />
      </main>
    </div>
  );
}

export default App;
