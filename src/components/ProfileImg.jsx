import myImg from "../img/myImg.png";

export default function ProfileImg(props) {
  return (
    <div>
      <img src={myImg} alt={props.alt} className="profile-img" />
    </div>
  );
}
