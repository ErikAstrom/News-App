import { Toolbar } from "../components/toolbar";
import styles from "../styles/EOM.module.css";

export const EOM = ({ employee }) => {
  console.log(employee);
  return (
    <div className="page-container">
      <Toolbar />
      <div className={styles.main}>
        <h1> Employee Of The Month</h1>

        <div className={styles.employeeOfTheMonth}>
          <h3> Eckelito </h3>
          <h6>{employee.position}</h6>
          <img src="https://avatars.githubusercontent.com/u/61084618?s=400&u=390f3db4e5da6e0fbd16b1e93c6def0169d32b6d&v=4" />
          <p>{employee.description}</p>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async (pageContext) => {
  const apiResponse = await fetch(
    "https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth"
  );
  const employee = await apiResponse.json();

  return {
    props: {
      employee,
    },
  };
};

export default EOM;
