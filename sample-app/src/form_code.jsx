import { useState } from "react";

function DemoForm(props) {
  const [name, setName] = useState("");
  const setValue = (e) => {
    setName(e.target.value.toUpperCase()); //converts to upper case
  };
  const handleSubmit = (e) => {
    alert('Here');
    e.preventDefault(); // stop browser refresh
    console.log(name); // use the state value
    setName(""); // clear input after submit
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <p> Input Demo </p>
        <input type="text" value={name} onChange={setValue}></input>
        <button type="submit">Save</button>
      </form>
    </>
  );
}
export default DemoForm;
