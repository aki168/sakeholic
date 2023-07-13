import { useState, useEffect } from "react";
import { Modal, Card } from "react-bootstrap";
import { HeartFill, Heart, PencilSquare, GeoAlt } from "react-bootstrap-icons";
import ItemCard from "@COM/ItemCard";
import styled from "styled-components";
import useCollectedSake from "@HOOK/useCollectSake";

const KeepBtn = styled.button`
  position: absolute;
  right: 0.8em;
  top: 1em;
  background: none;
  border: none;
`;

const SakeCardA = ({ id, img, furigana, name, maker, area, tags, chart }) => {
  const { getSake } = useCollectedSake();
  const [show, setShow] = useState(false);
  const [like, setLike] = useState(false);
  const AHandler = (e) => {
    e.preventDefault();
    setShow((prev) => !prev);
  };

  let list = getSake() || [];
  useEffect(() => {
    if (list.includes(id)) {
      setLike(true);
    }
  }, [list]);
  return (
    <>
      <Modal
        size="lg"
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-100w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            No.{id}　{name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0">
          <ItemCard
            area={area}
            chart={chart}
            id={id}
            maker={maker}
            name={name}
            tags={tags}
          />
        </Modal.Body>
      </Modal>

      <a href="!#" onClick={AHandler} className="rounded shadow-sm bg-opacity">
        <Card className="border-light rounded">
          <Card.Header
            className="p-0 border-0"
            style={{
              height: "370px",
              backgroundImage: `url("${process.env.PUBLIC_URL}/media/${img}")`,
              backgroundPosition: "center center",
              backgroundSize: "cover",
              position: "relative",
            }}
          >
            <KeepBtn>
              {like ? (
                <HeartFill className={"text-primary"} size={28} />
              ) : (
                <Heart className={"text-dark"} size={28} />
              )}
            </KeepBtn>
          </Card.Header>
          <Card.Body className="px-4">
            <span className="text-info fw-bold" style={{ fontSize: "12px" }}>
              {furigana}
            </span>
            <Card.Title>
              <p className="pb-3 h1 fw-bold">{name}</p>
            </Card.Title>
            <div className="d-flex justify-content-between">
              <div className="d-flex align-items-center">
                <PencilSquare size={21} className="text-dark me-2" />
                <p className="text-secondary fw-bold mb-0">{maker}</p>
              </div>
              <div className="d-flex align-items-center">
                <GeoAlt size={21} className="text-dark me-2" />
                <p className="text-secondary fw-bold mb-0">{area}</p>
              </div>
            </div>
          </Card.Body>
        </Card>
      </a>
    </>
  );
};

export default SakeCardA;
