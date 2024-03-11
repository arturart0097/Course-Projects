import { useState } from "react";
import { EXAMPLES } from "../../data";
import TabButton from "../TabButton";
import Tabs from "../Tabs";

function Section() {
  const [selectButton, setSelectButton] = useState(null);

  const selectHandler = (selected) => {
    setSelectButton(selected);
  };

  const topik = !selectButton ? (
    <p>Please click a topic</p>
  ) : (
    <div id="tab-content">
      <h3>{EXAMPLES[selectButton].title}</h3>
      <p>{EXAMPLES[selectButton].description}</p>
      <pre>
        <code>{EXAMPLES[selectButton].code}</code>
      </pre>
    </div>
  );

  return (
    <section id="examples">
      <h2>Examples</h2>
      <Tabs
        buttons={
          <>
              <TabButton
                select={selectButton === "components"}
                label="Components"
                onClick={() => selectHandler("components")}
              />
              <TabButton
                select={selectButton === "jsx"}
                label="JSX"
                onClick={() => selectHandler("jsx")}
              />
              <TabButton
                select={selectButton === "props"}
                label="Props"
                onClick={() => selectHandler("props")}
              />
              <TabButton
                select={selectButton === "state"}
                label="State"
                onClick={() => selectHandler("state")}
              />
          </>
        }
      />
        {topik}
    </section>
  );
}

export default Section;
