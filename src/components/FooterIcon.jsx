import iconFacebook from "../img/FacebookIcon.png";
import iconGithub from "../img/GitHubIcon.png";
import TwitterIcon from "../img/TwitterIcon.png";

export default function (props) {
  return (
    <div>
      <footer className="footer">
        <img src={iconFacebook} alt={props.alt} className="facebook" />
        <img src={iconGithub} alt={props.alt} className="github" />
        <img src={TwitterIcon} alt={props.alt} className="twitter" />
      </footer>
    </div>
  );
}
