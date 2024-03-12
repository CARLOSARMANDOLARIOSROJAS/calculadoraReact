import { useState } from 'react'
import './App.css'; // Importa un archivo de estilos CSS externo

function App() {
  const [result, setResult] = useState(0)
  const [value1, setValue1] = useState('')
  const [value2, setValue2] = useState('')
  const [resultClass, setResultClass] = useState('') // Estado para la clase del resultado


  const handleSum = () => {
    setResult(value1 + value2)
    
  }

  const handleSub = () => {
    setResult(value1 - value2)
  }

  const handleMult = () => {
    setResult(value1 * value2)
  }

  const handleDiv = () => {
    setResult(value1 / value2)
  }

  return (
    <div className="calculator">
      <h1>Calculadora</h1>

      <input type="text" value={value1} onChange={(e) => setValue1(Number(e.target.value))} />
      <input type="text" value={value2} onChange={(e) => setValue2(Number(e.target.value))} />
      <div className="botones">
      <button className="operation-button" onClick={() => { handleSum(); setResultClass('animated'); }}>+</button>
      <button className="operation-button" onClick={() => { handleSub(); setResultClass('animated'); }}>-</button>
      <button className="operation-button" onClick={() => { handleMult(); setResultClass('animated'); }}>*</button>
      <button className="operation-button" onClick={() => { handleDiv(); setResultClass('animated'); }}>/</button>
      </div>
      <h2 className={`result ${resultClass}`}>Resultado: {result}</h2>

    </div>
  )
}

export default App
