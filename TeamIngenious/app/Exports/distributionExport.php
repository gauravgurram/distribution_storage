<?php

namespace App\Exports;

use App\Models\distribution_header as ModelsDistribution_header;
use App\Models\Models\distribution_header;
use Maatwebsite\Excel\Concerns\FromCollection;

class distributionExport implements FromCollection
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return ModelsDistribution_header::all();
    }
}
