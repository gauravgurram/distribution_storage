<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TruckCategoryController;
use App\Http\Controllers\vehiculefleetController;
use App\Http\Controllers\statusdistributionController;
use App\Http\Controllers\driverController;
use App\Http\Controllers\mappingController;
use App\Http\Controllers\roleController;
use App\Http\Controllers\userController;
use App\Http\Controllers\type_distributionController;
use App\Http\Controllers\distribution_lineController;
use App\Http\Controllers\clientController;
use App\Http\Controllers\cityController;
use App\Http\Controllers\distribution_headerController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });


Route::middleware(['auth:sanctum'])->group(function () {
    Route::resource('truckcategory',TruckCategoryController::class);
    Route::resource('vehiclefleet',vehiculefleetController::class);
    Route::resource('statusdistribution',statusdistributionController::class);
    Route::resource('driver',driverController::class);
    Route::resource('mapping',mappingController::class);
    Route::apiResource('distribution',type_distributionController::class);
    Route::apiResource('distribution_lines',distribution_lineController::class);
    Route::apiResource('clients',clientController::class);
    Route::apiResource('city',cityController::class);
    Route::apiResource('distribution_header',distribution_headerController::class);
    Route::post('import',[distribution_headerController::class,'import']);
    Route::post('/logout', [UserController::class, 'logout']);
    Route::post('emailcheck',[userController::class,'emailcheck']);
});
    Route::get('export',[distribution_headerController::class,'export']);
    Route::post('/login',[userController::class,'login']);
    Route::resource('role',roleController::class);
    Route::resource('user',userController::class);
