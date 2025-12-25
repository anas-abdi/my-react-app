import { useState } from "react";

 function Inputer() {
  const [value, setValue] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Type something..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <p>You typed: {value}</p>
    </div>
  );
}

export default Inputer;
