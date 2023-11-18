const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const axios = require('axios'); 
import configure from '../../../configure'

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

  export const addTruckCategory = createAsyncThunk('addTruckCategory', async (data) => 
  {
      console.log('Data inserted : ' ,data)
      const formData = new FormData();
      formData.append("truck_category", data.truckCateName);
      var tokenid = localStorage.getItem('tokenall');
      const token = tokenid; 
      const config = {
          headers: {
              'Content-Type': 'multipart/form-data',
              'Authorization': `Bearer ${token}`,
          },
      };
      const response = await axios.post(`${configure.API_BASE_URL}/api/truckcategory`, formData, config);
      return response.data;
  });

  export const deleteTruckCategory = createAsyncThunk('deleteTruckCategory',async (id)=>{
    var tokenid = localStorage.getItem('tokenall');
    const token = tokenid; 
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`,
        },
    };

    const response = await axios.delete(`${configure.API_BASE_URL}/api/truckcategory/`+id,config);
    return response.data;
  });

  export const UpdateTruckCategoryId = createAsyncThunk('UpdateTruckCategoryId',async (id)=>{
    console.log("truckcategory Id : ",id)
    var tokenid = localStorage.getItem('tokenall');
    const token = tokenid; 
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`,
        },
    };
    const response = await axios.get(`${configure.API_BASE_URL}/api/truckcategory/`+id,config);
    return response.data;
  });

  export const UpdateTruckCategory = createAsyncThunk('UpdateTruckCategory',async (data)=>{
    console.log("truckcategory Data : ",data)
  
    const formData = new FormData();
    formData.append('_method','PUT')
    formData.append("truck_category", data.truckCateName);
    var tokenid = localStorage.getItem('tokenall');
    const token = tokenid; 
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`,
        },
    };
    const response = await axios.post(`${configure.API_BASE_URL}/api/truckcategory/`+data.truckCategoryId,formData, config);
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


  export const addVehicle = createAsyncThunk('addVehicle', async (data) => 
  {
      console.log('Vehicle Inserted : ' ,data)
      const formData = new FormData();

      formData.append("marque_vehicule", data.vehicleBrand);
      formData.append("model_vehical", data.vehicleModel);
      formData.append("register", data.vehicleRegistration);
      formData.append("num_categories", data.vehicleNo);
      formData.append("date_acquisition", data.vehiclePurchaseDate);
      formData.append("id_truck_category", data.vehicleTruckCategory);

      var tokenid = localStorage.getItem('tokenall');
      const token = tokenid; 
      const config = {
          headers: {
              'Content-Type': 'multipart/form-data',
              'Authorization': `Bearer ${token}`,
          },
      };

      const response = await axios.post(`${configure.API_BASE_URL}/api/vehiclefleet`, formData, config);
      return response.data;
  });

  export const deleteVehicle= createAsyncThunk('deleteVehicle',async (id)=>{
    var tokenid = localStorage.getItem('tokenall');
    const token = tokenid; 
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`,
        },
    };

    const response = await axios.delete(`${configure.API_BASE_URL}/api/vehiclefleet/`+id,config);
    return response.data;
  });


  export const UpdateVehicleId = createAsyncThunk('UpdateVehicleId',async (id)=>{
    console.log("vehiclefleet Id : ",id)
    var tokenid = localStorage.getItem('tokenall');
    const token = tokenid; 
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`,
        },
    };

    const response = await axios.get(`${configure.API_BASE_URL}/api/vehiclefleet/`+id,config);
    console.log("Vehical Update",response.data);
    return response.data;
  });


  export const UpdateVehicle = createAsyncThunk('UpdateVehicle',async (data)=>{
    console.log("UpdateVehicle Data : ",data)

      const formData = new FormData();
      formData.append('_method','PUT')

      formData.append("marque_vehicule", data.vehicleBrand);
      formData.append("model_vehical", data.vehicleModel);
      formData.append("register", data.vehicleRegistration);
      formData.append("num_categories", data.vehicleNo);
      formData.append("date_acquisition", data.vehiclePurchaseDate);
      formData.append("id_truck_category", data.vehicleTruckCategory);
      var tokenid = localStorage.getItem('tokenall');
      const token = tokenid; 
      const config = {
          headers: {
              'Content-Type': 'multipart/form-data',
              'Authorization': `Bearer ${token}`,
          },
      };

      const response = await axios.post(`${configure.API_BASE_URL}/api/vehiclefleet/`+data.vehicleId,formData, config);
      return response.data;
  });



const initialState = {
  truckCategory: [],
  truckCateName:'',
  truckCategoryId:0,
  loading: false,

  vehicleDetails:[],
  vehicleBrand:'',
  vehicleModel:'',
  vehicleRegistration:'',
  vehicleNo:'',
  vehiclePurchaseDate:'',
  vehicleTruckCategory:'',
  vehicleId:0,

};

const TruckOperation = createSlice({
  name: 'TruckOperation',
  initialState,
  reducers: {
    setTruckCategory:(state,payload)=>{
        state.truckCateName=payload.payload;
    },
    setVehicleBrand:(state,payload)=>{
      state.vehicleBrand=payload.payload;
    },
    setVehicleModel:(state,payload)=>{
      state.vehicleModel=payload.payload;
  },
  setVehicleRegistration:(state,payload)=>{
    state.vehicleRegistration=payload.payload;
  },

  setVehicleNo:(state,payload)=>{
    state.vehicleNo=payload.payload;
  },

  setVehiclePurchaseDate:(state,payload)=>{
    state.vehiclePurchaseDate=payload.payload;
  },

  setVehicleTruckCategory:(state,payload)=>{
    state.vehicleTruckCategory=payload.payload;
  },


  },
  extraReducers: {
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

    [addTruckCategory.pending]:(state)=>{
        state.loading=true;
    },
    [addTruckCategory.fulfilled]:(state)=>{
        state.loading=false;
        console.log('Inserted')
        window.location.href="/TruckCategory"
    },

    [deleteTruckCategory.fulfilled]:(state)=>{
      state.loading=false;
        window.location.href="/TruckCategory"
    },

    [UpdateTruckCategoryId.fulfilled]:(state,payload)=>{
      state.loading=false;
      state.truckCategoryId = payload.payload.id;
      state.truckCateName =payload.payload.truck_category;
    },

    [UpdateTruckCategory.fulfilled]:(state)=>{
      state.loading=false;
      window.location.href="/TruckCategory"
    },


    [fetchVehicle.pending]: (state) => {
      state.loading = true;
    },
    [fetchVehicle.fulfilled]: (state, action) => {
      state.loading = false;
      state.vehicleDetails = action.payload;
    },

    [addVehicle.pending]:(state)=>{
      state.loading=true;
    },
    [addVehicle.fulfilled]:(state)=>{
        state.loading=false;
        window.location.href="/VehicleDetails"
    },

    [deleteVehicle.fulfilled]:(state)=>{
      state.loading=false;
        window.location.href="/VehicleDetails"
    }, 
 
    [UpdateVehicleId.fulfilled]:(state,payload)=>{
      state.loading=false;
      state.vehicleId             =  payload.payload.vid;
      state.vehicleBrand          =  payload.payload.marque_vehicule;
      state.vehicleModel          =  payload.payload.model_vehical;
      state.vehicleRegistration   =   payload.payload.register;
      state.vehicleNo             =   payload.payload.num_categories;
      state.vehiclePurchaseDate   =   payload.payload.date_acquisition;
      state.vehicleTruckCategory  =   payload.payload.id_truck_category;
    },

    [UpdateVehicle.fulfilled]:(state)=>{
      state.loading=false;
      window.location.href="/VehicleDetails"
    },

  },
});

export const { setTruckCategory,setVehicleBrand,setVehicleModel,setVehicleTruckCategory,setVehicleNo,setVehiclePurchaseDate,setVehicleRegistration } = TruckOperation.actions;
export default TruckOperation.reducer;
