<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\distribution_header;
use App\Model\vehicle_fleet;
use App\Model\status_distribution;
use App\Model\type_distribution;
use App\Model\client;
use App\Models\driver;
use App\Models\city;
use App\Models\truck_category;
use DB;
use Illuminate\Support\Facades\DB as FacadesDB;
use Maatwebsite\Excel\Facades\Excel;
use App\Imports\distributionImport;
use App\Exports\distributionExport;
use Carbon\Carbon;


class distribution_headerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data=DB::table('distribution_headers')

        ->join('clients','distribution_headers.id_Client','=','clients.id')

        ->join('type_distributions','distribution_headers.id_type_distribution','=','type_distributions.id')

        // ->join('cities','distribution_headers.id_city','=','cities.id')

        // ->join('truck_categories','distribution_headers.id_truck_category','=','truck_categories.id')

        // ->join('drivers','distribution_headers.id_driver','=','drivers.id')

        // ->join('vehicle_fleets','distribution_headers.id_vehicle','=','vehicle_fleets.id')

        // ->join('status_distributions','distribution_headers.id_status_distribution','=','status_distributions.id')

        ->select('*','distribution_headers.id as dhid')

        ->get();

        return response()->json($data);
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
        $id_Client=$request->get('id_Client');
        $code_distribution=$request->get('code_distribution');
        $id_type_distribution=$request->get('id_type_distribution');
        $axe_distribution=$request->get('axe_distribution');
        $volume=$request->get('volume');
        $qty=$request->get('qty');
        $nbr_delivery_points=$request->get('nbr_delivery_points');
        $nbr_expected_days=$request->get('nbr_expected_days');
        $comments=$request->get('comments');
        $is_mutual=$request->get('is_mutual');
        $date_delivery=$request->get('date_delivery');

        $distance=$request->get('distance');

        $cityId=$request->get('cityId');

        $truckId=$request->get('truckId');

        $orderDate=$request->get('orderDate');

        $statusDistribution=$request->get('statusDistribution');

        $createdBy=$request->get('createdBy');

        $createdon=Carbon::now();

        $data=new distribution_header([
            'id_Client'=>$id_Client,
            'code_distribution'=>$code_distribution,
            'id_type_distribution'=>$id_type_distribution,
            'axe_distribution'=>$axe_distribution,
            'volume'=>$volume,
            'qty'=>$qty,
            'nbr_delivery_points'=>$nbr_delivery_points,
            'nbr_expected_days'=>$nbr_expected_days,
            'comments'=>$comments,
            'is_mutual'=>$is_mutual,
            'date_delivery'=>$date_delivery,
            'distance'=>$distance,
            'id_city'=>$cityId,
            'id_truck_category'=>$truckId,
            'date_order'=>$orderDate,
            'id_status_distribution'=>$statusDistribution,
            'createdby'=>$createdBy,
            'createdon'=>$createdon,
        ]);
        $data->save();
        return response()->json(['status'=>'pass','msg'=>'Inserted']);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $data=DB::table('distribution_headers')

        ->join('clients','distribution_headers.id_Client','=','clients.id')

        ->join('type_distributions','distribution_headers.id_type_distribution','=','type_distributions.id')

        // ->join('cities','distribution_headers.id_city','=','cities.id')

        // ->join('truck_categories','distribution_headers.id_truck_category','=','truck_categories.id')

        // ->join('drivers','distribution_headers.id_driver','=','drivers.id')

        // ->join('vehicle_fleets','distribution_headers.id_vehicle','=','vehicle_fleets.id')

        // ->join('status_distributions','distribution_headers.id_status_distribution','=','status_distributions.id')

        ->where('distribution_headers.id','=',$id)
        ->select('*','distribution_headers.id as dhid')
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

        $date_execution=$request->get('date_execution');
        $id_driver=$request->get('id_driver');
        $id_vehicle=$request->get('id_vehicle');


        $data=distribution_header::find($id);

        $data->date_execution=$date_execution;
        $data->id_driver=$id_driver;
        $data->id_vehicle=$id_vehicle;

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

        $data2 = FacadesDB::table('distribution_lines')
        ->where('distribution_lines.id_distribution_header', '=', $id)
        ->delete();

        $data=distribution_header::find($id);
        $data->delete();

        return response()->json(['status'=>'pass','msg'=>'deleted']);
    }


    public function import(Request $request)
    {
        if ($request->hasFile('file')) {
            Excel::import(new distributionImport, $request->file('file'));
            return response()->json(['message' => 'File imported successfully'], 200);
        } else {
            return "bye";

            return response()->json(['error' => 'No file found in the request'], 400);
        }
    }



    public function export()
    {
        return Excel::download(new distributionExport, 'exported-data.xlsx');
    }

}
