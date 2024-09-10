// import RandomColor from "./components/2 random color";
// import Accordian from "./components/1 accordian";
// import StarRating from "./components/3 star rating";
import ImageSlider from "./components/4 image slider";

function App() {
  return (
    <div className="App">
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />
    </div>
  );
}

export default App;
