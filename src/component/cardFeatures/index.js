import Card from "react-bootstrap/Card";
import Image from "next/image";

const CardFeatures = ({ title, value, image }) => {
  return (
    <>
      <Card
        style={{
          width: "15rem",
          textAlign: "center",
          marginLeft: 10,
          marginRight: 10,
        }}
      >
        <Card.Body>
          <Image src={image} style={{ width: 100, height: 100 }} />
          <Card.Title>{title}</Card.Title>
          <Card.Text>{value}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardFeatures;
