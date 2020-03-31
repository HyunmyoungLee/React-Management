import React, { PureComponent } from "react";
import Customer from "./components/Customer";
import "./App.css";

const customers = [
  {
    id: 1,
    image: "https://placeimg.com/64/64/1",
    name: "Hyunmyoung Lee",
    birthday: "930902",
    gender: "Male",
    job: "Student"
  },
  {
    id: 2,
    image: "https://placeimg.com/64/64/2",
    name: "Nakyung Lee",
    birthday: "971212",
    gender: "Female",
    job: "Student"
  },
  {
    id: 3,
    image: "https://placeimg.com/64/64/3",
    name: "Myoungsuk Lee",
    birthday: "930902",
    gender: "Female",
    job: "Student"
  }
];
function App() {
  return (
    <div>
      {customers.map(c => {
        return (
          <Customer
            key={c.id}
            id={c.id}
            image={c.image}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job}
          />
        );
      })}
    </div>
  );
}

export default App;
