import Child from "./Child";

function ChildList() {
  const customHeader = (
    <>
      <p>Helo world!</p>
      <div>
        This is the main information from the header component
      </div>
    </>
  );

  const customFooter = <div>Copyright MC - 2026</div>;

  return (
    <Child
      header={customHeader}
      footer={customFooter}
    >
      Salutare din exterior
    </Child>
  );
}

export default ChildList;
