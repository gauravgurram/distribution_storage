import { configureStore } from "@reduxjs/toolkit";
import TravelOperation from './slice'
import TruckOperation from './vehicleslice'
import registrationOperation from './registration'
import adminuserregister from './adminuserregister'
import distributionSlice from './distributionslice'
import typedistribution from './typedistribution'
import DriverOperation from './driverslice'
import statusDistribution from './statusdistribution'

export const store = configureStore({
  reducer :{TravelOperation:TravelOperation,
            TruckOperation:TruckOperation,
            registrationOperation:registrationOperation,
            adminuserregister:adminuserregister,
            distributionSlice:distributionSlice,
            typedistribution:typedistribution,
            DriverOperation:DriverOperation,
            statusDistribution:statusDistribution,
          },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})