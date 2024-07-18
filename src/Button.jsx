export default function Button({ children, ...props }) {
  // Todo: Build this component!
  // !!! Important:
  // Wrap the icon with a <span className="button-icon"> to achieve the target look
  // Also wrap the children prop with a <span>
  // console.log(children);
  // console.log(props.Icon);

  if (props.mode === "filled") {
    return <button className="filled-button">{children}</button>;
  } else if (props.mode === "outline") {
    return <button className="outline-button">{children}</button>;
  } else if (props.mode === "text") {
    return <button className="text-button">{children}</button>;
  } else if (props.mode === "filled" && disabled) {
    return (
      <button className="filled-button" disabled={props.disabled}>
        {children}
      </button>
    );
  } else if (props) return <button {...props}>{children}</button>;
  // else if (props.Icon) {
  //   console.log(props.Icon);
  //   return;
  // (
  //   <button>
  //     <span className="button-icon">
  //       <Icon>
  //         <span>{children}</span>
  //       </Icon>
  //     </span>
  //   </button>
  // );

  return <button>{children}</button>;
}
