<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Produto extends Model
{
    use HasFactory;

protected $fillable = [
    'nome',
    'descricao_produto',
    'tipo_produto',
    'preco',
    'foto',
    'user_id',
];

    /**
     * Appends to the model's array form.
     *
     * @var array
     */
    protected $appends = ['foto_url', 'preco_formatado'];

    /**
     * Get the full URL for the product's photo.
     *
     * @return string
     */
    public function getFotoUrlAttribute(): string
    {
        if ($this->foto) {
            // Assume que as imagens estão em `storage/app/public` e que você rodou `php artisan storage:link`
            return \Illuminate\Support\Facades\Storage::url($this->foto);
        }

        // Placeholder caso um produto não tenha imagem
        return 'https://via.placeholder.com/400x500.png?text=Sem+Imagem';
    }

    public function getPrecoFormatadoAttribute(): string
    {
        return 'R$ ' . number_format($this->preco, 2, ',', '.');
    }

    /**
     * Get the user that owns the product.
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
