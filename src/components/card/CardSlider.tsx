import Card from "./Card";
const CardSlider = () => {
  return (
    <div className="flex gap-3 overflow-scroll min-h-fit">
      <Card
        imgURL="/assets/catPic.jpg"
        title="Mr Cat"
        description="I'm a front-end developer, and a UI/UX designer, with 5 years of experience."
      />
      <Card
        imgURL="/assets/dogMan.jpg"
        title="Dog man"
        description="I'm a software developer, with 2 years of experience."
      />
      <Card
        imgURL=""
        title="CoderCoder"
        description="20 y.o. programmer, i don't have work experience."
      />
    </div>
  );
};
export default CardSlider;
