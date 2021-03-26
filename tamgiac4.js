let dong4 = 1
let tamGiac4 = ""
while (dong4 <= 5) {
    let cot4 = 1
    while (cot4 <= 5) {
        if (cot4 >= dong4) {
            tamGiac4 += "*"
        } else {
            tamGiac4 += "_"
        }
        cot4++
    }
    tamGiac4 += "<br>"
    dong4++
}
document.write(tamGiac4)