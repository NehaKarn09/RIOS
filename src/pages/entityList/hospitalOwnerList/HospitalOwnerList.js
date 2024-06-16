// import React, { useState, useEffect } from "react";
// import { Table } from "antd";
// import axios from "axios";

// const HospitalOwnerList = () => {
//   const [ownerDetails, setOwnerDetails] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const API_URL = "/api/doctor"; // Placeholder URL

//     axios.get(API_URL)
//       .then(response => {
//         setOwnerDetails(response.data);
//         setLoading(false);
//       })
//       .catch(error => {
//         console.error("There was an error fetching the staff data!", error);
//         setLoading(false);
//       });
//   }, []);


//   const columns = [
//     {
//       title: 'Name',
//       dataIndex: 'name',
//       key: 'name',
//     },
//     {
//       title: 'Age',
//       dataIndex: 'age',
//       key: 'age',
//     },
//     {
//       title: 'Gender',
//       dataIndex: 'gender',
//       key: 'gender',
//     },
//     {
//       title: 'Contact',
//       dataIndex: 'contact',
//       key: 'contact',
//     },
//     {
//       title: 'Address',
//       dataIndex: 'address',
//       key: 'address',
//     },
//     {
//       title: 'Education',
//       dataIndex: 'education',
//       key: 'education',
//     },
//     // Add more columns as needed
//   ];

//   return (
//     <div className="mx-auto max-w-7xl mt-8">
//       <h3 className="text-center mb-4">List of Hospital Owners</h3>
//       <Table
//       columns={columns}
//       dataSource={ownerDetails}
//       loading={loading}
//       rowKey="id"
//     />
//     </div>
//   )
// }

// export default HospitalOwnerList;


// import React, { useState, useEffect } from "react";
// import { Table } from "antd";
// import axios from "axios";

// const HospitalOwnerList = () => {
//   const [ownerDetails, setOwnerDetails] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const API_URL = "https://merchandise-edt-les-crossing.trycloudflare.com/register/hospital_owner/";

//     axios.get(API_URL)
//       .then(response => {
//         const formattedData = response.data.map(owner => ({
//           id: owner.id,
//           name: `${owner.user.first_name} ${owner.user.last_name}`,
//           email: owner.user.email,
//           phone_number: owner.phone_number,
//         }));
//         setOwnerDetails(formattedData);
//         setLoading(false);
//       })
//       .catch(error => {
//         console.error("There was an error fetching the hospital owner data!", error);
//         setLoading(false);
//       });
//   }, []);

//   const columns = [
//     {
//       title: 'Name',
//       dataIndex: 'name',
//       key: 'name',
//     },
//     {
//       title: 'Email',
//       dataIndex: 'email',
//       key: 'email',
//     },
//     {
//       title: 'Phone Number',
//       dataIndex: 'phone_number',
//       key: 'phone_number',
//     },
//   ];

//   return (
//     <div className="mx-auto max-w-7xl mt-8">
//       <h3 className="text-center mb-4">List of Hospital Owners</h3>
//       <Table
//         columns={columns}
//         dataSource={ownerDetails}
//         loading={loading}
//         rowKey="id"
//       />
//     </div>
//   );
// }

// export default HospitalOwnerList;




// import React, { useState, useEffect, useRef } from "react";
// import { Table, Spin } from "antd";
// import axios from "axios";

// const HospitalOwnerList = () => {
//   const [ownerDetails, setOwnerDetails] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [page, setPage] = useState(1);
//   const [hasMore, setHasMore] = useState(true);
//   const tableContainerRef = useRef(null);

//   const fetchOwnerDetails = async (page) => {
//     setLoading(true);
//     const API_URL = `https://merchandise-edt-les-crossing.trycloudflare.com/register/hospital_owner/?page=${page}`;

//     try {
//       const response = await axios.get(API_URL);
//       const newData = response.data.map(owner => ({
//         id: owner.id,
//         name: `${owner.user.first_name} ${owner.user.last_name}`,
//         email: owner.user.email,
//         phone_number: owner.phone_number,
//       }));

//       setOwnerDetails(prev => [...prev, ...newData]);
//       setLoading(false);

