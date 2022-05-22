function superbowlWin(array){
    const championships = array.find(season =>
        season.result === 'W'
    )
    return championships ? championships.year : undefined;
}

