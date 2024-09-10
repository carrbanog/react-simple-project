import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./style.css";

function ImageSlider({ url, page, limit }) {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  async function fetchImage(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();
      console.log(data);
    } catch (e) {
      setLoading(false);
      setErrorMsg(e.errorMsg);
    }
  }
  useEffect(() => {
    if (url !== "") {
      fetchImage(url);
    }
  }, [url]);

  return (
    <div className="container">
      <BsArrowLeftCircleFill />
    </div>
  );
}

export default ImageSlider;
