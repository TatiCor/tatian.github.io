function calcular() {
    const remuneracionInput = document.getElementById("remuneracion");   
    const mesesInput = document.getElementById("meses");
    const cuotasSelect = document.getElementById("cuotas");

    const meses = parseInt(mesesInput.value);
    if (meses < 1 || meses > 360 || isNaN(meses)) {
      alert("Por favor ingrese un número válido de meses (entre 1 - 360)");
      return;
    }
    
    const valorUPP = (remuneracionInput.value * 0.29).toFixed(2);  
    const cuotas = parseInt(cuotasSelect.value);
    const totalPagar = (valorUPP * mesesInput.value).toFixed(2);
    const cuotaMensual = (totalPagar / cuotas).toFixed(2);
    
    const formatter = new Intl.NumberFormat("es-AR");
    const valorUPPFormatted = formatter.format(valorUPP);
    const totalPagarFormatted = formatter.format(totalPagar);
    const cuotaMensualFormatted = formatter.format(cuotaMensual);

    const resultado = document.getElementById("resultado");
    
    resultado.innerHTML = `Valor UPP: $${valorUPPFormatted}<br> Deuda total: $${totalPagarFormatted}<br> Meses a regularizar ${meses}<br>Monto a pagar mensual: $${cuotaMensualFormatted}`;
}

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");
}