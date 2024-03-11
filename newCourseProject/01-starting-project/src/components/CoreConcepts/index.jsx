import Concepts from "../Concepts";
import { CORE_CONCEPTS } from "../../data";

function CoreConcepts() {
  const dynamikConcepts = CORE_CONCEPTS.map((el) => (
    <Concepts
      key={el.id}
      title={el.title}
      image={el.image}
      description={el.description}
    />
  ));
  return (
    <section id="core-concepts">
      <h2>Core concepts</h2>
      <ul>{dynamikConcepts}</ul>
    </section>
  );
}

export default CoreConcepts;
