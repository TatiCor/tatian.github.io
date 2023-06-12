function calcular() {
    const remuneracionInput = document.getElementById("remuneracion");
    const smvmInput = document.getElementById("smvm");
    const mesesInput = document.getElementById("meses");
    const cuotasSelect = document.getElementById("cuotas");

    const meses = parseInt(mesesInput.value);
    if (meses < 1 || meses > 360 || isNaN(meses)) {
      alert("Por favor ingrese un número válido de meses (entre 1 y 360)");
      return;
    }

    const valorUPP = (remuneracionInput.value * 0.29).toFixed(2);
    const montoMaximoCuota = (smvmInput.value * 0.3).toFixed(2);

    const cuotas = parseInt(cuotasSelect.value);
    const totalPagar = (valorUPP * meses).toFixed(2);
    const cuotaMensual = (totalPagar / cuotas).toFixed(2);
    const cuotaMensualUpp = (cuotaMensual / valorUPP).toFixed(2);

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `Valor UPP: $${valorUPP}<br>Monto máximo mensual por cuota: $${montoMaximoCuota}<br>Deuda a regularizar: $${totalPagar}<br> Meses a regularizar ${meses}<br>Monto a pagar mensual: $${cuotaMensual}<br>Cantidad de UPP por mes: ${cuotaMensualUpp}`;
}

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");
}