import React, { PureComponent } from "react";
import Customer from "./components/Customer";
import "./App.css";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { withStyles } from "@material-ui/core/styles";
import { render } from "@testing-library/react";

const useStyles = withStyles => ({
  root: {
    width: "100%",
    spacing: { unit: 3 },
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
});

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
    <Paper className={useStyles.root}>
      <Table className={useStyles.table}>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>PROFILE</TableCell>
            <TableCell>NAME</TableCell>
            <TableCell>BIRTHDAY</TableCell>
            <TableCell>GENDER</TableCell>
            <TableCell>JOB</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
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
        </TableBody>
      </Table>
    </Paper>
  );
}

export default withStyles(useStyles)(App);
