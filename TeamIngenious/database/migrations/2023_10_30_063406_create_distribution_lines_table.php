<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDistributionLinesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('distribution_lines', function (Blueprint $table) {
            $table->id();
            $table->string('id_distribution_header');
            $table->string('num_bl');
            $table->string('name_delivery');
            $table->string('qty_line');
            $table->string('volume_line');
            $table->string('line_order');
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
        Schema::dropIfExists('distribution_lines');
    }
}
