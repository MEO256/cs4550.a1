import "./index.css";
import ForegroundColors from "./ForegroundColors";
import Borders from "./Borders";
import BackgroundColors from "./BackgroundColors";
import Padding from "./Padding";
import Margins from "./Margins";
import Corners from "./Corners";
import Dimension from "./Dimension";
import Positions from "./Positions";
import Zindex from "./ZIndex";
import Float from "./Float";
import GridLayout from "./GridLayout";
import Flex from "./Flex";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import ScreenSizeLabel from "./ScreenSizeLabel";
import BootstrapTables from "./BootstrapTables";
import BootstrapLists from "./BootstrapLists";
import BootstrapForms from "./BootstrapForms";
import BootstrapNavigation from "./BootstrapNavigation";


export default function Lab2() {
  return (
    <Container>
      <h2>Lab 2 - Cascading Style Sheets</h2>
      <h3>Styling with the STYLE attribute</h3>
      <p>
        Style attribute allows configuring look and feel
        right on the element. Although it's very convenient
        it is considered bad practice and you should avoid
        using the style attribute
      </p>
      <div id="wd-css-id-selectors">
        <h3>ID selectors</h3>
        <p id="wd-id-selector-1">
Instead of changing the look and feel of all the 
elements of the same name, e.g., P, we can refer to a specific element by its ID
        </p>
        <p id="wd-id-selector-2">
Here's another paragraph using a different ID and a different look and
          feel
        </p>
      </div>
      <div id="wd-css-class-selectors">
  <h3>Class selectors</h3>

  <p className="wd-class-selector">
Instead of using IDs to refer to elements, you can use an element's CLASS attribute
  </p>

  <h4 className="wd-class-selector">
This heading has same style as paragraph above
  </h4>

</div>
<div id="wd-css-document-structure">
  <div className="wd-selector-1">
    <h3>Document structure selectors</h3>
    <div className="wd-selector-2">
      Selectors can be combined to refer elements in particular
      places in the document
      <p className="wd-selector-3">
        This paragraph's red background is referenced as
        <br />
        .selector-2 .selector3<br />
        meaning the descendant of some ancestor.<br />
        <span className="wd-selector-4">
          Whereas this span is a direct child of its parent
        </span><br />
          You can combine these relationships to create specific 
          styles depending on the document structure
      </p>
    </div>
  </div>
</div>
<div>
      <ForegroundColors />
    </div>
    <div>
      <BackgroundColors />
    </div>
    <div>
      <Borders />
    </div>
    <div>
      <Padding />
    </div>
    <div>
      <Margins />
    </div>
    <div>
      <Corners />
    </div>
    <div>
      <Dimension />
    </div>
    <div>
      <Positions />
    </div>
    <div>
      <Zindex />
    </div>
    <div>
      <Float />
    </div>
    <div>
      <GridLayout />
    </div>
    <div>
      <Flex />
    </div>
    <h2>Bootstrap</h2>
<div id="wd-bs-grid-system">
  <h2>Grid system</h2>
  <Row>
    <Col className="bg-danger text-white">
      <h3>Left half</h3>
    </Col>
    <Col className="bg-primary text-white">
      <h3>Right half</h3>
    </Col>
  </Row>
  <Row>
    <Col xs={4} className="bg-warning">
      <h3>One third</h3>
    </Col>
    <Col xs={8} className="bg-success text-white">
      <h3>Two thirds</h3>
    </Col>
  </Row>
  <Row>
    <Col xs={2} className="bg-black text-white">
      <h3>Sidebar</h3>
    </Col>
    <Col xs={8} className="bg-secondary text-white">
      <h3>Main content</h3>
    </Col>
    <Col xs={2} className="bg-info">
      <h3>Sidebar</h3>
    </Col>
  </Row>
</div>
<div id="wd-bs-responsive-grids">
  <h2>Responsive grid system</h2>
  <Row>
    <Col xs={12} md={6} xl={3}
         className="bg-warning">
         <h3>Column A</h3>
    </Col>
    <Col xs={12} md={6} xl={3}
         className="bg-primary text-white">
         <h3>Column B</h3>
    </Col>
    <Col xs={12} md={6} xl={3}
         className="bg-danger text-white">
         <h3>Column C</h3>
    </Col>
    <Col xs={12} md={6} xl={3}
         className="bg-success text-white">
         <h3>Column D</h3>
    </Col>
  </Row>
</div>
<div id="wd-bs-responsive-dramatic">
  <h2>Responsive grid system</h2>
  <Row>
    <Col xs={12} sm={6} md={4} lg={3} xl={2} xxl={1} 
         className="bg-warning">
         <h4>1</h4></Col>
    <Col xs={12} sm={6} md={4} lg={3} xl={2} xxl={1}
         className="bg-primary text-white">
         <h4>2</h4></Col>
    <Col xs={12} sm={6} md={4} lg={3} xl={2} xxl={1}
         className="bg-danger text-white">
         <h4>3</h4></Col>
    <Col xs={12} sm={6} md={4} lg={3} xl={2} xxl={1}
         className="bg-success text-white">
         <h4>4</h4></Col>
    <Col xs={12} sm={6} md={4} lg={3} xl={2} xxl={1}
         className="bg-warning">
         <h4>5</h4></Col>
    <Col xs={12} sm={6} md={4} lg={3} xl={2} xxl={1}
         className="bg-primary text-white">
         <h4>6</h4></Col>
    <Col xs={12} sm={6} md={4} lg={3} xl={2} xxl={1}
         className="bg-danger text-white">
         <h4>7</h4></Col>
    <Col xs={12} sm={6} md={4} lg={3} xl={2} xxl={1}
         className="bg-success text-white">
         <h4>8</h4></Col>
    <Col xs={12} sm={6} md={4} lg={3} xl={2} xxl={1}
         className="bg-warning">
         <h4>9</h4></Col>
    <Col xs={12} sm={6} md={4} lg={3} xl={2} xxl={1}
         className="bg-primary text-white">
         <h4>10</h4></Col>
    <Col xs={12} sm={6} md={4} lg={3} xl={2} xxl={1}
         className="bg-danger text-white">
         <h4>11</h4></Col>
   <Col  xs={12} sm={6} md={4} lg={3} xl={2} xxl={1}
         className="bg-success text-white">
         <h4>12</h4></Col>
   </Row>
</div>
<div>
      <ScreenSizeLabel />
    </div>
    <div>
      <BootstrapTables />
    </div>
    <div>
      <BootstrapLists />
    </div>
    <div>
      <BootstrapForms />
    </div>
    <div>
      <BootstrapNavigation />
    </div>

    </Container>);
}
