import useReducerCustom from "./useReducer";

function Reducer() {
  const {
    state,
    newUser,
    setNewUser,
    dispatch,
    addUser,
  } = useReducerCustom();

  return (
    <>
      <h4>useReducer()</h4>

      <h5>Counter</h5>
      <button onClick={() => dispatch({ type: "increment" })}>Count {state.count}</button>
      -------------------------------------------------------------------------------------------
      <h5>Change name</h5>
      Name: {state.name}
      <input value={state.name} onChange={e => dispatch({ type: "changeName", value: e.target.value })} />
      -------------------------------------------------------------------------------------------
      <h5>Add user</h5>
      Name: <input value={newUser?.name ?? ""} onChange={e => setNewUser({...newUser, name: e.target.value})} />
      Age: <input type="number" value={newUser?.age ?? ""} onChange={e => setNewUser({...newUser, age: e.target.value})}/>
      <br/>
      <button onClick={addUser}>Add user</button>
      <h6>User list</h6>
      {state.users.map(user => <div key={user.id}>{user.name} | {user.age} years</div>)}
    </>
  );
}

export default Reducer;
