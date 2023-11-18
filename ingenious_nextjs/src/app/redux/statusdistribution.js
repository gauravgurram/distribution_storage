import { Divider } from "@nextui-org/react";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const axios = require('axios'); 
import configure from '../../../configure'

// <------------------------StatusDistribution API Code Start------------------>


export const fetchStatusDistribution = createAsyncThunk('fetchStatusDistribution', async () => {
    var tokenid = localStorage.getItem('tokenall');
    const token = tokenid; 
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`,
        },
    };

    const response = await axios.get(`${configure.API_BASE_URL}/api/statusdistribution`,config);
    return response.data;
  });



export const addStatusDistribution = createAsyncThunk('addStatusDistribution', async (data) => 
{
   
    const formData = new FormData();
    formData.append("status_distribution", data.status);
    var tokenid = localStorage.getItem('tokenall');
    const token = tokenid; 
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`,
        },
    };

    const response = await axios.post(`${configure.API_BASE_URL}/api/statusdistribution`, formData, config);
    return response.data;
});

export const deleteStatusDistribution = createAsyncThunk('deleteStatusDistribution',async (id)=>{
    var tokenid = localStorage.getItem('tokenall');
    const token = tokenid; 
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`,
        },
    };

  const response = await axios.delete(`${configure.API_BASE_URL}/api/statusdistribution/`+id,config);
  return response.data;
});


export const editStatusDistribution = createAsyncThunk('editStatusDistribution',async (id)=>{
    var tokenid = localStorage.getItem('tokenall');
    const token = tokenid; 
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`,
        },
    };

    const response = await axios.get(`${configure.API_BASE_URL}/api/statusdistribution/`+id,config);
    return response.data;
  });


export const updateStatusDistribution = createAsyncThunk('updateStatusDistribution', async (data) => 
{
    const formData = new FormData();
    formData.append('_method','PUT')
    formData.append("status_distribution",data.status);
    var tokenid = localStorage.getItem('tokenall');
    const token = tokenid; 
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`,
        },
    };

    const response = await axios.post(`${configure.API_BASE_URL}/api/statusdistribution/`+data.sid,formData, config);
    return response.data;
});


// <------------------------StatusDistribution API Code End------------------>



const initialState = {

    DriverData: [],
    loading: false,
    fname: '',
    lname:'',
    num_cin:'',
    num_permit_to_drive:'',
    phone:'',
    did:'',


    StatusDistribution: [],
    sid:'',
    status:'',

  };

  const statusDistribution = createSlice({
    name: 'statusDistribution',
    initialState,
    reducers: {
      setFname:(state,payload)=>{
          state.fname=payload.payload;
      },
      setLname:(state,payload)=>{
          state.lname=payload.payload;
      },
      setNum_cin:(state,payload)=>{
          state.num_cin=payload.payload;
      },
      setPermit:(state,payload)=>{
        state.num_permit_to_drive=payload.payload;
      },
      setPhone:(state,action)=>{
        state.phone=action.payload;
      },
      setStatus:(state,action)=>{
        state.status=action.payload;
      }
    },
    extraReducers: {
        
// <------------------------Drivers Extrareducer Code Start------------------>

        // [fetchDrivers.pending]:(state)=>{
        //     state.loading=true;
        // },

        // [fetchDrivers.fulfilled]:(state,action)=>{
        //     state.loading=false;
        //     state.DriverData=action.payload;
        // },
        

        // [addDrivers.pending]:(state)=>{
        //     state.loading=true;
        // },
      
        // [addDrivers.fulfilled]:(state)=>{
        //     state.loading=false;
        //     window.location.href="/Driver";

        // },

        // [deleteDriverData.pending]:(state)=>{
        //     state.loading=true;
        // },
        // [deleteDriverData.fulfilled]:(state)=>{
        //     state.loading=false;
        //     // window.location.href="/Drivers";

        // },
        // [editDriverData.pending]:(state)=>{
        //     state.loading=true;

        // },
        // [editDriverData.fulfilled]:(state,payload)=>{
        //     state.loading=false;
        //     state.did=payload.payload.id;
        //     state.fname=payload.payload.firstname;
        //     state.lname=payload.payload.lastname;
        //     state.num_cin=payload.payload.num_cin;
        //     state.num_permit_to_drive=payload.payload.num_permit_to_drive;
        //     state.phone=payload.payload.n_tel;
        //     // window.location.href="/Drivers";
        // },
        // [UpdateDrivers.pending]: (state) =>{
        //     state.loading=true;
        //     },
        // [UpdateDrivers.fulfilled]:(state)=>{
        //     state.loading=false;
        //     // alert("Updated Successfully");
        //     // window.location.href="/drivers";
        // },

// <------------------------Drivers Extrareducer Code End------------------>
// <------------------------StatusDistribution Extrareducer Code Start------------------>

        [fetchStatusDistribution.pending]:(state)=>{
            state.loading=true;
        },

        [fetchStatusDistribution.fulfilled]:(state,action)=>{
            state.loading=false;
            state.StatusDistribution=action.payload;
        },
        

        [addStatusDistribution.pending]:(state)=>{
            state.loading=true;
        },
      
        [addStatusDistribution.fulfilled]:(state)=>{
            state.loading=false;
            window.location.href="/StatusDistribution";

        },

        [deleteStatusDistribution.pending]:(state)=>{
            state.loading=true;
        },
        [deleteStatusDistribution.fulfilled]:(state)=>{
            state.loading=false;
            window.location.href="/StatusDistribution";

        },
        [editStatusDistribution.pending]:(state)=>{
            state.loading=true;
        },
        [editStatusDistribution.fulfilled]:(state,payload)=>{
            state.loading=false;
            state.sid=payload.payload.id;
            state.status=payload.payload.status_distribution
        },
        [updateStatusDistribution.pending]: (state) =>{
            state.loading=true;
            },
        [updateStatusDistribution.fulfilled]:(state)=>{
            state.loading=false;
            window.location.href="/StatusDistribution";
        },
// <------------------------StatusDistribution Extrareducer Code End------------------>
    },
  });
  
  export const { setFname,setLname,setNum_cin,setPermit,setPhone ,setStatus} = statusDistribution.actions;
  export default statusDistribution.reducer;
  