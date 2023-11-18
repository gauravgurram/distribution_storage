<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\type_distribution;


class type_distributionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $distribution= type_distribution::get();
        return response()->json($distribution);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $type_distribution=$request->get('type_distribution');
        $distribution=new type_distribution([
            'type_distribution'=>$type_distribution,
        ]);
        $distribution->save();
        return response()->json(['status'=>'pass','msg'=>'add successfully']);        
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $distribution=type_distribution::find($id);
        return response()->json($distribution);
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
        $type_distribution=$request->get('type_distribution');
        
        $update_distribution = type_distribution::find($id);
        $update_distribution->type_distribution=$type_distribution;
        $update_distribution->update();
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
        $distribution=type_distribution::find($id);
        $distribution->delete();
        return response()->json(['status'=>'pass','msg'=>'deleted']);
    }
}
