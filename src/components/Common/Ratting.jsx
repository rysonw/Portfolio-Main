import ReactStars from "react-stars";

const Ratting = ({ title, star }) => {
  return (
    <div className="flex items-center pb-2">
      <p>
        <ReactStars
          count={5}
          value={star}
          //   onChange={ratingChanged}
          size={24}
          color2={"#ffd700"}
        />
      </p>
      <p className="pt-[4px] pl-4">{title}</p>
    </div>
  );
};

export default Ratting;
