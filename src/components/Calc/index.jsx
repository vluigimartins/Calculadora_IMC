import styles from './Calc.module.css'
import React, { useState } from 'react';


function Calc() {
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');
    const [imc, setIMC] = useState(null);
    const [classificacao, setClassificacao] = useState('');

    const calcularIMC = () => {
        if (altura === '' || peso === '') {
            alert('Por favor, preencha altura e peso.');
            return;
        }

        const alturaMetros = altura / 100;
        const imcCalculado = peso / (alturaMetros * alturaMetros);

        setIMC(imcCalculado);

        if (imcCalculado < 18.5) {
            setClassificacao('Abaixo do peso');
        } else if (imcCalculado < 24.9) {
            setClassificacao('Peso normal');
        } else if (imcCalculado < 29.9) {
            setClassificacao('Sobrepeso');
        } else if (imcCalculado < 34.9) {
            setClassificacao('Obesidade Grau I');
        } else if (imcCalculado < 39.9) {
            setClassificacao('Obesidade Grau II');
        } else {
            setClassificacao('Obesidade Grau III');
        }
    };

    return (
        <div className={styles.App}>
            <h1 className={styles.titulo}>Calcular IMC</h1>
            <div className={styles.form}>
                <label className={styles.entradas}>Altura (cm):</label>
                <input type="number" value={altura}
                    onChange={(e) => setAltura(e.target.value)}/>
                <label className={styles.entradas}>Peso (kg):</label>
                <input type="number" value={peso}
                    onChange={(e) => setPeso(e.target.value)}/>
                <button className={styles.button} onClick={calcularIMC}>Calcular</button>
            </div>
            {imc !== null && (
                <div className={styles.resultado}>
                    <p>Seu IMC é: {imc.toFixed(2)}</p>
                    <p>Classificação: {classificacao}</p>
                </div>
            )}
        </div>
    );
}

export default Calc;

