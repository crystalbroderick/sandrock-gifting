import React from "react";
import { ICharacter, IPreferences } from "../types/characters";
import { Row, Col } from "react-bootstrap";

function CharacterInfo({ id, name, love, like }: ICharacter) {
  return (
    <div>
      <Row>
        <Col className="w-25 p-3">
          <img src="/images/other/Mount_Very_Happy.webp" alt="like icon" />
          <span className="text-primary h4 p-2 me-auto">Love</span>
        </Col>
      </Row>
      <Row md={2} xs={1} lg={3} className="justify-space-between">
        {love.map((item, idx) => (
          <Col key={idx}>
            <PointCircle {...item} />
          </Col>
        ))}
      </Row>{" "}
      <Row>
        <Col className="w-25 p-3">
          <img src="/images/other/Mount_Happy.webp" alt="like icon" />
          <span className="text-primary h4 p-2 me-auto">Like</span>
        </Col>
      </Row>
      <Row md={2} xs={1} lg={3} className="justify-space-between">
        {like.map((item, idx) => (
          <Col>
            <PointCircle {...item} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default CharacterInfo;

function PointCircle({ imgUrl, points, name }: IPreferences) {
  return (
    <Col>
      <img
        src={imgUrl}
        className="rounded-circle"
        style={{ objectFit: "cover" }}
      />
      <div
        className="rounded-circle bg-success d-flex justify-content-center align-items-center"
        style={{
          color: "white",
          width: "2rem",
          height: "2rem",
          position: "absolute",
          transform: "translate(110%, -80%)",
        }}
      >
        +{points}
      </div>
      <span className="text-muted">{name}</span>
    </Col>
  );
}
