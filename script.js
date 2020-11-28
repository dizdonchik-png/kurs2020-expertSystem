const btn = document.querySelector("#btn");

btn.addEventListener("click", function() {
    let meteo = document.querySelector("#input-01");
    let electricPower = document.querySelector("#input-02");
    let numberElectric = document.querySelector("#input-03").value;
    let workPerDay = document.querySelector("#input-04");
    let typeLamps = document.querySelector("#input-05");
    let numberLamps = document.querySelector("#input-06").value;
    let nameBoiler = document.querySelector("#input-07");
    let typeFuel = document.querySelector("#input-08");
    let typeTP = document.querySelector("#input-09");
    let numberTransformers = document.querySelector("#input-10").value;
    let nameAddElectric = document.querySelector("#input-11");
    let numberAddElectric = document.querySelector("#input-12").value;

    numberUnitsElectric = 0.61 * 1.2 * Number(numberElectric);
    numberUnitsLamps = 0.91 * Number(numberLamps);
    numberUnitsBoiler = 128.3 * 1;
    numberUnitsTP = 3.5 * Number(numberTransformers);
    numberUnitsAddElectric = 3.93 * Number(numberAddElectric);

    let totalNumber = numberUnitsElectric + numberUnitsLamps + numberUnitsBoiler + numberUnitsTP + numberUnitsAddElectric;

    alert("Общее количество у.е.э. по хозяйству: " + totalNumber.toFixed(2) + " у.е.э.")

    formExploitation(totalNumber);

    chooseStaff(totalNumber);

    let normativeNumber = totalNumber / 100;
    alert("Нормативное количество электромонтеров в хозяйстве: " + Math.round(normativeNumber))

    let scopeOfWorkSecondSection = totalNumber * 5 / 70;
    alert("Объём работ второго раздела ГПП - повышение эффективности эксплуатации - корректировка и комплектования электроустановок: " + scopeOfWorkSecondSection.toFixed(2) + " у.е.э.");

    let scopeOfWorkThirdSection = totalNumber * 7 / 70;
    alert("Объём работ третьего раздела ГПП - развитие электрификации и автоматизации - электромонтажные работы: " + scopeOfWorkThirdSection.toFixed(2) + " у.е.э.");
});

function formExploitation(totalNumber) {
    if (totalNumber <= 300) {
        alert("Форма эксплуатации в хозяйстве - централизованная комплексная")
    } 
    else if (totalNumber >= 301 && totalNumber <= 800) {
        alert("Форма эксплуатации в хозяйстве - специализированная централизованная")
    }
    else if (totalNumber > 800) {
        alert("Форма эксплуатации в хозяйстве - индивидуальная")
    }
}

function chooseStaff(totalNumber) {
    if (totalNumber > 1500) {
        alert("Штат инженерно-технических работников, на которых возлагается руководство по ЭТС: должность - Главный энергетик")
    } 
    else if (totalNumber >= 1001 && totalNumber <= 1500) {
        alert("Штат инженерно-технических работников, на которых возлагается руководство по ЭТС: должность - Старший инженер-энергетик (на правах главного)")
    }
    else if (totalNumber >= 501 && totalNumber <= 1000) {
        alert("Штат инженерно-технических работников, на которых возлагается руководство по ЭТС: должность - Старший инженер-энергетик")
    }
    else if (totalNumber >= 251 && totalNumber <= 500) {
        alert("Штат инженерно-технических работников, на которых возлагается руководство по ЭТС: должность - Инженер-электрик")
    }
    else if (totalNumber >= 101 && totalNumber <= 250) {
        alert("Штат инженерно-технических работников, на которых возлагается руководство по ЭТС: должность - Старший техник-электрик")
    }
}

