import MediaCard from "./application/components/Card/Card";
import Footer from "./application/components/Footer/Footer";
import Header from "./application/components/Header/Header";
import Navigation from "./application/components/Navigation/Navigation";
import Homepage from "./application/pages/Homepage/Homepage";

function App() {
  return (
    <div className="sneakers-ecommerce">
      <Navigation />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
