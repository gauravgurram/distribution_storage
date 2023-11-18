const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const axios = require('axios'); 
import configure from '../../../configure'


  export const fetchRoles = createAsyncThunk('fetchRoles', async () => {
    var tokenid = localStorage.getItem('tokenall');
    const token = tokenid; 
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`,
        },
    };

    const response = await axios.get(`${configure.API_BASE_URL}/api/role`,config);
    return response.data;
  });

  export const addRole = createAsyncThunk('addRole', async (data) => 
  {
      console.log('Data inserted : ' ,data)
      const formData = new FormData();
      formData.append("role_title", data.roleTitle);
      formData.append("role_description", data.roleDescription);
      var tokenid = localStorage.getItem('tokenall');
      const token = tokenid; 
      const config = {
          headers: {
              'Content-Type': 'multipart/form-data',
              'Authorization': `Bearer ${token}`,
          },
      };

      const response = await axios.post(`${configure.API_BASE_URL}/api/role`, formData, config);
      return response.data;
  });

  export const deleteRole = createAsyncThunk('deleteRole',async (id)=>{
    var tokenid = localStorage.getItem('tokenall');
    const token = tokenid; 
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`,
        },
    };
    const response = await axios.delete(`${configure.API_BASE_URL}/api/role/`+id,config);
    return response.data;
  });

  export const UpdateRoleId = createAsyncThunk('UpdateRoleId',async (id)=>{
    var tokenid = localStorage.getItem('tokenall');
    const token = tokenid; 
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`,
        },
    };

    const response = await axios.get(`${configure.API_BASE_URL}/api/role/`+id,config);
    return response.data;
  });

  export const UpdateRole = createAsyncThunk('UpdateRole',async (data)=>{
  
    const formData = new FormData();
    formData.append('_method','PUT')
    formData.append("role_title", data.roleTitle);
    formData.append("role_description", data.roleDescription);
    var tokenid = localStorage.getItem('tokenall');
    const token = tokenid; 
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`,
        },
    };

    const response = await axios.post(`${configure.API_BASE_URL}/api/role/`+data.roleId,formData, config);
    return response.data;
  });


const initialState = {
  roles: [],
  roleTitle:'',
  roleDescription:'',
  loading: false,
  roleId:0,
};

const registrationOperation = createSlice({
  name: 'registrationOperation',
  initialState,
  reducers: {
    setRoleTitle:(state,payload)=>{
        state.roleTitle=payload.payload;
    },
    setRoleDescription:(state,payload)=>{
        state.roleDescription=payload.payload;
    },

  },
  extraReducers: {
    [fetchRoles.pending]: (state) => {
      state.loading = true;
    },
    [fetchRoles.fulfilled]: (state, action) => {
      state.loading = false;
      state.roles = action.payload;
    },
    [fetchRoles.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },

    [addRole.pending]:(state)=>{
        state.loading=true;
    },
    [addRole.fulfilled]:(state)=>{
        state.loading=false;
        console.log('Inserted')
        window.location.href="/Role"
    },

    [deleteRole.fulfilled]:(state)=>{
      state.loading=false;
        window.location.href="/Role"
    },

    [UpdateRoleId.fulfilled]:(state,payload)=>{
      state.loading=false;
      state.roleId = payload.payload.id;
      state.roleTitle = payload.payload.role_title;
      state.roleDescription = payload.payload.role_description;
    },

    [UpdateRole.fulfilled]:(state)=>{
      state.loading=false;
      window.location.href="/Role"
    },

  },
});

export const { setRoleTitle,setRoleDescription } = registrationOperation.actions;
export default registrationOperation.reducer;
