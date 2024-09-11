import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./style.css";

function ImageSlider({ url, page, limit }) {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [image, setImage] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  async function fetchImages(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();
      console.log(response);
      console.log(data);

      if (data) {
        setImage(data);
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
      setErrorMsg(e.message);
    }
  }
  useEffect(() => {
    if (url !== "") {
      fetchImages(url);
    }
  }, [url]);
  console.log(image.length - 1)

  if (loading) {
    return <div>Loading data ! Please wait</div>;
  }
  if (errorMsg !== null) {
    return <div>Error occured ! {errorMsg}</div>;
  }

  function handlePrevious(){
    setCurrentSlide(currentSlide === 0 ? image.length - 1 : currentSlide - 1)
  }

  function handleNext(){
    setCurrentSlide(currentSlide === image.length - 1 ? 0 : currentSlide + 1)
  }

  return (
    <div className="container">
      <BsArrowLeftCircleFill
        onClick={() => handlePrevious()}
        className="arrow arrow-left"
      />
      {
        image && image.length ?
        image.map((imageItem, index) => {
          return(
            <img 
              key={imageItem.id}
              alt={imageItem.download_url}
              src={imageItem.download_url}
              className={
                currentSlide === index
                ? `current-image ${index}`
                : `current-image hide-current-image ${index}`
              }
            />
            
          )
        })
        :null
      }  
      <BsArrowRightCircleFill
        onClick={() => handleNext()}
        className="arrow arrow-right"
      />
      <span className="circle-indicators">
        {
          image && image.length
          ? image.map((_, index) => {
            return(
              <button
                className={
                  currentSlide == index 
                  ? "current-indicator"
                  : "current-indicator inactive-indicator"
                }
                onClick={() => setCurrentSlide(index)}
              >
                
              </button>
            )
          })
          :null
        }
      </span>
    </div>
  )
}

export default ImageSlider;
