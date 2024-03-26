export default function CoreConcepts(props) {
  return (
    <li>
      <img src={props.imgs} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
    </li>
  );
}
