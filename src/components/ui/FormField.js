import axios from "axios";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import styles from "./FormStyles.module.css";

const FormField = () => {
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
    // watch
  } = useForm();
  const onSubmit = (data, e) => {
    e.preventDefault();
    axios({
      method: "POST",
      //url: "http://localhost:5000/get-email",
      url: "https://aws.backend-dg.com:3001/get-email",
      data,
    }).then((response) => {
      history.push(`/thankyou/${data.name}`);
      console.log(response.data);
    });
  };
  // console.log(watch());
  console.log("errors", errors);

  return (
    <>
      <Form
        id="contact"
        onSubmit={handleSubmit(onSubmit)}
        className={styles["form"]}
        action="contact_send.php"
        method="POST"
        autoComplete="on"
        title="Contact"
      >
        <Row>
          <Form.Group as={Col} sm={12} md={6} controlId="formGridEmail">
            <Form.Control
              className={styles["email"]}
              name="email"
              type="email"
              ref={register}
              placeholder="Enter Email"
              {...register("email", {
                required: "Email is required",
                minLength: {
                  value: 3,
                  message: "Min length is 2",
                },
                maxLength: { value: 44, message: "Exceeded max length" },
                pattern: {
                  value:
                    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <div className={styles["email"]}>
                <svg
                  className={styles["error"]}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10
                           10-4.48 10-10S17.52 2 12 2zm1 
                           15h-2v-2h2v2zm0-4h-2V7h2v6z"
                  />
                </svg>
                {errors.email.message}
              </div>
            )}
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Control
              className={styles["name"]}
              name="name"
              type="name"
              ref={register}
              placeholder="Enter Name"
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 3,
                  message: "Please enter more then two characters",
                },
                maxLength: { value: 34, message: "You exceeded max length" },
                pattern: {
                  value: /^[A-Za-z][A-Za-z\\-]+([A-Za-z][A-Za-z'-]+)*/,
                  message: "invalid name format",
                },
              })}
            />
            {errors.name && (
              <div className={styles["name"]}>
                <svg
                  className={styles["error"]}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10
                       10-4.48 10-10S17.52 2 12 2zm1 
                       15h-2v-2h2v2zm0-4h-2V7h2v6z"
                  />
                </svg>
                {errors.name.message}
              </div>
            )}
          </Form.Group>
        </Row>

        <Form.Control
          as="textarea"
          name="textarea"
          type="text"
          ref={register}
          rows={3}
          placeholder="Enter Message"
          {...register("textarea")}
        />
        <Button variant="light" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};
export default FormField;
