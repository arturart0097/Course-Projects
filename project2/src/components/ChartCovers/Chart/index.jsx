import ChartBar from "../ChartBar";
import "./style.css";

function Chart(props) {
  const valueMax = props.dataPoints.map((el) => el.value);
  const totalMax = Math.max(...valueMax);

  return (
    <div className="chart">
      {props.dataPoints.map((el) => (
        <ChartBar
          key={el.label}
          label={el.label}
          value={el.value}
          maxValue={totalMax}
        />
      ))}
    </div>
  );
}

export default Chart;
