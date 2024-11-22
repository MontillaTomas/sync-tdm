# Calculadora TDM Síncrona

Bienvenido a la **Calculadora TDM Síncrona**, una herramienta diseñada para calcular parámetros esenciales en la Multiplexación por División de Tiempo Síncrona (TDM).

## ¿Qué es TDM Síncrona?

La **Multiplexación por División de Tiempo** (TDM, por sus siglas en inglés) es una técnica de multiplexación utilizada en señales digitales. Consiste en dividir un canal de alta capacidad en subcanales lógicos asignados en intervalos de tiempo. La **TDM síncrona** asigna secuencialmente ranuras de tiempo a cada dispositivo conectado, independientemente de si tienen datos para transmitir.

### Fórmulas utilizadas:

1. **Tamaño de la trama de salida** = (Número de líneas de entrada × Ranura de tiempo) + Bits de sincronismo + Bits de señalización

2. **Duración de la trama** = Ranura de tiempo / Tasa de bits de entrada

3. **Tasa de tramas** = 1 / Duración de la trama

4. **Tasa de bits de salida** = Tamaño de la trama de salida / Duración de la trama

5. **Eficiencia del sistema** = (Tamaño de la trama de salida - Bits de sincronismo - Bits de señalización) / Tamaño de la trama de salida * 100

## Cómo usar la calculadora

1. Ingrese los valores necesarios en los campos:
   - **Número de líneas de entrada o fuentes**
   - **Tasa de bits de entrada**
   - **Ranura de tiempo  o bits por fuente**
   - **Bits de sincronismo**
   - **Bits de señalización**
2. Presione el botón **Calcular**.
3. Revise los resultados generados:
   - **Tamaño de la trama de salida**
   - **Duración de la trama**
   - **Tasa de tramas**
   - **Tasa de bits de salida**
   - **Eficiencia del sistema**

## Probar la aplicación

Puede probar la aplicación en el siguiente enlace: [Calculadora TDM Síncrona](https://montillatomas.github.io/sync-tdm/)

## Datos del Proyecto

- **Institución**: UTN FRT
- **Materia**: Comunicaciones
- **Comisión**: 3K4
- **Autor**: Montilla Tomas
- **Legajo**: 53331

## Repositorio

- Repositorio en GitHub: [https://github.com/MontillaTomas/sync-tdm](https://github.com/MontillaTomas/sync-tdm)
