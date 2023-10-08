import React, { useEffect, useState } from "react";
import styles from "../../Styles/components/AllStudents.module.css";
import { Trash2 } from "lucide-react";
const AllStudents = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:4000/api/users`);
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
  const handleDelete = async (id) => {
    console.log(id);
    try {
      const response = await fetch(`http://localhost:4000/api/users/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      window.location.reload();
    } catch (error) {
      console.error("Error deleting resource:", error);
    }
  };
  return (
    <div>
      <div className={styles.ordersContainer}>
        <table>
          <tr>
            <th>ID</th>
            <th>Name Of Student</th>
            <th>Email</th>
            <th>ERP ID</th>
            <th>Contact</th>
            <th>Year</th>
            <th>Delete</th>
          </tr>
          {Array.isArray(data?.users) &&
            data.users.map((item) => (
              <tr className={styles.orderData} key={item._id}>
                {/* Add a unique key for each item */}
                <td>{item._id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.erp_id}</td>
                <td>{item.contact}</td>
                <td>{item.year}</td>
                <td className={styles.editStatus}>
                  <Trash2
                    onClick={() => handleDelete(item._id)}
                    color="red"
                    size={18}
                  />
                </td>
              </tr>
            ))}
        </table>
      </div>
    </div>
  );
};

export default AllStudents;
