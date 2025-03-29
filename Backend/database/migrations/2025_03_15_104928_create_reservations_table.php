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
        Schema::create('reservations', function (Blueprint $table) {
            $table->id();
        $table->foreignId('id_client')->constrained('clients');
        $table->foreignId('id_voiture')->constrained('voitures');
        $table->date('date_debut');
        $table->date('date_fin');
        $table->enum('statut', ['en attente', 'confirmée', 'annulée']);
        $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reservations');
    }
};
