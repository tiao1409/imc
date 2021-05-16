
function somar() {
    var massa = parseFloat(document.getElementById('massa').value);
    var altura = parseFloat(document.getElementById('altura').value);
    var somaImc = (Math.round(massa / (altura * altura)));

    if (isNaN(massa) || isNaN(altura)) {
        alert('Numero invalidos');
        return;
    }
    if (somaImc < 16) {
        alert('SEU IMC é : ' + somaImc + ' kg/m2' + '\n' + 'CATEGORIA : Magreza Grave');
        return;
    }
    else if ((somaImc > 16) && (somaImc < 17)) {
        alert('SEU IMC é : ' + somaImc + ' kg/m2' + '\n' + 'CATEGORIA : Magreza Moderada');
        return;
    }
    else if ((somaImc > 17) && (somaImc < 18.5)) {
        alert('SEU IMC é : ' + somaImc +' kg/m2' + '\n' + 'CATEGORIA : Magreza Leve');
        return;
    }
    else if ((somaImc > 18.5) && (somaImc < 25)) {
        alert('SEU IMC é : ' + somaImc + ' kg/m2' + '\n' + 'CATEGORIA : Saudavel');
        return;
    }
    else if ((somaImc > 25) && (somaImc < 30)) {
        alert('SEU IMC é : ' + somaImc + ' kg/m2' + '\n' + 'CATEGORIA : Sobrepeso');
        return;
    }
    else if ((somaImc > 30) && (somaImc < 35)) {
        alert('SEU IMC é : ' + somaImc + ' kg/m2' + '\n' + 'CATEGORIA : Obesidade Grau I');
        return;
    }
    else if ((somaImc > 35) && (somaImc < 40)) {
        alert('SEU IMC é : ' + somaImc + ' kg/m2' + '\n' + 'CATEGORIA : Obesidade Grau II (Severa)');
        return;
    }
    else if (somaImc >= 40) {
        alert('SEU IMC é : ' + somaImc + ' kg/m2' + '\n' + 'CATEGORIA : Obesidade Grau III (Mórbita)');
        return;
    }

}