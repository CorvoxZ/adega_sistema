<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Produto extends Model
{
    use HasFactory;

protected $fillable = [
    'nome',
    'descricao_produto',
    'tipo_produto',
    'preco',
    'usuario_cadastro',
    'foto',
];

}
