const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const axios = require('axios'); 
import configure from '../../../configure'


  export const fetchDistribution = createAsyncThunk('fetchDistribution', async () => {

    var tokenid = localStorage.getItem('tokenall');
    const token = tokenid; 
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`,
        },
    };

    const response = await axios.get(`${configure.API_BASE_URL}/api/distribution_header`,config);
    return response.data;
  });

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

  export const fetchClient = createAsyncThunk('fetchClient', async () => {

    var tokenid = localStorage.getItem('tokenall');
    const token = tokenid; 
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`,
        },
    };

    const response = await axios.get(`${configure.API_BASE_URL}/api/clients`,config);
    return response.data;
  });

  export const addDistribution = createAsyncThunk('addDistribution', async (data) => 
  {
      console.log('Data inserted : ' ,data)
      const formData = new FormData();
      formData.append("code_distribution", data.codeDistribution);
      formData.append("id_type_distribution", data.typeofDistribution);
      formData.append("id_Client", data.clientId);
      formData.append("comments", data.comments);
      formData.append("is_mutual", data.clientCodeShip);
      formData.append("axe_distribution", data.axeDistribution);
      formData.append("date_delivery", data.deliveryDate);
      formData.append("qty", data.quantity);
      formData.append("volume", data.volume);
      formData.append("nbr_delivery_points", data.deliveryPoints);
      formData.append("nbr_expected_days", data.expectedDays);
      formData.append("distance", data.distance);
      formData.append("cityId", data.cityId);
      formData.append("truckId", data.truckCategoryId);
      formData.append("orderDate", data.orderDate);
      formData.append("statusDistribution", data.statusDistributionId);
      formData.append("createdBy", data.createdBy);

      var tokenid = localStorage.getItem('tokenall');
      const token = tokenid; 

      const config = {
          headers: {
              'Content-Type': 'multipart/form-data',
              'Authorization': `Bearer ${token}`,
          },
      };

      const response = await axios.post(`${configure.API_BASE_URL}/api/distribution_header`, formData, config);
                  
      return response.data;
  });


  export const addDistributionLine = createAsyncThunk('addDistributionLine', async (data) => 
  {
      console.log('Data inserted : ' ,data)
      const formData = new FormData();
      formData.append("name_delivery", data.deliveryName);
      formData.append("qty_line", data.quantity);
      formData.append("volume_line", data.volume);
      formData.append("line_order", "1");

      var tokenid = localStorage.getItem('tokenall');
      const token = tokenid; 

      const config = {
          headers: {
              'Content-Type': 'multipart/form-data',
              'Authorization': `Bearer ${token}`,
          },
      };

      const response = await axios.post(`${configure.API_BASE_URL}/api/distribution_lines`, formData, config);
      return response.data;
  });


  export const fetchDistributionId = createAsyncThunk('fetchDistributionId',async (id)=>{

    var tokenid = localStorage.getItem('tokenall');
    const token = tokenid; 

    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`,
        },
    };

    const response = await axios.get(`${configure.API_BASE_URL}/api/distribution_header/`+id,config);
    return response.data;
  });


  export const fetchDistributionListId = createAsyncThunk('fetchDistributionListId',async (id)=>{

    var tokenid = localStorage.getItem('tokenall');
    const token = tokenid; 

    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`,
        },
    };

    const response = await axios.get(`${configure.API_BASE_URL}/api/distribution_lines/`+id,config);
    return response.data;
  });


  export const EditPlanFetch = createAsyncThunk('EditPlanFetch',async (id)=>{
    var tokenid = localStorage.getItem('tokenall');
    const token = tokenid; 

    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`,
        },
    };

    const response = await axios.get(`${configure.API_BASE_URL}/api/distribution_header/`+id,config);
    return response.data;
  });

  export const EditPlan = createAsyncThunk('EditPlan',async (data)=>{

    console.log("EditPlan : ",data)
    const formData = new FormData();
    formData.append('_method','PUT')

    formData.append("id_type_distribution", data.typeofDistribution);
    formData.append("axe_distribution", data.axeDistribution);
    formData.append("quantity", data.quantity);
    formData.append("volume", data.volume);
    formData.append("distance", data.distance);
    formData.append("id_city", data.cityId);
    formData.append("id_truck_category", data.truckCategoryId);
    formData.append("modifiedby", data.modifiedby);
    formData.append("deliverydate", data.deliveryDate);

    var tokenid = localStorage.getItem('tokenall');
    const token = tokenid; 

    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`,
        },
    };

    const response = await axios.post(`${configure.API_BASE_URL}/api/distribution_lines/`+data.distributionId,formData, config);
    return response.data;
  });




  export const deleteDistributionHeader = createAsyncThunk('deleteDistributionHeader',async (id)=>{
    var tokenid = localStorage.getItem('tokenall');
    const token = tokenid; 

    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`,
        },
    };

    const response = await axios.delete(`${configure.API_BASE_URL}/api/distribution_header/`+id,config);
    return response.data;
  });



  export const fetchDrivers = createAsyncThunk('fetchDrivers', async () => {

    var tokenid = localStorage.getItem('tokenall');
    const token = tokenid; 

    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`,
        },
    };

    const response = await axios.get(`${configure.API_BASE_URL}/api/driver`,config);
    return response.data;
  });



  export const fetchVehicle = createAsyncThunk('fetchVehicle', async () => {
    var tokenid = localStorage.getItem('tokenall');
    const token = tokenid; 

    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`,
        },
    };

    const response = await axios.get(`${configure.API_BASE_URL}/api/vehiclefleet`,config);
    console.log("Vehical data",response.data);
    return response.data;
  });


  export const fetchTruckCategory = createAsyncThunk('fetchTruckCategory', async () => {
    var tokenid = localStorage.getItem('tokenall');
    const token = tokenid; 

    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`,
        },
    };

    const response = await axios.get(`${configure.API_BASE_URL}/api/truckcategory`,config);
    return response.data;
  });


  export const fetchCity = createAsyncThunk('fetchCity', async () => {
    var tokenid = localStorage.getItem('tokenall');
    const token = tokenid; 

    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`,
        },
    };

    const response = await axios.get(`${configure.API_BASE_URL}/api/city`,config);
    return response.data;
  });


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


  export const addImport = createAsyncThunk('addImport', async (data) => 
  {
      console.log('Add Import Data inserted : ' ,data)
      const formData = new FormData();
      formData.append("file", data.importFile);

      var tokenid = localStorage.getItem('tokenall');
      const token = tokenid; 

      const config = {
          headers: {
              'Content-Type': 'multipart/form-data',
              'Authorization': `Bearer ${token}`,
          },
      };

      const response = await axios.post(`${configure.API_BASE_URL}/api/import`, formData, config);
                  console.log(response.data)
      return response.data;
  });

  export const addPlan = createAsyncThunk('addPlan',async (data)=>{
    const formData = new FormData();
    formData.append('_method','PUT')
    formData.append("date_execution", data.executeDate);
    formData.append("id_driver", data.driverId);
    formData.append("id_vehicle", data.vehicleNo);

    var tokenid = localStorage.getItem('tokenall');
    const token = tokenid; 

    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`,
        },
    };

    const response = await axios.post(`${configure.API_BASE_URL}/api/distribution_header/`+data.distributionId,formData, config);
    return response.data;
  });

  export const addMap = createAsyncThunk('addMap', async (data) => 
  {
      console.log('Data inserted : ' ,data)
      const formData = new FormData();
      formData.append("id_driver", data.driverId);
      formData.append("id_vehicle", data.vehicleNo);
      formData.append("flag_status", "Active");

      var tokenid = localStorage.getItem('tokenall');
      const token = tokenid; 

      const config = {
          headers: {
              'Content-Type': 'multipart/form-data',
              'Authorization': `Bearer ${token}`,
          },
      };

      const response = await axios.post(`${configure.API_BASE_URL}/api/mapping`, formData, config);
      return response.data;
  });

