import { useState } from "react";

const Main = () => {
  const [formula, setFormula] = useState("");
  const [selectedCells, setSelectedCells] = useState(new Set());
  const rows = 10;
  const cols = 10;
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const [data, setData] = useState(
    Array.from({ length: rows }, () => Array(cols).fill(""))
  );

  const handleCellChange = (row, col, value) => {
    const newData = [...data];
    newData[row][col] = value.trim(); // Trim input to remove extra spaces
    setData(newData);
  };

  const handleKeyDown = (e, row, col) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent new line creation
      e.target.blur(); // Remove focus to simulate saving
    }
  };

  const toggleSelection = (row, col) => {
    const key = `${row}-${col}`;
    const newSelectedCells = new Set(selectedCells);
    if (newSelectedCells.has(key)) {
      newSelectedCells.delete(key);
    } else {
      newSelectedCells.add(key);
    }
    setSelectedCells(newSelectedCells);
  };

  const calculateFunction = (type) => {
    const values = Array.from(selectedCells).map((key) => {
      const [row, col] = key.split("-").map(Number);
      return parseFloat(data[row][col]) || 0;
    });
    let result = 0;
    switch (type) {
      case "SUM":
        result = values.reduce((a, b) => a + b, 0);
        break;
      case "AVERAGE":
        result = values.length ? values.reduce((a, b) => a + b, 0) / values.length : 0;
        break;
      case "MAX":
        result = Math.max(...values);
        break;
      case "MIN":
        result = Math.min(...values);
        break;
      case "COUNT":
        result = values.length;
        break;
      default:
        break;
    }
    alert(`${type} Result: ${result}`);
  };

  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 min-h-screen">
      {/* Toolbar */}
      <div className="flex gap-2 p-2 bg-gray-800 text-white w-full justify-center">
        <button className="bg-blue-500 px-4 py-2 rounded" onClick={() => document.execCommand("bold")}>Bold</button>
        <button className="bg-blue-500 px-4 py-2 rounded" onClick={() => document.execCommand("italic")}>Italic</button>
        <button className="bg-blue-500 px-4 py-2 rounded" onClick={() => calculateFunction("SUM")}>SUM</button>
        <button className="bg-blue-500 px-4 py-2 rounded" onClick={() => calculateFunction("AVERAGE")}>AVG</button>
        <button className="bg-blue-500 px-4 py-2 rounded" onClick={() => calculateFunction("MAX")}>MAX</button>
        <button className="bg-blue-500 px-4 py-2 rounded" onClick={() => calculateFunction("MIN")}>MIN</button>
        <button className="bg-blue-500 px-4 py-2 rounded" onClick={() => calculateFunction("COUNT")}>COUNT</button>
      </div>

      {/* Formula Bar */}
      <div className="flex w-4/5 mt-4 p-2 bg-white border border-gray-300">
        <span className="px-4 py-1 bg-gray-200 border-r">fx</span>
        <input
          type="text"
          className="flex-1 p-1 border-none outline-none"
          value={formula}
          onChange={(e) => setFormula(e.target.value)}
          placeholder="Enter formula (e.g., =SUM(A1:A5))"
        />
      </div>
      
      {/* Spreadsheet Grid */}
      <div className="grid mt-4 border border-gray-300" style={{ gridTemplateColumns: `50px repeat(${cols}, 100px)` }}>
        {/* Headers */}
        <div className="bg-gray-200 font-bold flex items-center justify-center border border-gray-300"></div>
        {[...Array(cols)].map((_, col) => (
          <div key={col} className="bg-gray-200 font-bold flex items-center justify-center border border-gray-300">
            {alphabet[col]}
          </div>
        ))}
        {[...Array(rows)].map((_, row) => (
          <>
            <div key={row} className="bg-gray-200 font-bold flex items-center justify-center border border-gray-300">
              {row + 1}
            </div>
            {[...Array(cols)].map((_, col) => (
              <div
                key={`${row}-${col}`}
                className={`border border-gray-300 p-2 text-center cursor-pointer ${selectedCells.has(`${row}-${col}`) ? "outline outline-blue-500" : ""}`}
                contentEditable
                onInput={(e) => handleCellChange(row, col, e.currentTarget.innerText)}
                onClick={() => toggleSelection(row, col)}
                onKeyDown={(e) => handleKeyDown(e, row, col)}
              ></div>
            ))}
          </>
        ))}
      </div>
    </div>
  );
};

export default Main;