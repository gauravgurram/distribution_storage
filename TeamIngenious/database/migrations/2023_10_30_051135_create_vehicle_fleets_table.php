<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVehicleFleetsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('vehicle_fleets', function (Blueprint $table) {
            $table->id();
            $table->string('marque_vehicule');
            $table->string('model_vehical');
            $table->string('register');
            $table->string('num_categories');
            $table->string('date_acquisition');
            $table->string('id_truck_category');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('vehicle_fleets');
    }
}
