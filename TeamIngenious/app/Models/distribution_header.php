<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class distribution_header extends Model
{
    use HasFactory;
    protected $fillable=['id_Client','code_distribution','id_type_distribution','axe_distribution','volume','qty','nbr_delivery_points','nbr_expected_days','comments','distance','id_city','is_mutual','id_truck_category','date_order','date_execution','id_driver','id_vehicle','date_delivery','id_status_distribution','createdby','createdon','modifiedby','modifiedon'];
}
