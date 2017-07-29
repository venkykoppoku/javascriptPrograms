

export function range(from: number,to: number): Array<number> {
    var res: Array<number> = []
    for(var i = from; i < to;i++){
        res.push(i)
     }
    return res
}