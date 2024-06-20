import React, { useState, useEffect } from "react";
import { Table } from "antd";
import axios from "axios";

const StaffTable = () => {
  const [staffData, setStaffData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const API_URL = "/api/staff"; // Placeholder URL

    axios.get(API_URL)
      .then(response => {
        setStaffData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("There was an error fetching the staff data!", error);
        setLoading(false);
      });
  }, []);

//   const staffData = [
//     {
//       id: 1,
//       name: "John Doe",
//       age: 30,
//       gender: "Male",
//       contact: "123-456-7890",
//       address: "123 Main St, City",
//       education: "Bachelor's Degree"
//     },
//     {
//       id: 2,
//       name: "Jane Smith",
//       age: 25,
//       gender: "Female",
//       contact: "987-654-3210",
//       address: "456 Elm St, Town",
//       education: "Master's Degree"
//     },
//     // Add more objects as needed
//   ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
    },
    {
      title: 'Contact',
      dataIndex: 'contact',
      key: 'contact',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Education',
      dataIndex: 'education',
      key: 'education',
    },
    // Add more columns as needed
  ];

  return (
    <Table
      columns={columns}
      dataSource={staffData}
      loading={loading}
      rowKey="id"
    />
  );
};

export default StaffTable;
