import { useParams } from "react-router-dom";
import {Button} from "react-bootstrap";

const ThankYou = () => {
  const { name } = useParams();
  console.log(name);

  return (
    <>
      <h1>
        Thank you <b>{name}</b> for your email! <br /> We will be in contact
        soon!
      </h1>
      <Button href="/">Back to Designing Glory Website</Button>
    </>
  );
};
export default ThankYou;
