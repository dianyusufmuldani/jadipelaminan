import React from "react";
import { Col, Row } from "react-bootstrap";
import ImageBingkaiPink from "../../../assets/bingkai.png";
import Image from "next/image";
import BingaiFoto from "../../../assets/bingkai_foto.png";
import ImageBg from "../../../assets/bg_header.jpg";
import Card from "react-bootstrap/Card";

const Pink = () => {
  return (
    <>
      <Row
        style={{
          textAlign: "center",
          alignItems: "center",
          height: 820,
        }}
      >
        <Col sm={12}>
          <Image
            src={ImageBingkaiPink}
            style={{
              width: "100%",
              height: 820,
              position: "absolute",
              top: 0,
              left: 0,
            }}
          />
          <h3>We Are Getting Married</h3>
          <h3>Jumat, 21 Januari 2023</h3>
          <p style={{ fontSize: 60, fontWeight: "bolder" }}>PUTRA</p>
          <p style={{ fontSize: 60, fontWeight: "bolder" }}>&</p>
          <p style={{ fontSize: 60, fontWeight: "bolder" }}>PUTRI</p>
          <p>Kepada Yth</p>
          <p>Bapak/Ibu/Saudara/i</p>
          <p style={{ fontSize: 22 }}>TAMU UNDANGAN</p>
          <p>Di Tempat</p>
        </Col>
      </Row>

      <Row
        style={{
          textAlign: "center",
          alignItems: "center",
          backgroundColor: "#FFE4E1",
        }}
      >
        <Col sm={12}>
          <h2>Pengantin Wanita dan Pengantin Pria</h2>
          <p>Assalamu'alaikum Warahmatullahi Wabarakatuh</p>
          <p>
            Dengan memohon Rahmat dan Ridho Allah SWT, Kami akan
            menyelenggarakan resepsi pernikahan Putra-Putri kami :
          </p>
        </Col>
      </Row>
      <Row
        style={{
          textAlign: "center",

          backgroundColor: "#FFE4E1",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Col sm={6}>
          <Image
            src={BingaiFoto}
            style={{ width: 300, height: 300, marginBottom: 20 }}
          />

          <p style={{ fontSize: 26, fontWeight: "500" }}>PUTRI</p>
          <p style={{ fontSize: 26, fontWeight: "500" }}>PUTRI INDONESIA</p>
          <p style={{ fontSize: 14, fontWeight: "500" }}>Putri dari Pasangan</p>
          <p style={{ fontSize: 14, fontWeight: "500" }}>
            Bapak Presiden dan Ibu Presiden
          </p>
        </Col>
        <Col md={6}>
          <Image
            src={BingaiFoto}
            style={{ width: 300, height: 300, marginBottom: 20 }}
          />
          <p style={{ fontSize: 26, fontWeight: "500" }}>PUTRA</p>
          <p style={{ fontSize: 26, fontWeight: "500" }}>PUTRA INDONESIA</p>
          <p style={{ fontSize: 14, fontWeight: "500" }}>Putra dari Pasangan</p>
          <p style={{ fontSize: 14, fontWeight: "500" }}>
            Bapak Presiden dan Ibu Presiden
          </p>
        </Col>
      </Row>

      <Row
        style={{
          textAlign: "center",
          alignItems: "center",
        }}
      >
        <Col sm={6}>
          <Card className="text-center">
            <Card.Header></Card.Header>
            <Card.Body>
              <Card.Title>AKAD NIKAH</Card.Title>
              <Card.Text>Jum'at 31 Januari 2023</Card.Text>
              <Card.Text>Jam 07:00 - 08:00</Card.Text>

              <Card.Text>Kediaman Mempelai Wanita</Card.Text>
              <Card.Text>
                Jalan Soekarno Hatta no 23, RT22 RW01, Sleman, Yogyakarta
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted"> </Card.Footer>
          </Card>
        </Col>
        <Col sm={6}>
          <Card className="text-center">
            <Card.Header></Card.Header>
            <Card.Body>
              <Card.Title>RESEPSI</Card.Title>
              <Card.Text>Sabtu 1 Februari 2023</Card.Text>
              <Card.Text>Jam 07:00 - 08:00</Card.Text>

              <Card.Text>Kediaman Mempelai Wanita</Card.Text>
              <Card.Text>
                Jalan Soekarno Hatta no 23, RT22 RW01, Sleman, Yogyakarta
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted"> </Card.Footer>
          </Card>
        </Col>
      </Row>

      <Row style={{ textAlign: "center" }}>
        <Col sm={12}>
          <p style={{ fontSize: 30, fontWeight: "500" }}>OUR GALLERY</p>
        </Col>
      </Row>
      <Row
        style={{
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Col
          sm={12}
          style={{
            width: "80%",
            gap: "10px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <Image src={ImageBg} style={{ width: 300, height: 200 }} />
          <Image src={ImageBg} style={{ width: 300, height: 200 }} />
          <Image src={ImageBg} style={{ width: 300, height: 200 }} />
          <Image src={ImageBg} style={{ width: 300, height: 200 }} />
          <Image src={ImageBg} style={{ width: 300, height: 200 }} />
          <Image src={ImageBg} style={{ width: 300, height: 200 }} />
        </Col>
      </Row>
      <br />
      <Row style={{ textAlign: "center" }}>
        <Col sm={12}>
          <p style={{ fontSize: 30, fontWeight: "500" }}>OUR STORY</p>
        </Col>
      </Row>
      <Row
        style={{
          textAlign: "center",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <Col
          sm={12}
          style={{
            justifyContent: "center",
            width: "80%",
            display: "flex",
          }}
        >
          <Card
            bg="success"
            key="success"
            text={"success" === "light" ? "dark" : "white"}
            style={{ width: "18rem" }}
            className="mb-2"
          >
            <Card.Header>Header</Card.Header>
            <Card.Body>
              <Card.Title> Card Title </Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Pink;
