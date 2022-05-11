import IconEmail from "../img/Icon.png";
import IconLinkedin from "../img/Icon.png";

export default function ButtonLink(props) {
  return (
    <div>
      <button className="btnEmail">
        <img src={IconEmail} alt={props.alt} />
        Email
      </button>
      <button className="btnLinkdin">
        <img src={IconLinkedin} alt={props.alt} />
        Linkedin
      </button>
    </div>
  );
}
