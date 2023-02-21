<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Sonod extends Model
{
    use HasFactory,SoftDeletes;
    protected $fillable = [
        'id_no',
        'vataName',
        'name',
        'nidNo',
        'mobileNo',
        'husband_name',
        'occupation',
        'dateOfBirth',
        'father_husband',
        'father_husbandName',
        'father_husbandNid',
        'wifeName',
        'wifeNid',
        'familyMenber',
        'division',
        'district',
        'upazila',
        'unionName',
        'wordNo',
        'village',
        'holdingNo',
        'status',
        'note',
    ];
}
