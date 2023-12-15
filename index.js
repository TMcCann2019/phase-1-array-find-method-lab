// code your solution here
function superbowlWin (record){
    const winObject = record.find (year => year.result === "W")
    return winObject ? winObject.year : undefined
}
