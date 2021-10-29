import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./style.css";

const ThankYou = () => {
  const { name } = useParams();
  console.log(name);

  return (
    <>
      <h1>
        Thank you <b>{name}</b> for your email! <br /> We will be in contact
        soon!
      </h1>
      <Button variant={"warning"} href="/">Back to Designing Glory Website</Button>
    </>
  );
};
export default ThankYou;
