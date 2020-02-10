import React from "react";

interface Props {
  onSubmit: (name: string) => void;
}
export default function Form(props: Props) {
  const { onSubmit } = props;
  const [name, setName] = React.useState("");
  const handleChange = React.useCallback(
    event => {
      setName(event.target.value);
    },
    [setName]
  );
  const handleSubmit = React.useCallback(
    event => {
      event.preventDefault();
      onSubmit(name);
    },
    [onSubmit, name]
  );

  return (
    <form onSubmit={handleSubmit}>
      <p>
        You're one of the top participants!
      </p>
      <label>
        Name: <input type="text" onChange={handleChange} value={name} />
      </label>
      <button type="submit">Go</button>
    </form>
  );
}
