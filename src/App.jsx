import Form from "./Form.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Form
        sections={[
          [
            {
              label: "Full Name",
              name: "firstName",
              type: "firstName",
              initialValue: "",
              errorMessageFunction: (value) =>
                !value ? "This field is random!" : null,
              subLabel: "First Name",
              half: "50",
            },
            {
              name: "lastName",
              type: "lastName",
              initialValue: "",
              errorMessageFunction: (value) =>
                !value ? "This field is required" : null,
              subLabel: "Last Name",
              half: 50,
            },
          ],
          [
            {
              label: "Address",
              name: "address-one",
              type: "address-one",
              initialValue: "",
              errorMessageFunction: (value) =>
                !value ? "This field is required" : null,
              subLabel: "Address Line One",
            },
            {
              name: "address-two",
              type: "address-two",
              initialValue: "",
              errorMessageFunction: (value) =>
                !value ? "This field is required" : null,
              subLabel: "Address Line Two",
            },
            {
              name: "state",
              type: "state",
              initialValue: "",
              errorMessageFunction: (value) =>
                !value ? "This field is required" : null,
              subLabel: "State",
            },
            {
              name: "postcode",
              type: "postcode",
              initialValue: "",
              subLabel: "Postcode",
            },
          ],
        ]}
      />
    </div>
  );
}

export default App;
