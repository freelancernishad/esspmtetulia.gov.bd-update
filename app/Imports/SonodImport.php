<?php

namespace App\Imports;

use App\Models\Sonod;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;

class SonodImport implements ToCollection
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */


        public function collection(Collection $rows)
        {
            foreach ($rows as $row)
            {


            }

            }

}
