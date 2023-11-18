<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\client;
use App\Models\city;
use DB;
use Illuminate\Support\Facades\DB as FacadesDB;

class clientController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $city_client=DB::table('cities')
        ->join('clients','cities.id','=','clients.id_city')
        ->select('*','cities.id as cid')
        ->get();

        // $city_client=client::get();
        return response()->json($city_client);
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
        $code_client="CT101";
        $name_client=$request->get('name_client');
        $id_city=$request->get('id_city');
        $address=$request->get('address');
        $createdBy=$request->get('createdBy');
        $data=new client([
            'code_client'=>$code_client,
            'name_client'=>$name_client,
            'id_city'=>$id_city,
            'address'=>$address,
            'createdby'=>$createdBy,
        ]);
        $data->save();
        return response()->json(['status'=>'pass','msg'=>'success']);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $data=client::find($id);

        // $city_client=DB::table('cities')
        // ->join('clients','cities.id','=','clients.id_city')
        // ->where('cities.id','=',$id)
        // ->select('*','cities.id as cid')
        // ->get();

        return response()->json($data);

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
        $code_client="CT102";
        $name_client=$request->get('name_client');
        $id_city=$request->get('id_city');
        $address=$request->get('address');
        $modifiedBy=$request->get('modifiedBy');

        $data= client::find($id);
        $data->code_client=$code_client;
        $data->name_client=$name_client;
        $data->id_city=$id_city;
        $data->address=$address;
        $data->modifiedby=$modifiedBy;
        $data->update();
        return response()->json(['status'=>'pass','msg'=>'updated']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $data=client::find($id);
        $data->delete();
        return response()->json(['status'=>'pass','msg'=>'deleted']);
    }
}
