const SelfEesteem = () => {
    const arr = [
        'Вёрстка валидная +10',
        'Вёрстка семантическая +20',
        'Вёрстка соответствует макету +48',
        'Требования к css + 12',
        'Интерактивность, реализуемая через css +20'
    ]
    return arr.map((item, index) => console.log(`${index + 1}. ${item}\n`))
}

SelfEesteem()