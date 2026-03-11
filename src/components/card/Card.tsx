interface CardProps {
  imgURL: string;
  title: string;
  description: string;
}
const Card: React.FC<CardProps> = ({ imgURL, title, description }) => {
  const blank = "/assets/blankPFP.webp";
  return (
    <div className="block min-w-50 w-50 h-60 p-3 rounded-2xl shadow-[1px_2px_8px] shadow-[hsla(0,0%,0%,0.2)]">
      <div className="center flex-col mb-3">
        <img
          src={imgURL ? imgURL : blank}
          alt="picture"
          className="w-25 rounded-full"
        />
      </div>
      <h3 className="text-[18px] text-white">{title}</h3>
      <p className="text-[12px] text-gray-300">{description}</p>
    </div>
  );
};
export default Card;
