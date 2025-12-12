import { useMyStore } from "./app/useMyStore"

function App() {
  const { count, increment, decrement } = useMyStore()
  // we can also use this technique for getting action from store (better for preventing unnecessary re-render)
  const name = useMyStore((state) => state.name)
  const setName = useMyStore((state) => state.setName)

  return (
    <div>
      <div>count: {count}</div>
      <button onClick={increment}>++</button>
      <button onClick={decrement}>--</button>

      <div>name: {name}</div>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
    </div>
  )
}

export default App
