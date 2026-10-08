import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  header: ReactNode;
  footer: ReactNode;
};

function Child({ header, children, footer }: Props) {
  return (
    <>
      <h5>{header}</h5>
      {children}
      <h5>{footer}</h5>
    </>
  );
}

export default Child;
