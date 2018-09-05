json.pokemon do
  json.extract! @pokemon,
    :id,
    :name,
    :attack,
    :defense,
    :poke_type,
    :moves,
    :image_url
end
json.items do
  @pokemon.items.each do |item|
    json.set! item.id do
      json.extract! item,
        :id,
        :pokemon_id,
        :name,
        :price,
        :happiness,
        :image_url
    end
  end
end
