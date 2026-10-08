interface Props {
  onClick: () => void;
};

function Child({ onClick }: Props) {
  return (
    <>
      <h4>Child</h4>
      <button onClick={onClick}>Click to parent</button>
    </>
  );
}

export default Child;
