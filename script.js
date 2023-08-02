let salario = parseInt(prompt('Quanto você recebe:'));

if(salario <= 280)
{
    acressimo = salario * 0.20;
    novo = salario + acressimo;
    alert(`Salário antes do reajuste: R$${salario}\nPorcentual de aumento de 20%\nValor do aumento: R$${acressimo}\nSalário após o aumento: R$${novo}`)
}
else if(salario > 280 && salario <= 700)
{
    acressimo = salario * 0.15;
    novo = salario + acressimo;
    alert(`Salário antes do reajuste: R$${salario}\nPorcentual de aumento de 15%\nValor do aumento: R$${acressimo}\nSalário após o aumento: R$${novo}`)
}
else if(salario > 700 && salario <= 1500)
{
    acressimo = salario * 0.10;
    novo = salario + acressimo;
    alert(`Salário antes do reajuste: R$${salario}\nPorcentual de aumento de 10%\nValor do aumento: R$${acressimo}\nSalário após o aumento: R$${novo}`)
}
else if(salario > 1500)
{
    acressimo = salario * 0.05;
    novo = salario + acressimo;
    alert(`Salário antes do reajuste: R$${salario}\nPorcentual de aumento de 5%\nValor do aumento: R$${acressimo}\nSalário após o aumento: R$${novo}`)
}