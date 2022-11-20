let listEK, nettoEinstandspreis, inclMwSt;
let listRabattInEuro, listRabattInPercent;
let sonderRabatt1InEuro, sonderRabatt1InPercent;
let sonderRabatt2InEuro, sonderRabatt2InPercent;

const GetInputs = () => {
    console.log("Start getting inputs.");
    listEK = document.querySelector("#input_ListEK").value;
    inclMwSt = document.querySelector(
        "#input_inclMwSt"
    ).value;

    nettoEinstandspreis = document.querySelector(
        "#input_NettoEinstandspreis"
    ).value;

    listRabattInEuro = document.querySelector("#input_ListRabattInEuro").value;
    listRabattInPercent = document.querySelector(
        "#input_ListRabattInPercent"
    ).value;

    sonderRabatt1InEuro = document.querySelector(
        "#input_SonderrabattInEuro1"
    ).value;
    sonderRabatt1InPercent = document.querySelector(
        "#input_SonderrabattInPercent1"
    ).value;

    sonderRabatt2InEuro = document.querySelector(
        "#input_SonderrabattInEuro2"
    ).value;
    sonderRabatt2InPercent = document.querySelector(
        "#input_SonderrabattInPercent2"
    ).value;

    listEK = document.querySelector("#input_ListEK").value;
    return;
};

const SetValues = () => {
    console.log("Start setting values.");
};

const Kalculate = () => {
    console.log("Start setting values.");
    console.log(inclMwSt);
    // Calculate listEK
    if (listEK == 0 || listEK == "") {
        console.log("listEK is 0 or null");

        listEK =
            nettoEinstandspreis +
            sonderRabatt1InEuro +
            sonderRabatt2InEuro +
            listRabattInEuro;
    }
};

const StartKalculation = () => {
    console.log("Start the procces.");
    GetInputs();
    Kalculate();
    SetValues();
    return;
};
