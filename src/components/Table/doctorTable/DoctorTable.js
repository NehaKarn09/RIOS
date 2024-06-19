import React, { useState, useEffect } from "react";
import { Table } from "antd";
import axios from "axios";

const DoctorTable = () => {
  const [doctorData, setDoctorData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const API_URL = "/api/staff"; // Placeholder URL

    axios.get(API_URL)
      .then(response => {
        setDoctorData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("There was an error fetching the staff data!", error);
        setLoading(false);
      });
  }, []);

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
      dataSource={doctorData}
      loading={loading}
      rowKey="id"
    />
  );
};

export default DoctorTable;