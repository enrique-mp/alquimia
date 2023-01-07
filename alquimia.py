#!/bin/env python

"""
Calculadora de alquimia. Se pasará como primer argumento el porcentaje
recomendado del fabricante y como segundo argumento la cantidad de aroma.
En caso de no especificar segundo argumento, se tomará como referencia la
cantidad considerada estandar, 30 ml.
"""


def alquimia(a, *b):
    return (int(b) / int(a)) / 100


def main():
    pc_aroma = input('\nPorcentaje (%) de Aroma: ')
    ml_aroma = input('Cantidad (en ml.) de aroma: ')
    if ml_aroma == "":
        ml_aroma = int(30)

    base = ((int(ml_aroma) / int(pc_aroma)) * 100) - int(ml_aroma)

    liq = (int(base) + int(ml_aroma))

    print(
        f'\nLa cantidad de base necesaria es {base} para un total de {liq} ml.\
 de líquido final')


if __name__ == "__main__":
    main()
