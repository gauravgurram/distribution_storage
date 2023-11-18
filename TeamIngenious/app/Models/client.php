<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class client extends Model
{
    use HasFactory;
    protected $fillable=['code_client','name_client','id_city','address','createdby','modifiedby'];
}
