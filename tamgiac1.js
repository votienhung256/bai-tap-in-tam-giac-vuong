let dong1 = 1
let tamGiac1 = ""
while (dong1 <= 5) {
    let cot1 = 1
    while (cot1 <= dong1) {
        tamGiac1 += "*"
        cot1++
    }
    tamGiac1 += "<br>"
    dong1++
}
document.write(tamGiac1)