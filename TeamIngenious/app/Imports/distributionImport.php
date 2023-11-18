<?php

namespace App\Imports;

use App\Models\distribution_header as ModelsDistribution_header;
use App\Models\Models\distribution_header;
use Maatwebsite\Excel\Concerns\ToModel;

class distributionImport implements ToModel
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {
        return new ModelsDistribution_header([
            'id_Client'=>$row[1],
            'code_distribution'=>$row[2],
            'id_type_distribution'=>$row[3],
            'axe_distribution'=>$row[4],
            'volume'=>$row[5],
            'qty'=>$row[6],
            'nbr_delivery_points'=>$row[7],
            'nbr_expected_days'=>$row[8],
            'comments'=>$row[9],
            'distance'=>$row[10],
            'id_city'=>$row[11],
            'is_mutual'=>$row[12],
            'id_truck_category'=>$row[13],
            'date_order'=>$row[14],
            'date_execution'=>$row[15],
            'id_driver'=>$row[16],
            'id_vehicle'=>$row[17],
            'date_delivery'=>$row[18],
            'id_status_distribution'=>$row[19],
            'createdby'=>$row[20],
            'createdon'=>$row[21],
            'modifiedby'=>$row[22],
            'modifiedon'=>$row[23],
        ]);
    }
}
