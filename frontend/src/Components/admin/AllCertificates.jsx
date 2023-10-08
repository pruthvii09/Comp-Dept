import React, { useEffect, useState } from "react";
import styles from "../../Styles/components/AllStudents.module.css";
const AllCertificates = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState("");
  const [recieved, setRecieved] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:4000/api/certificate`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setData(jsonData);
        console.log(data);
        console.log(jsonData);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  const handleEdit = async (id, status) => {
    console.log(status);
    try {
      const response = await fetch(
        `http://localhost:4000/api/certificate/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ recieved: !status }), // Toggle the value
        }
      );

      if (!response.ok) {
        throw new Error("Toggle failed");
      }
      window.location.reload();
    } catch (error) {
      console.error("Toggle failed:", error);
    }
  };
  return (
    <div>
      <div className={styles.ordersContainer}>
        <table>
          <tr>
            <th>ID</th>
            <th>Name Of Student</th>
            <th>Month Of Exam</th>
            <th>Year of Exam</th>
            <th>PRN No.</th>
            <th>User ID</th>
            <th>Recieve Status</th>
          </tr>
          {Array.isArray(data?.certificate) &&
            data.certificate.map((item) => (
              <tr className={styles.orderData} key={item._id}>
                {/* Add a unique key for each item */}
                <td>{item._id}</td>
                <td>{item.name}</td>
                <td>{item.month}</td>
                <td>{item.year}</td>
                <td>{item.prn}</td>
                <td>{item.user}</td>
                <td className={styles.editStatus}>
                  <button
                    className={
                      item.recieved
                        ? `${styles.btn} ${styles.green}`
                        : `${styles.btn} ${styles.red}`
                    }
                    onClick={() => handleEdit(item._id, item.recieved)}
                  >
                    {item.recieved ? "Yes" : "No"}
                  </button>
                </td>
              </tr>
            ))}
        </table>
      </div>
    </div>
  );
};

export default AllCertificates;
