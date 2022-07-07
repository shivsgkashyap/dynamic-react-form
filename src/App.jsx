import Form from "./Form.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Form
        sections={[
          [
            {
              name: "name",
              type: "name",
              initialValue: "",
              errorMessageFunction: (value) =>
                !value ? "This field is required" : null,
            },
          ],
          [
            {
              name: "address",
              type: "address",
              initialValue: "",
              errorMessageFunction: (value) =>
                !value ? "This field is required" : null,
            },
          ],
        ]}
      />
    </div>
  );
}

export default App;
