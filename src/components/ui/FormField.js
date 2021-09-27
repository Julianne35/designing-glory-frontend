import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import styles from "./FormStyles.module.css";

const FormField = () => {
  return (
    <>
      <Form className={styles["form"]}>
        <Row>
          <Form.Group as={Col} sm={12} md={6} controlId="formGridEmail">
            <Form.Control
              className={styles["email"]}
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Control
              className={styles["password"]}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
        </Row>

        <Form.Group controlId="formGridAddress1">
          <Form.Control className={styles["address"]} placeholder="Address" />
        </Form.Group>

        <Form.Group controlId="formGridAddress2">
          <Form.Control
            className={styles["address2"]}
            placeholder="Apt Number"
          />
        </Form.Group>

        <Row>
          <Form.Group as={Col} sm={12} md={4} controlId="formGridCity">
            <Form.Control className={styles["city"]} placeholder="City" />
          </Form.Group>

          <Form.Group as={Col} sm={12} md={4} controlId="formGridState"
          >
            <Form.Select className={styles["state"]} defaultValue="Choose...">
              <option>Choose...</option>
              <option>NY</option>
            </Form.Select>
          </Form.Group>

          <Form.Group
            as={Col}
            controlId="formGridZip"
          >
            <Form.Control lg={4} className={styles["zip"]} placeholder="Zip"/>
          </Form.Group>
        </Row>

        {/* <Form.Group className={styles["checkbox"]} id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}

        <Button className={styles["submit-btn"]} type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};
export default FormField;
