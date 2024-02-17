import { useEffect, useState, useCallback, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "1234567890";
    if (charAllowed) str += "!@#$%^&*_+";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str[char];
    }
    // console.log(pass);
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  const copyPasswordToClipboard = useCallback(() => {
    console.log(passwordRef.current.value);
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);
  return (
    <>
      <div className="flex justify-center item-middle flex-col bg-gray-700 p-6 rounded-2xl ">
        <h1 className=" text-5xl font-mono font-b">Password Generator</h1>
        <div>
          <input
            ref={passwordRef}
            type="text"
            value={password}
            readOnly
            placeholder="Password"
            className="outline-none w-4/5 py-2 px-4  text-gray-700 bg-gray-200 border border-gray-400 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-White font-bold py-2 px-4 rounded shadow"
            onClick={copyPasswordToClipboard}
          >
            Copy
          </button>
        </div>

        <div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <input
                type="range"
                min={7}
                max={20}
                value={length}
                className="cursor-pointer appearance-none bg-gray-200 h-2 rounded-md w-2/5 mr-3"
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
              <label className="text-white-700">Length: {length}</label>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="numberInput"
                onChange={() => {
                  setNumberAllowed((prev) => !prev);
                }}
                className="form-checkbox h-5 w-5 text-blue-500"
              />
              <label htmlFor="numberInput" className="ml-2 text-white-700">
                Numbers
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="charInput"
                onChange={() => {
                  setCharAllowed((prev) => !prev);
                }}
                className="form-checkbox h-5 w-5 text-blue-500"
              />
              <label htmlFor="charInput" className="ml-2 text-white-700">
                Characters
              </label>
            </div>
          </div>

          {/* <div className="flex items-center">
            <div>
              <input
                type="range"
                min={7}
                max={20}
                value={length}
                className="cursor-pointer appearance-none bg-gray-200 h-2 rounded-md w-2/5 mr-3"
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
              <label className="text-white-700">Length: {length}</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="numberInput"
                onChange={() => {
                  setNumberAllowed(!numberAllowed);
                }}
              />
              <label htmlFor="numberInput">Numbers</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="numberInput"
                onChange={() => {
                  setCharAllowed(!charAllowed);
                }}
              />
              <label htmlFor="numberInput">Characters</label>
            </div>
          </div> */}
        </div>
        <div></div>
      </div>
    </>
  );
}

export default App;
