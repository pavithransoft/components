import { useState } from "react";
import { FaClipboardList } from "react-icons/fa";

function App() {
  const [copied, setCopied] = useState(false);

  const code = `
import { useState } from "react";
import { FaClipboardList } from "react-icons/fa";

function App() {
  const [copied, setCopied] = useState(false);

  const code = ${"`"} 
  function App() {
    return (
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    )
  }

  export default App;  
  ${"`"};

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code.trim()).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  
  return (
    <div className="bg-gray-900 text-white h-screen p-48">
      <div className="w-full max-w-4xl bg-gray-800 rounded-lg shadow-lg">
        <div className="flex items-center justify-between bg-gray-700 p-2 rounded-t-lg">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <span className="text-sm text-gray-300">
            ClipBoard.jsx - Visual Studio Code
          </span>
            <FaClipboardList
              className={${"`"}h-5 w-5 cursor-pointer transition-colors ${"${"}
                copied ? "fill-green-400" : "fill-gray-400"
              }${"`"}}
              onClick={copyToClipboard}
          />
        </div>
        <div className="bg-gray-900 pl-6 rounded-b-lg overflow-hidden">
          <pre className="text-sm leading-relaxed scrollbar-custom overflow-y-scroll h-64">
            <code className="block">
              {code
                .trim()
                .split("n")
                .map((line, index) => (
                  <div key={index} className="flex">
                    <span className="text-gray-500 pr-4 select-none">
                      {index + 1}
                    </span>
                    <span className="text-gray-200">{line}</span>
                  </div>
                ))}
            </code>
          </pre>
        </div>
      </div>
    </div>
  )
}

export default App;
`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code.trim()).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="bg-white text-black h-screen px-96 py-32">
      <div className="w-full max-w-4xl bg-gray-800 rounded-lg shadow-lg">
        <div className="flex items-center justify-between bg-gray-700 p-2 rounded-t-lg">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <span className="text-sm text-gray-300">
            ClipBoard.jsx - Visual Studio Code
          </span>
          <div className="relative inline-block">
            <FaClipboardList
              className={`peer h-5 w-5 cursor-pointer transition-colors duration-300 ${
                copied ? "fill-green-500" : "fill-slate-300"
              }`}
              onClick={copyToClipboard}
            />
            <div className="absolute left-1/2 bottom-10 transform -translate-x-1/2 mt-2 p-2 bg-gray-800 text-white text-sm rounded shadow-lg opacity-0 peer-hover:opacity-100 transition-opacity duration-150 ease-in-out whitespace-pre">
              {copied ? "Copied!" : "Click to copy"}
            </div>
          </div>
        </div>
        <div className="bg-gray-900 pl-6 rounded-b-lg overflow-hidden">
          <pre className="text-sm leading-relaxed scrollbar-custom overflow-y-scroll h-96">
            <code className="block">
              {code
                .trim()
                .split("\n")
                .map((line, index) => (
                  <div key={index} className="flex">
                    <span className="text-gray-500 pr-4 select-none">
                      {index + 1}
                    </span>
                    <span className="text-gray-200">{line}</span>
                  </div>
                ))}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}

export default App;
