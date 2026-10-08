import React from "react";

interface Props {
  name: string;
  onClick: () => void;
};

const Child = React.memo(function Child({ name, onClick }: Props) {
  console.log('Child was rendered');

  return (
    <>
      This is the user: {name}
      <button onClick={onClick}>Click</button>
    </>
  );
});

export default Child;
