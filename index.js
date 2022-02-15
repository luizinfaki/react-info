import Header from "./Components/Header";
import List from "./Components/List";
import Title from "./Components/Title";
import Footer from "./Components/Footer";

const page = (
  <div className="container">
    <div className="box">
      <Header />
      <Title />
      <List />
      <Footer />
    </div>
  </div>
);

ReactDOM.render(page, document.getElementById("root"));
