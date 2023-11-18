<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class mapping_driver_vehicle extends Model
{
    use HasFactory;
    protected $fillable=['id_driver','id_vehicle','flag_status'];
}
