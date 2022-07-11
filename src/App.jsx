import Form from "./Form.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Form
        sections={[
          {
            name: "firstName",
            type: "firstName",
            initialValue: "",
            errorMessageFunction: (value) =>
              !value ? "This field is random!" : null,
          },
          {
            name: "lastName",
            type: "lastName",
            initialValue: "",
            errorMessageFunction: (value) =>
              !value ? "This field is required" : null,
          },
          {
            name: "address-one",
            type: "address-one",
            initialValue: "",
            errorMessageFunction: (value) =>
              !value ? "This field is required" : null,
          },
          {
            name: "address-two",
            type: "address-two",
            initialValue: "",
            errorMessageFunction: (value) =>
              !value ? "This field is required" : null,
          },
          {
            name: "state",
            type: "state",
            initialValue: "",
            errorMessageFunction: (value) =>
              !value ? "This field is required" : null,
          },
          {
            name: "postcode",
            type: "postcode",
            initialValue: "",
            errorMessageFunction: (value) =>
              !value ? "This field is required" : null,
          },
        ]}
      />
    </div>
  );
}

export default App;
