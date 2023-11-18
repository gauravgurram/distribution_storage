<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class vehicle_fleet extends Model
{
    use HasFactory;
    protected $fillable=['marque_vehicule','model_vehical','register','num_categories','date_acquisition','id_truck_category'];
}
