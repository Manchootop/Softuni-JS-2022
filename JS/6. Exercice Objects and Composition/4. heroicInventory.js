function hero(array){
    const result = []
    for (const iterator of array) {
        let [name, level, items] = iterator.split(' / ');
        level = +level
        items = items ? items.split(', ') : [];

        result.push({name, level, items});
    }
    console.log(JSON.stringify(result));
}

hero(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
)