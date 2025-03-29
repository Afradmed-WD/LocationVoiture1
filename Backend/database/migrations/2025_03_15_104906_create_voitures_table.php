<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('voitures', function (Blueprint $table) {
            $table->id();
            $table->text('ImageP');
            $table->text('ImageS1');
            $table->text('ImageS2');
            $table->text('ImageS3');
            $table->string('title');
            $table->string('type');
            $table->decimal('prix_jour',10,2);
            $table->enum('status',['Disponible','réservée']);
            $table->string('consomation');
            $table->string('category');
            $table->text('description');
            $table->integer('dor');



            

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('voitures');
    }
};
