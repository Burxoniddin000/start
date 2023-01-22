let conunt = 0;

document.getElementById("decrest").onclick = function () {
    conunt -= 1;
    document.getElementById("countLabel").innerHTML = conunt;
}
document.getElementById("resetBtn").onclick = function () {
    conunt = 0;
    document.getElementById("countLabel").innerHTML = conunt;
}
document.getElementById("increaseBtn").onclick = function () {
    conunt += 1;
    document.getElementById("countLabel").innerHTML = conunt;
}