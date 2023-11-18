const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const axios = require('axios'); 
import configure from '../../../configure'


  export const fetchTypeDistribution = createAsyncThunk('fetchTypeDistribution', async () => {
    var tokenid = localStorage.getItem('tokenall');
    const token = tokenid; 
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`,
        },
    };

    const response = await axios.get(`${configure.API_BASE_URL}/api/distribution`,config);
    return response.data;
  });

  export const fetchMap= createAsyncThunk('fetchMap', async () => {
    var tokenid = localStorage.getItem('tokenall');
    const token = tokenid; 
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`,
        },
    };
    const response = await axios.get(`${configure.API_BASE_URL}/api/mapping`,config);
    return response.data;
  });

  export const addTypeDistribution= createAsyncThunk('addTypeDistribution', async (data) => 
  {
      console.log('Data inserted : ' ,data)
      const formData = new FormData();
      formData.append("type_distribution", data.typeName);
      var tokenid = localStorage.getItem('tokenall');
      const token = tokenid; 
      const config = {
          headers: {
              'Content-Type': 'multipart/form-data',
              'Authorization': `Bearer ${token}`,
          },
      };

      const response = await axios.post(`${configure.API_BASE_URL}/api/distribution`, formData, config);
      return response.data;
  });

  export const deleteTypeDistribution = createAsyncThunk('deleteTypeDistribution',async (id)=>{
    var tokenid = localStorage.getItem('tokenall');
    const token = tokenid; 
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`,
        },
    };

    const response = await axios.delete(`${configure.API_BASE_URL}/api/distribution/`+id,config);
    return response.data;
  });

  export const UpdateTypeDistributionId = createAsyncThunk('UpdateTypeDistributionId',async (id)=>{
    var tokenid = localStorage.getItem('tokenall');
    const token = tokenid; 
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`,
        },
    };

    const response = await axios.get(`${configure.API_BASE_URL}/api/distribution/`+id,config);
    return response.data;
  });

  export const UpdateTypeDistribution = createAsyncThunk('UpdateTypeDistribution',async (data)=>{  
    const formData = new FormData();
    formData.append('_method','PUT')
    formData.append("type_distribution", data.typeName);
    var tokenid = localStorage.getItem('tokenall');
    const token = tokenid; 
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`,
        },
    };
    const response = await axios.post(`${configure.API_BASE_URL}/api/distribution/`+data.type_id,formData, config);
    return response.data;
  });

const initialState = {
  typeDistribution: [],
  typeName:'',
  type_id:0,
  loading: false,
  planMap:[],
};

const typedistribution = createSlice({
  name: 'typedistribution',
  initialState,
  reducers: {
    setTypeDistribution:(state,payload)=>{
        state.typeName=payload.payload;
    },
  },
  extraReducers: {
    [fetchTypeDistribution.pending]: (state) => {
      state.loading = true;
    },
    [fetchTypeDistribution.fulfilled]: (state, action) => {
      state.loading = false;
      state.typeDistribution = action.payload;
    },
    [fetchTypeDistribution.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },

    [addTypeDistribution.pending]:(state)=>{
        state.loading=true;
    },
    [addTypeDistribution.fulfilled]:(state)=>{
        state.loading=false;
        window.location.href="/TypeDistribution"
    },

    [deleteTypeDistribution.fulfilled]:(state)=>{
      state.loading=false;
        window.location.href="/TypeDistribution"
    },

    [UpdateTypeDistributionId.fulfilled]:(state,payload)=>{
      state.loading=false;
      state.type_id = payload.payload.id;
      state.typeName =payload.payload.type_distribution;
    },

    [UpdateTypeDistribution.fulfilled]:(state)=>{
      state.loading=false;
      window.location.href="/TypeDistribution"
    },

    [fetchMap.fulfilled]: (state, action) => {
      state.loading = false;
      state.planMap = action.payload;
    },

  },
});

export const { setTypeDistribution } = typedistribution.actions;
export default typedistribution.reducer;
