<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('produtos', function (Blueprint $table) {
            $table->id(); // id auto incremento primary key
            $table->string('nome'); // nome do produto
            $table->text('descricao_produto')->nullable(); // descrição
            $table->string('tipo_produto')->nullable(); // tipo ou categoria
            $table->decimal('preco', 10, 2); // preço em reais, aceita vírgula no input
            $table->string('usuario_cadastro'); // nome do usuário que cadastrou
            $table->timestamps(); // created_at e updated_at
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('produtos');
    }
};
