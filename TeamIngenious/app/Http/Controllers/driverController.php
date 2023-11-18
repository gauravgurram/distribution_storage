<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\driver;
use Illuminate\Support\Facades\DB;

class driverController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // $driver=driver::get();

        $driver=DB::table('drivers')
                ->join('truck_categories','drivers.num_permit_to_drive','=','truck_categories.id')
                ->select('*')
                ->get();
        return response()->json($driver);
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
        $firstname=$request->get('firstname');
        $lastname=$request->get('lastname');
        $num_cin=$request->get('num_cin');
        $permittodrive=$request->get('num_permit_to_drive');
        $ntel=$request->get('n_tel');
        $insert=new driver([
            'firstname'=>$firstname,
            'lastname'=>$lastname,
            'num_cin'=>$num_cin,
            'num_permit_to_drive'=>$permittodrive,
            'n_tel'=>$ntel
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
        // $data=driver::find($id);

        $data=DB::table('drivers')
        ->join('truck_categories','drivers.num_permit_to_drive','=','truck_categories.id')
        ->where('drivers.id','=',$id)
        ->select('*')
        ->first();

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
        $firstname=$request->get('firstname');
        $lastname=$request->get('lastname');
        $num_cin=$request->get('num_cin');
        $permittodrive=$request->get('num_permit_to_drive');
        $ntel=$request->get('n_tel');
        $update=driver::find($id);
        $update->firstname=$firstname;
        $update->lastname=$lastname;
        $update->num_cin=$num_cin;
        $update->num_permit_to_drive=$permittodrive;
        $update->n_tel=$ntel;
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
        $delete=driver::find($id);
        $delete->delete();
        echo "record deleted";
    }
}
