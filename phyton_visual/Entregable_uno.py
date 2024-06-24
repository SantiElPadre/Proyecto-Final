
     

id = input("Ingrese el ID del producto: ")
nombre = input("Ingrese el nombre del producto: ")
descripcion = input("Ingrese la descripcion del producto: ")
costo = float(input("Ingrese el costo del producto: "))
cantidad = int(input("Ingrese la cantidad del producto: "))
estado = input("Ingrese el estado del producto: ")
porcentaje_ganancia = 0.3
precio = costo / (1 - porcentaje_ganancia)
porcen_de_ganan = 0.3

porcen_total = precio
print("ID:", id)
print("Nombre:", nombre)
print("Descripcion:", descripcion)
print("Costo:", costo)
print("Cantidad:", cantidad)
print("Estado:", estado)
print("Precio:", precio)
