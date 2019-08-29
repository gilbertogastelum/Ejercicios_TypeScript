var tanque = {
    tamano: 50,
    vida: 100,
    rango: 60,
    dano: 12
};
tanque.vida = 95;
var TankHit = function (tankName, danoRealizado) {
    tankName.vida -= danoRealizado;
    return tankName.vida;
};
