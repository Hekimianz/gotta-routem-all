import styles from "../assets/css/card.module.css";

function Type({ type }) {
  let color = "";
  switch (type) {
    case "Normal":
      color = "#B0AA9B";
      break;
    case "Bug":
      color = "#89950C";
      break;
    case "Dark":
      color = "#3B2E22";
      break;
    case "Dragon":
      color = "#6152AC";
      break;
    case "Electric":
      color = "#E89306";
      break;
    case "Fairy":
      color = "#DE95DD";
      break;
    case "Fighting":
      color = "#5E2215";
      break;
    case "Fire":
      color = "#C92000";
      break;
    case "Flying":
      color = "#5D74D5";
      break;
    case "Ghost":
      color = "#47438A";
      break;
    case "Grass":
      color = "#3B8728";
      break;
    case "Ground":
      color = "#AC9041";
      break;
    case "Ice":
      color = "#6CD2F6";
      break;
    case "Poison":
      color = "#370936";
      break;
    case "Psychic":
      color = "#E23166";
      break;
    case "Rock":
      color = "#A08542";
      break;
    case "Steel":
      color = "#8F8EA0";
      break;
    case "Water":
      color = "#0B67C5";
      break;
    default:
      break;
  }
  const styleObj = {
    backgroundColor: color,
  };
  return (
    <span style={styleObj} className={styles.type}>
      {type}
    </span>
  );
}

export default Type;
