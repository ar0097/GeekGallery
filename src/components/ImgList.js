import { Container, Row, Col } from "react-bootstrap";
import ImgCard from "./ImgCard";
import Masonry from "react-masonry-css";

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1
};

const ImgList = (props) => {
  return (
    <>
      <Container fluid className="mt-4">
        <Row>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {props.images.map((single_image, idx) => {
              return (
                <Col key={idx}>
                  <ImgCard image_details={single_image} />
                </Col>
              );
            })}
          </Masonry>
        </Row>
      </Container>
    </>
  );
};

export default ImgList;
