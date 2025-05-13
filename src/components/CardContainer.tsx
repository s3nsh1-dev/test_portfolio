import { cardFiller } from "../constants/fillers";
import type { CardFillerType } from "../constants/fillers";

import Card from "./Card";

const style: React.CSSProperties = {
  backgroundColor: "#096B68",
  paddingBottom: "40px",
};

const CardContainer = () => {
  const renderCards = cardFiller.map((filler: CardFillerType) => {
    return <Card key={filler.id} filler={filler} />;
  });
  return (
    <div style={style}>
      <h1 className="text-white font-bold text-3xl px-9 pt-4">
        Featured Projects
      </h1>
      <div className="flex flex-wrap justify-center">{renderCards}</div>
    </div>
  );
};

export default CardContainer;
