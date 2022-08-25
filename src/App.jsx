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
              type: "smallTextBox",
              initialValue: "",
              errorMessageFunction: (value) =>
                !value ? "This field is required" : null,
              subLabel: "First Name",
              width: "47",
            },
            {
              name: "lastName",
              type: "smallTextBox",
              initialValue: "",
              errorMessageFunction: (value) =>
                !value ? "This field is required" : null,
              subLabel: "Last Name",
              width: "47",
            },
          ],
          [
            {
              label: "Address",
              name: "address-one",
              type: "smallTextBox",
              initialValue: "",
              errorMessageFunction: (value) =>
                !value ? "This field is required" : null,
              subLabel: "Address Line One",
            },
            {
              name: "address-two",
              type: "smallTextBox",
              initialValue: "",
              errorMessageFunction: (value) =>
                !value ? "This field is required" : null,
              subLabel: "Address Line Two",
            },
            {
              name: "state",
              type: "smallTextBox",
              initialValue: "",
              errorMessageFunction: (value) =>
                !value ? "This field is required" : null,
              subLabel: "State",
              width: "47",
            },
            {
              name: "postcode",
              type: "smallTextBox",
              initialValue: "",
              subLabel: "Postcode",
              width: "47",
            },
          ],
          [
            {
              label: "Phone Number",
              name: "number",
              type: "smallTextBox",
              placeHolder: "(000) 000-0000",
              initialValue: "",
              errorMessageFunction: (value) =>
                !value ? "This field is random!" : null,
              width: "47",
            },
          ],
          [
            {
              label: "E-mail",
              name: "email",
              type: "smallTextBox",
              placeHolder: "ex: example@hotmail.com",
              initialValue: "",
              subLabel: "example@example.com",
              width: "47",
            },
          ],
          [
            {
              label: "How did you hear about us?",
              name: "hearDropdown",
              type: "dropdown",
              initialValue: "",
              options: ["Newspaper", "Internet", "Magazine", "Social Media"],
              width: "47",
            },
          ],
          [
            {
              label: "Feedback about us:",
              name: "feedback",
              type: "largeTextBox",
              initialValue: "",
            },
          ],
          [
            {
              label: "Suggestions if any for further improvement:",
              name: "feedback",
              type: "largeTextBox",
              initialValue: "",
            },
          ],
          [
            {
              label: "Will you be willing to recommend us?",
              name: "recommend",
              type: "checkbox",
              options: ["Yes", "Maybe", "No"],
              initialValue: "",
            },
          ],
          [
            {
              label: "Please give reference of any two people whom you feel:",
              name: "twoReferences",
              type: "referenceBox",
              options: ["First Name", "Last Name", "Address"],
              initialValue: "",
            },
          ],
        ]}
      />
    </div>
  );
}

export default App;
