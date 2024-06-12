import React, { useState, useEffect } from "react";
import { Table } from "antd";
import axios from "axios";

const StaffList = () => {
  const [staffDetails, setStaffDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const API_URL = "/api/doctor"; // Placeholder URL

    axios.get(API_URL)
      .then(response => {
        setStaffDetails(response.data);
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
    <div className="mx-auto max-w-7xl mt-8">
      <h3 className="text-center mb-4">List of Staffs</h3>
      <Table
      columns={columns}
      dataSource={staffDetails}
      loading={loading}
      rowKey="id"
    />
    </div>
  )
}

export default StaffList;
