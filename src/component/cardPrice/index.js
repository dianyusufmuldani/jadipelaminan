import Card from "react-bootstrap/Card";
import Image from "next/image";
import { Button } from "react-bootstrap";

const CardPrice = ({ image, title, value, textButton, colorButton }) => {
  return (
    <>
      <Card
        style={{
          width: "30rem",
          textAlign: "center",
          marginLeft: 10,
          marginRight: 10,
          height: 600,
        }}
      >
        <Card.Body>
          <div
            style={{
              backgroundColor: `${colorButton}`,
              color: "#FFFFFF",
              fontSize: 26,
            }}
          >
            {textButton}
          </div>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{value}</Card.Text>
          <Button variant="primary">ORDER SEKARANG!</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardPrice;
