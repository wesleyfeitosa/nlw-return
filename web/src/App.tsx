interface ButtonProps {
  text?: string;
}

function Button(props: ButtonProps) {
  return <button>{props.text ?? 'Default'}</button>;
}

function App() {
  return (
    <div className="App">
      <Button text="Enviar" />
      <Button text="Ok" />
      <Button />
    </div>
  );
}

export default App;
