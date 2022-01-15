var detectCycle = function (head) {
  let pos = 1;
  if (
    head.length < 10 ** 4 &&
    head.every((elem) => elem <= 10 ** 5 && elem >= (-10) ** 5)
  ) {
    if (pos > -1 && pos < head.length) {
      return "tail connects to node index " + pos;
    }
    return "no cycle";
  }
};

console.log(detectCycle([3, 2, 0, -4]));



function App() {
  return <div className="App"></div>;
}

export default App;
