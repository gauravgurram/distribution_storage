<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class distribution_line extends Model
{
    use HasFactory;
    protected $fillable=['id_distribution_header','num_bl','name_delivery','qty_line','volume_line','line_order'];
}
