let nomeDoHeroi = "Allysson";
let classificacaoDoHeroi = "";
let xpDoHeroi = 10500;

if (xpDoHeroi <= 1000) {
    classificacaoDoHeroi = "Ferro";
}else if (xpDoHeroi >= 1001 && xpDoHeroi <= 2000) {
    classificacaoDoHeroi = "Bronze";
}else if (xpDoHeroi >= 2001 && xpDoHeroi <= 5000) {
    classificacaoDoHeroi = "Prata";
}else if (xpDoHeroi >= 5001 && xpDoHeroi <= 7000) {
    classificacaoDoHeroi = "Ouro";
}else if (xpDoHeroi >= 7001 && xpDoHeroi <= 8000) {
    classificacaoDoHeroi = "Platina";
}else if (xpDoHeroi >= 8001 && xpDoHeroi <= 9000) {
    classificacaoDoHeroi = "Ascendente";
}else if (xpDoHeroi >= 9001 && xpDoHeroi <= 10000) {
    classificacaoDoHeroi = "Imortal";
}else if (xpDoHeroi >= 10001) {
    classificacaoDoHeroi = "Radiante";
}else {
    console.log("XP muito baixo!");
}

console.log(`O Herói de nome *${nomeDoHeroi}* está com *${xpDoHeroi}* de XP e está no nível *${classificacaoDoHeroi}!*`);