const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const axios = require('axios'); 
import configure from '../../../configure';

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

export const addRegister = createAsyncThunk('addRegister', async (data) => 
{
    const formData = new FormData();
    formData.append("user_firstname", data.firstName);
    formData.append("user_lastname", data.lastName);
    formData.append("login", data.email);
    formData.append("password", data.password);
    formData.append("id_role", data.role);

    var tokenid = localStorage.getItem('tokenall');
    const token = tokenid; 
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`,
        },
    };

    const response = await axios.post(`${configure.API_BASE_URL}/api/user`, formData, config);
    return response.data;
});


export const login = createAsyncThunk('login', async (data) => 
{
    console.log('Data Login : ' ,data)
    const formData = new FormData();

    formData.append("login", data.email);
    formData.append("password", data.password);

    const response = await axios.post(`${configure.API_BASE_URL}/api/login`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                console.log(response.data)
    return response.data;
});

export const logout = createAsyncThunk('logout', async (data) => {
  const formData = new FormData();
  formData.append("login", data.tokenId);

  const response = await axios.post(`${configure.API_BASE_URL}/api/logout`, formData, {
    headers: {
      Authorization: `Bearer ${data.tokenId}` 
    },
  });

  console.log(response.data);
  return response.data;
});


const initialState = {
  roles:[],  
  firstName:'',
  lastName:'',
  email:'',
  password:'',
  role:'',  
  tokenId:'',
  loginstatus:'',
  ExistedMail:false,
  loading:false,
};

const adminuserregister = createSlice({
  name: 'adminuserregister',
  initialState,
  reducers: {
    setFirstName:(state,payload)=>{
        state.firstName=payload.payload;
    },
    setLastName:(state,payload)=>{
        state.lastName=payload.payload;
    },
    setEmail:(state,payload)=>{
        state.email=payload.payload;
    },
    setPassword:(state,payload)=>{
      state.password=payload.payload;
    },
    setRole:(state,payload)=>{
        state.role=payload.payload;
      },
    setLoginStatusNull:(state)=>{
        state.loginstatus = '';
    },
  },
  extraReducers: {

    [addRegister.pending]:(state)=>{
        state.loading=true;
    },
    [addRegister.fulfilled]:(state,payload)=>{
        state.loading=false;
        if(payload.payload.status === "present")
        {
          alert('Email Id Is Already Existed')
          console.log('Not Inserted')
        }
        else{
          console.log('Inserted')
          window.location.href="/Login"
        }
    },
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

    [login.pending]:(state)=>{
        state.loading=true;
    },
    [login.fulfilled]:(state,action)=>{
        state.loading=false;

        var result = action.payload;
        if(result.status == "success")
        {
            state.loginstatus='success';
            const user = {token:result.token ,emailid:result.emailid};
            console.log('Token : ',user)
            localStorage.setItem('user',JSON.stringify(user));
            localStorage.setItem('tokenall', result.token);
            localStorage.setItem('roleid', result.roleid);
            console.log('logged using local storage')
            window.location.href="/Index"
        }
        else
        {
            localStorage.clear();
            state.loginstatus='fail';
        }
    },

    [logout.fulfilled]: (state, action) => {
      state.loading = false;
      localStorage.clear();
      window.location.href="/Login"
    },
  },
});

export const { setFirstName,setLastName,setEmail,setPassword,setRole,setLoginStatusNull } = adminuserregister.actions;
export default adminuserregister.reducer;
