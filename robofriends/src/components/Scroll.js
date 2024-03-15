const Scroll = (props) => {
  return (
    <div
      style={{
        border: "5px solid black",
        height: "500px",
        overflowY: "scroll",
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
