import { useState } from 'react'
import './App.css'; // Importa un archivo de estilos CSS externo

function App() {
  const [result, setResult] = useState(0)
  const [value1, setValue1] = useState('')
  const [value2, setValue2] = useState('')


  const handleSum = () => {
    setResult(parseFloat(value1) + parseFloat(value2))
    
  }

  const handleSub = () => {
    setResult(parseFloat(value1) - parseFloat(value2))
  }

  const handleMult = () => {
    setResult(parseFloat(value1) * parseFloat(value2) )
  }

  const handleDiv = () => {
    setResult(parseFloat(value1) / parseFloat(value2))  
  }

  return (
    <div className="calculator">
      <h1>Calculadora</h1>

      <input type="text" value={value1} onChange={(e) => setValue1((e.target.value))} />
      <input type="text" value={value2} onChange={(e) => setValue2((e.target.value))} />
      <div className="botones">
      <button className="operation-button" onClick={() => { handleSum(); }}>+</button>
      <button className="operation-button" onClick={() => { handleSub(); }}>-</button>
      <button className="operation-button" onClick={() => { handleMult(); }}>*</button>
      <button className="operation-button" onClick={() => { handleDiv(); }}>/</button>
      </div>
      <h2 className="result">Resultado: {result}</h2>

    </div>
  )
}

export default App
