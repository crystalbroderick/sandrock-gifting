import React, { ReactNode, useEffect, useState } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import CharacterInfo from "../components/CharacterInfo";
import data from "../data/characters.json";
import { ICharacter } from "../types/characters";

function Gifting() {
  const [charShown, setCharShown] = useState<ICharacter>();
  const [name, setName] = useState<string>("");
  const handleClick = (item: ICharacter) => {
    setCharShown(item);
    setName(item.name);
  };

  return (
    <>
      {" "}
      <Container>
        <Row>
          <Col>
            <Row md={2} xs={1} lg={4} className="g-3 justify-space-between">
              {data.map((item) => (
                <>
                  <Button variant="light" onClick={() => handleClick(item)}>
                    <img
                      src={item.imgUrl}
                      className="rounded-circle"
                      style={{
                        objectFit: "cover",
                        backgroundColor: "#e28743",
                        width: "120px",
                        height: "120px",
                      }}
                    />
                    <span className="text-muted">{item.name}</span>
                  </Button>
                </>
              ))}
            </Row>
          </Col>

          <Col className="shadow bg-white p-2 rounded">
            {" "}
            <div className="p-3" style={{ backgroundColor: "#fd7e14" }}>
              <img
                src="/images/other/Social_gift.webp"
                className="rounded float-start"
                style={{ width: "70px" }}
              ></img>
              <h3> Gift Preferences </h3>
              <i>
                {name
                  ? `for ${name}`
                  : "Click on a character to view their preferences! (:"}
              </i>
            </div>
            {charShown && <CharacterInfo {...charShown}></CharacterInfo>}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Gifting;