const initialState = {
  distributions: [],
  typeDistribution:[],
  clientData:[],
  distributionList:[],
  DriverData: [],
  vehicleDetails:[],

  truckCategory: [],
  city:[],
  StatusDistribution: [],



  distributionId:'',
  codeDistribution:'',
  typeofDistribution:'',
  clientId:'',
  comments:'',
  clientCodeShip:'',
  axeDistribution:'',
  deliveryDate:'',
  quantity:'',
  volume:'',
  deliveryPoints:'',
  expectedDays:'',
  deliveryName:'',

  executeDate:'',
  driverId:'',
  vehicleNo:'',


  distance:'',
  cityId:'',
  truckCategoryId:'',
  orderDate:'',
  statusDistributionId:'',
  importFile:'',

  searchQuery:'',

};

const distributionSlice = createSlice({
  name: 'distributionSlice',
  initialState,
  reducers: {
    setCodeDistribution:(state,payload)=>{
        state.codeDistribution=payload.payload;
    },
    setTypeDistribution:(state,payload)=>{
      state.typeofDistribution=payload.payload;
  },
    setClientId:(state,payload)=>{
    state.clientId=payload.payload;
  },

    setComments:(state,payload)=>{
      state.comments=payload.payload;
    },

    setClientCode:(state,payload)=>{
      state.clientCodeShip=payload.payload;
    },

    setAxeDistribution:(state,payload)=>{
      state.axeDistribution=payload.payload;
    },

    setDeliveryDate:(state,payload)=>{
      state.deliveryDate=payload.payload;
    },

    setQuantity:(state,payload)=>{
      state.quantity=payload.payload;
    },

    setVolume:(state,payload)=>{
      state.volume=payload.payload;
    },

    setDeliveryPoint:(state,payload)=>{
      state.deliveryPoints=payload.payload;
    },

    setExpectedDay:(state,payload)=>{
      state.expectedDays=payload.payload;
    },
    setDeliveryName:(state,payload)=>{
      state.deliveryName=payload.payload;
    },

    setExecuteDate:(state,payload)=>{
      state.executeDate=payload.payload;
    },

    setDriver:(state,payload)=>{
      state.driverId=payload.payload;
    },

    setVehicle:(state,payload)=>{
      state.vehicleNo=payload.payload;
    },

    setDistance:(state,payload)=>{
      state.distance=payload.payload;
    },

    setCity:(state,payload)=>{
      state.cityId=payload.payload;
    },

    setTruck:(state,payload)=>{
      state.truckCategoryId=payload.payload;
    },

    setOrderDate:(state,payload)=>{
      state.orderDate=payload.payload;
    },

    setDistributionStatus:(state,payload)=>{
      state.statusDistributionId=payload.payload;
    },

    setImport:(state,payload)=>{
      state.importFile=payload.payload;
    },

    setSearchQuery:(state,payload)=>{
      state.searchQuery=payload.payload;
    },

  },
  extraReducers: {
    [fetchDistribution.pending]: (state) => {
      state.loading = true;
    },
    [fetchDistribution.fulfilled]: (state, action) => {
      state.loading = false;
      state.distributions = action.payload;
    },
    [fetchDistribution.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },

    [addDistribution.pending]:(state)=>{
        state.loading=true;
    },
    [addDistribution.fulfilled]:(state)=>{
        state.loading=false;
        window.location.href="/Distribution"
    },

    [addDistributionLine.fulfilled]:(state)=>{
      state.loading=false;
    },

    [fetchDistributionId.fulfilled]:(state,payload)=>{
      state.loading=false;

      state.distributionId = payload.payload.dhid;
      state.codeDistribution = payload.payload.code_distribution;
      state.clientId = payload.payload.name_client;
      state.typeofDistribution = payload.payload.type_distribution;
      state.axeDistribution = payload.payload.axe_distribution;
      state.quantity = payload.payload.qty;
      state.volume = payload.payload.volume;

    },

    [fetchDistributionListId.fulfilled]: (state, payload) => {
      state.loading = false;
      state.distributionList = payload.payload;
    },

    [EditPlanFetch.fulfilled]: (state, payload) => {
      state.loading = false;
      state.distributionId = payload.payload.dhid;
      state.typeofDistribution = payload.payload.type_distribution;
      state.axeDistribution = payload.payload.axe_distribution;
      state.quantity = payload.payload.qty;
      state.volume = payload.payload.volume;
      state.distance = payload.payload.distance;
      state.cityId = payload.payload.id_city;
      state.truckCategoryId = payload.payload.id_truck_category;
    },

    [deleteDistributionHeader.fulfilled]:(state)=>{
      state.loading=false;
        window.location.href="/Distribution"
    },



    [fetchDrivers.pending]:(state)=>{
      state.loading=true;
    },

    [fetchDrivers.fulfilled]:(state,action)=>{
        state.loading=false;
        state.DriverData=action.payload;
    },


    [fetchVehicle.pending]: (state) => {
      state.loading = true;
    },
    [fetchVehicle.fulfilled]: (state, action) => {
      state.loading = false;
      state.vehicleDetails = action.payload;
    },


    [addPlan.fulfilled]:(state)=>{
      state.loading=false;
      window.location.href="/Distribution"
    },

    [fetchTruckCategory.pending]: (state) => {
      state.loading = true;
    },
    [fetchTruckCategory.fulfilled]: (state, action) => {
      state.loading = false;
      state.truckCategory = action.payload;
    },
    [fetchTruckCategory.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },


    [fetchCity.pending]: (state) => {
      state.loading = true;
    },
    [fetchCity.fulfilled]: (state, action) => {
      state.loading = false;
      state.city = action.payload;
    },
    [fetchCity.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },

    [fetchStatusDistribution.pending]:(state)=>{
      state.loading=true;
    },

    [fetchStatusDistribution.fulfilled]:(state,action)=>{
        state.loading=false;
        state.StatusDistribution=action.payload;
    },

    [addImport.fulfilled]:(state)=>{
      state.loading=false;
      console.log('Success')
  },

  [addMap.fulfilled]:(state)=>{
    state.loading=false;
    console.log('Success')
},


[EditPlan.fulfilled]:(state)=>{
  state.loading=false;
  window.location.href="/Distribution"
},
    // [UpdateRoleId.fulfilled]:(state,payload)=>{
    //   state.loading=false;
    //   state.roleId = payload.payload.id;
    //   state.roleTitle = payload.payload.role_title;
    //   state.roleDescription = payload.payload.role_description;
    // },

    // [UpdateRole.fulfilled]:(state)=>{
    //   state.loading=false;
    //   window.location.href="/Role"
    // },


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

    [fetchClient.pending]: (state) => {
      state.loading = true;
    },
    [fetchClient.fulfilled]: (state, action) => {
      state.loading = false;
      state.clientData = action.payload;
    },
    [fetchClient.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },



  },
});

export const { setCodeDistribution,setTypeDistribution,setClientId,setComments,setClientCode,setAxeDistribution,
  setDeliveryDate,setQuantity,setVolume,setDeliveryPoint,setExpectedDay,setDeliveryName,setExecuteDate,setDriver,
  setVehicle,setDistributionStatus,setOrderDate,setTruck,setCity,setDistance,setImport,setSearchQuery } = distributionSlice.actions;
export default distributionSlice.reducer;
