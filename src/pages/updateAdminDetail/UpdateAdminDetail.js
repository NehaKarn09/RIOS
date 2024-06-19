import React, { useEffect , useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const UpdateAdminDetail = () => {

    const navigate= useNavigate();

    const [userId, setUserId] = useState(null);
    const[updateData,setUpdateData]=useState({
        name: '',
        opassword:'',
        npassword: '',
        email: ''
    })

    const handleChange=(e)=>{
       const {id,value}= e.target;
       setUpdateData((prevData)=>({
         ...prevData,
         [id]:value
       }))
    }

    const fetchUserId = async () => {
        const username = localStorage.getItem('username');
        try {
          const response = await axios.get('https://merchandise-edt-les-crossing.trycloudflare.com/register/admin/', {
            headers: {
              'Authorization': localStorage.getItem('authToken'),
              'Content-Type': 'application/json',
            },
          });
          const admin = response.data.find(admin => admin.user.username === username);
          if (admin) {
            setUserId(admin.id);
          }
        } catch (error) {
          console.error('Error fetching user ID', error);
        }
      };

      useEffect(() => {
        fetchUserId();
      }, []);

   const handleUpdate= async (e)=>{
        e.preventDefault();

        const nameParts = updateData.name.split(' ');
        const firstName = nameParts[0];
        const lastName = nameParts.length > 1 ? nameParts[nameParts.length - 1] : '';

        const payload={
            old_password : updateData.opassword,
            new_password : updateData.npassword,
            first_name : firstName,
            last_name : lastName,
            email : updateData.email
        }

        try {
            const response = await axios.patch(`https://merchandise-edt-les-crossing.trycloudflare.com/register/admin/${userId}/`,payload,{
                headers: {
                  'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
                  'Content-Type': 'application/json',
                },
            });
            console.log('Update successful', response.data);
            alert('Update successful');
            setUpdateData({name: '',opassword:'',npassword: '',email: ''});
            navigate('/admin-dashboard');

        } catch (error) {
            console.error('Error updating details', error);
            alert('Cannot update');
        }
   }

  return (
    <div className="flex justify-center items-center h-full bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Update Existing Details
        </h2>
        <form className="space-y-4" onSubmit={handleUpdate}>
          <div>
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name" value={updateData.name} onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter name"
              required
            />
          </div>
          <div>
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="opassword"
            >
              Old Password
            </label>
            <input
              type="password"
              id="opassword" value={updateData.opassword} onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter old password"
              required
            />
          </div>
          <div>
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="npassword"
            >
              New Password
            </label>
            <input
              type="password"
              id="npassword" value={updateData.npassword} onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter new password"
              required
            />
          </div>
          <div>
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email" value={updateData.email} onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter email"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
          > Update</button>
        </form>
      </div>
    </div>
  );
}

export default UpdateAdminDetail;