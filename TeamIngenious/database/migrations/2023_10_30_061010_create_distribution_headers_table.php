<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDistributionHeadersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('distribution_headers', function (Blueprint $table) {
            $table->id();
            $table->string('id_Client');
            $table->string('code_distribution');
            $table->string('id_type_distribution');
            $table->string('axe_distribution');
            $table->string('volume');
            $table->string('qty');
            $table->string('nbr_delivery_points');
            $table->string('nbr_expected_days');
            $table->string('comments');
            $table->string('distance');
            $table->string('id_city');
            $table->string('is_mutual');
            $table->string('id_truck_category');
            $table->string('date_order');
            $table->string('date_execution');
            $table->string('id_driver');
            $table->string('id_vehicle');
            $table->string('date_delivery');
            $table->string('id_status_distribution');
            $table->string('createdby');
            $table->string('createdon');
            $table->string('modifiedby');
            $table->string('modifiedon');
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
        Schema::dropIfExists('distribution_headers');
    }
}
