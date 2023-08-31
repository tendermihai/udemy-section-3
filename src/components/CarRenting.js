import "./CarRenting.css";
import Card from "./Card";

import RentingDate from "./RentingDate";

const CarRenting = (props) => {
  return (
    <Card className="car-item">
      <RentingDate date={props.date} />
      <div className="car-item__description">
        <h2>{props.carTitle}</h2>
        <div className="car-item__price">${props.carPrice}</div>
      </div>
    </Card>
  );
};

export default CarRenting;
