import React, { useEffect, useState } from "react";
import Header from "../../Components/Header";
import styles from "../../Styles/pages/AllCertificate/AllCertificate.module.css";
import { useUserContext } from "../../hooks/useUserContext";
const Index = () => {
  const { userData } = useUserContext();
  console.log(userData?._id);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      if (!userData?._id) {
        setLoading(true);
        console.log("userData._id is not available yet.");
        return; // Exit early if _id is not available yet
      }

      try {
        setLoading(true);
        const response = await fetch(
          `http://localhost:4000/api/users/certi/${userData._id}`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const jsonData = await response.json();
        setData(jsonData);
        console.log(jsonData);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [userData]); // Dependency on userData so useEffect runs whenever userData changes
  return (
    <div className={styles.wrapper}>
      <Header>
        <h1>Certiticate Request</h1>
        <p>All Requests Here</p>
      </Header>
      {loading ? (
        <div className={styles.profile_container}>
          <h3>Loading....</h3>
        </div>
      ) : (
        <div className={styles.ordersContainer}>
          <table>
            <tr>
              <th>ID</th>
              <th>Name Of Student</th>
              <th>Month Of Exam</th>
              <th>Year Of Exam</th>
              <th>PRN No</th>
              <th>Recieved</th>
            </tr>
            {Array.isArray(data?.userCertificate) &&
              data.userCertificate.map((item) => (
                <tr className={styles.orderData} key={item._id}>
                  {/* Add a unique key for each item */}
                  <td>{item._id}</td>
                  <td>{item.name}</td>
                  <td>{item.month}</td>
                  <td>{item.year}</td>
                  <td>{item.prn}</td>
                  <td className={styles.editStatus}>
                    <button
                      className={
                        item.recieved
                          ? `${styles.btn} ${styles.green}`
                          : `${styles.btn} ${styles.red}`
                      }
                    >
                      {item.recieved ? "Yes" : "No"}
                    </button>
                  </td>
                </tr>
              ))}
          </table>
        </div>
      )}
    </div>
  );
};

export default Index;
