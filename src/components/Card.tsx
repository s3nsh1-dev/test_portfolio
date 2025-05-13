import type { CardFillerType } from "../constants/fillers";

type propTypes = {
  filler: CardFillerType;
};

const Card: React.FC<propTypes> = ({ filler }) => {
  return (
    <div className="border-1 bg-white rounded-xl w-[450px] m-4">
      <img src={filler.imageSrc} alt={filler.title} className="rounded-xl" />
      <div className="px-2 pt-5 pb-2">
        <div className="h-30">
          <h1 className="font-bold py-2">{filler.title}</h1>
          <h1 className="text-[0.9rem]">{filler.content}</h1>
        </div>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          <p className="text-black font-bold text-[0.9rem]">See more {`-->`}</p>
        </a>
      </div>
    </div>
  );
};

export default Card;
