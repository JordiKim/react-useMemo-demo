import { useState, useMemo } from "react";
import "./App.css";

const expensiveFunction = (number) => {
  for (let i = 0; i < 1000000000; i++) {}
  return number * 10;
};

// const ManyItem = () => {
//   console.log("ManyItem Render...");
//   const array = new Array(100).fill(1);
//   return (
//     <>
//       {array.map((_, i) => (
//         <p>{i}</p>
//       ))}
//     </>
//   );
// };

// 使用useMemo將運算結果暫存起來
// 使用useMemo需要額外空間暫存資料，因此除非是需要很大量計算的function，否則不要濫用，會破壞效能，但如果是用在需要大量計算的function上則可獲得更好的效能
function App() {
  const [value, setValue] = useState("");

  console.log("App Render...");

  const expensiveValue = useMemo(() => {
    expensiveFunction(10);
  }, []);

  const ManyItem = useMemo(() => {
    console.log("ManyItem Render...");
    const array = new Array(100).fill(1);
    return (
      <>
        {array.map((_, i) => (
          <p>{i}</p>
        ))}
      </>
    );
  }, [value]);

  return (
    <div className="App">
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      <p>{value}</p>
      <p>expensiveValue:{expensiveValue}</p>
      {/* <ManyItem /> */}
      {ManyItem}
    </div>
  );
}

export default App;
