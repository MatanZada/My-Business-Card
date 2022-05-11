export default function Details() {
  let myNameCard = "Matan Zada";
  let myEmployment = "Full Stack Developer";
  return (
    <div>
      <h1 className="details-card-h1">{myNameCard}</h1>
      <p className="details-card-p">{myEmployment}</p>
    </div>
  );
}