//       if (newData.length === 0 || newData.length < 10) {
//         setHasMore(false); // No more data available or the last page has less than 10 items
//       }
//     } catch (error) {
//       console.error("There was an error fetching the hospital owner data!", error);
//       setLoading(false);
//       setHasMore(false); // Stop fetching if there is an error
//     }
//   };

//   useEffect(() => {
//     fetchOwnerDetails(page);
//   }, [page]);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (tableContainerRef.current) {
//         const { scrollTop, scrollHeight, clientHeight } = tableContainerRef.current;
//         if (scrollTop + clientHeight >= scrollHeight - 10 && hasMore && !loading) {
//           setPage(prev => prev + 1);
//         }
//       }
//     };

//     const tableContainer = tableContainerRef.current;
//     tableContainer.addEventListener("scroll", handleScroll);
//     return () => {
//       tableContainer.removeEventListener("scroll", handleScroll);
//     };
//   }, [hasMore, loading]);

//   const columns = [
//     {
//       title: 'Name',
//       dataIndex: 'name',
//       key: 'name',
//     },
//     {
//       title: 'Email',
//       dataIndex: 'email',
//       key: 'email',
//     },
//     {
//       title: 'Phone Number',
//       dataIndex: 'phone_number',
//       key: 'phone_number',
//     },
//   ];

//   return (
//     <div className="mx-auto max-w-7xl mt-8">
//       <h3 className="text-center mb-4">List of Hospital Owners</h3>
//       <div ref={tableContainerRef} style={{ height: '60vh', overflow: 'auto' }}>
//         <Table
//           columns={columns}
//           dataSource={ownerDetails}
//           loading={loading}
//           rowKey="id"
//           pagination={false}
//         />
//         {loading && <Spin className="w-full flex justify-center my-4" />}
//       </div>
//     </div>
//   );
// };

// export default HospitalOwnerList;



import React, { useState, useEffect, useRef } from "react";
import { Table, Spin } from "antd";
import axios from "axios";
import _ from "lodash"; // To use debounce

const HospitalOwnerList = () => {
  const [ownerDetails, setOwnerDetails] = useState([]);
  const [loading, setLoading] = useState(false); // Set initial loading to false
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const tableContainerRef = useRef(null);

  const fetchOwnerDetails = async (page) => {
    setLoading(true);
    const API_URL = `https://merchandise-edt-les-crossing.trycloudflare.com/register/hospital_owner/?page=${page}`;

    try {
      const response = await axios.get(API_URL);
      const newData = response.data.map(owner => ({
        id: owner.id,
        name: `${owner.user.first_name} ${owner.user.last_name}`,
        email: owner.user.email,
        phone_number: owner.phone_number,
      }));

      // Check for duplicate data
      setOwnerDetails(prev => {
        const existingIds = new Set(prev.map(owner => owner.id));
        const filteredData = newData.filter(owner => !existingIds.has(owner.id));
        return [...prev, ...filteredData];
      });

      setLoading(false);

      // Update hasMore flag based on newData length
      if (newData.length === 0 || newData.length < 10) {
        setHasMore(false);
      }
    } catch (error) {
      console.error("There was an error fetching the hospital owner data!", error);
      setLoading(false);
      setHasMore(false);
    }
  };

  useEffect(() => {
    fetchOwnerDetails(page);
  }, [page]);

  const handleScroll = _.debounce(() => {
    if (tableContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = tableContainerRef.current;
      if (scrollTop + clientHeight >= scrollHeight - 10 && hasMore && !loading) {
        setPage(prev => prev + 1);
      }
    }
  }, 200); // Debounce with 200ms delay

  useEffect(() => {
    const tableContainer = tableContainerRef.current;
    if (tableContainer) {
      tableContainer.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (tableContainer) {
        tableContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, [hasMore, loading, handleScroll]);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Phone Number',
      dataIndex: 'phone_number',
      key: 'phone_number',
    },
  ];

  return (
    <div className="mx-auto max-w-7xl mt-8">
      <h3 className="text-center mb-4">List of Hospital Owners</h3>
      <div ref={tableContainerRef} style={{ height: '65vh', overflow: 'auto' }}>
        <Table
          columns={columns}
          dataSource={ownerDetails}
          loading={loading}
          rowKey="id"
          pagination={false}
        />
        {loading && <Spin className="w-full flex justify-center my-4" />}
      </div>
    </div>
  );
};

export default HospitalOwnerList;
