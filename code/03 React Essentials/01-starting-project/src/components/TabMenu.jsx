export default function TabMenu(props) {
  return (
    <li>
      <button onClick={props.onSelect}>{props.children}</button>
    </li>
  );
}
