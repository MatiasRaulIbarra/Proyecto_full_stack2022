import mysql.connector

try:
    conexion = mysql.connector.connect(
    host = 'localhost',
    port = 3306,
    user = 'root',
    password = 't4a529fcmk',
    db = 'Mascotas'
    )

    if conexion.is_connected():
        print('CONECTADO EXITOSAMENTE')
        conexion.close()
        print('CERRADO EXITOSAMENTE')
        
except mysql.connector.Error as e:
    print('NO SE PUDO CONECTAR', e)

