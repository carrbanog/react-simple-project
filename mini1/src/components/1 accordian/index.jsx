import data from "./data.js";
import { useState, useEffect } from "react";

function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);

  // function handleSingleSelection(getCurrentId) {
  //   setSelected(getCurrentId === selected ? null : getCurrentId);
  // }
  useEffect(() => {
    console.log(enableMultiSelection);
  }, [enableMultiSelection])

  return (
    <div className="container">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        Enable Multi Selection
      </button>
      {data.map((dataItem) => {
        return (
          <div>
            <h3
              className={`question ${dataItem.id}`}
              onClick={() =>
                setSelected(dataItem.id === selected ? null : dataItem.id)
              }
            >
              {dataItem.question}
            </h3>
            <span>+</span>
            {selected === dataItem.id ? <div>{dataItem.answer}</div> : null}
          </div>
        );
      })}
    </div>
  );
}

export default Accordian;
