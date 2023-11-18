<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\vehicle_fleet;
use App\Models\truck_category;
use DB;
use Illuminate\Support\Facades\DB as FacadesDB;

class vehiculefleetController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // $vehicle=vehicle_fleet::get();

        $vehicle=DB::table('vehicle_fleets')
                ->join('truck_categories','vehicle_fleets.id_truck_category','=','truck_categories.id')
                ->select('*','vehicle_fleets.id as vid')
                ->get();

        return response()->json($vehicle);
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
        $marque=$request->get('marque_vehicule');
        $modele=$request->get('model_vehical');
        $register=$request->get('register');
        $num_cate=$request->get('num_categories');
        $date_acquisition=$request->get('date_acquisition');
        $id_truck_category=$request->get('id_truck_category');
        
        $insert=new vehicle_fleet([
            'marque_vehicule'=>$marque,
            'model_vehical'=>$modele,
            'register'=>$register,
            'num_categories'=>$num_cate,
            'date_acquisition'=>$date_acquisition,
            'id_truck_category'=>$id_truck_category
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
        // $vehicle=FacadesDB::table('vehicle_fleets')
        // ->join('truck_categories','truck_categories.id','=','vehicle_fleets.id_truck_category')->first();

        $vehicle=DB::table('vehicle_fleets')
                ->join('truck_categories','vehicle_fleets.id_truck_category','=','truck_categories.id')
                ->where('vehicle_fleets.id','=',$id)
                ->select('*','vehicle_fleets.id as vid')
                ->first();


        return response()->json($vehicle);





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
        $marque=$request->get('marque_vehicule');
        $modele=$request->get('model_vehical');
        $register=$request->get('register');
        $num_cate=$request->get('num_categories');
        $date_acquisition=$request->get('date_acquisition');
        $id_truck_category=$request->get('id_truck_category');
        $update=vehicle_fleet::find($id);
        $update->marque_vehicule=$marque;
        $update->model_vehical=$modele;
        $update->register=$register;
        $update->num_categories= $num_cate;
        $update->date_acquisition=$date_acquisition;
        $update->id_truck_category=$id_truck_category;
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
        $delete=vehicle_fleet::find($id);
        $delete->delete();
        return response()->json(['status'=>'pass','msg'=>'deleted']);
    }
}
