<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\mapping_driver_vehicle;
use App\Models\driver;
use App\Models\vehicle_fleet;
use DB;

class mappingController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
         $mappimg=DB::table('mapping_driver_vehicles')

                ->join('drivers','mapping_driver_vehicles.id_driver','=','drivers.id')

                ->join('vehicle_fleets','mapping_driver_vehicles.id_vehicle','=','vehicle_fleets.id')

                ->join('truck_categories','truck_categories.id','=','vehicle_fleets.id_truck_category')

                ->select('*','mapping_driver_vehicles.id as mid','truck_categories.id as tid')

                ->get();

         return response()->json($mappimg);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $driver_id=$request->get('id_driver');
        $vehicle_id=$request->get('id_vehicle');
        $status=$request->get('flag_status');

        $insert=new mapping_driver_vehicle([
            'id_driver'=>$driver_id,
            'id_vehicle'=>$vehicle_id,
            'flag_status'=>$status
        ]);

        $insert->save();
        echo "data insert";
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $mappimg=DB::table('mapping_driver_vehicles')
        ->join('drivers','drivers.id','=','mapping_driver_vehicles.id_driver')
        ->join('vehicle_fleets','vehicle_fleets.id','=','mapping_driver_vehicles.id_vehicle')->where('mapping_driver_vehicles.id','=',$id)
        ->first();
         return response()->json($mappimg);

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $driver_id=$request->get('id_driver');
        $vehicle_id=$request->get('id_vehicle');
        $status=$request->get('flag_status');
        $update=mapping_driver_vehicle::find($id);
        $update->id_driver=$driver_id;
        $update->id_vehicle=$vehicle_id;
        $update->flag_status=$status;
        $update->update();
        echo "data updated";
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $delete=mapping_driver_vehicle::find($id);
        $delete->delete();
        echo "record deleted";
    }
}
