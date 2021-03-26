let dong3 = 1
let tamGiac3 = ""
while (dong3 <= 5) {
    let cot3 = 5
    while (cot3 >= 1) {
        if (cot3 <= dong3) {
            tamGiac3 += "*"
        } else {
            tamGiac3 += "_"
        }
        cot3--
    }
    tamGiac3 += "<br>"
    dong3++
}
document.write(tamGiac3)