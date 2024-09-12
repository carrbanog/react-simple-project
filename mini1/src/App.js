// import RandomColor from "./components/2 random color";
// import Accordian from "./components/1 accordian";
// import StarRating from "./components/3 star rating";
// import ImageSlider from "./components/4 image slider";
// import LoadMoreData from "./components/5 load-more-btn";

import TreeView from "./components/6 menu ui";
import menus from "./components/6 menu ui/data";
import MenuBar from "./components/7dd";


function App() {
  return (
    <div className="App">
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      /> */}
      <TreeView menus={menus} />    
      {/* <MenuBar /> */}
    </div>
  );
}

export default App;
