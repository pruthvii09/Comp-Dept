import React, { useEffect, useRef, useState } from "react";
import styles from "../../Styles/components/AllStudents.module.css";
import { useDownloadExcel } from "react-export-table-to-excel";
const Survey = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState("");
  const tableRef = useRef(null);
  const { onDownload } = useDownloadExcel({
    currentTableRef: tableRef.current,
    filename: "Survey",
    sheet: "Survey",
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:4000/api/score`);
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
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className={styles.ordersContainer}>
        <table ref={tableRef}>
          <tr>
            <th>ID</th>
            <th>Name Of Student</th>
            <th>Email</th>
            <th>Submitted At</th>
          </tr>
          {Array.isArray(data?.survey) &&
            data.survey.map(
              (surveyItem) =>
                Array.isArray(surveyItem?.attende) &&
                surveyItem.attende.map((attendeItem) => {
                  // Convert timestamp to date forma
                  const submitDate = new Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                  }).format(attendeItem.submittedAt);

                  return (
                    <tr className={styles.orderData} key={attendeItem._id}>
                      <td>{attendeItem.id}</td>
                      <td>{attendeItem.name}</td>
                      <td>{attendeItem.email}</td>
                      <td>{submitDate}</td> {/* Use the formatted date */}
                      {/* Add other table cells as needed */}
                    </tr>
                  );
                })
            )}
        </table>
      </div>
      <button onClick={onDownload} className={styles.download}>
        Download Excel
      </button>
    </div>
  );
};

export default Survey;
