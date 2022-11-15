class DuenoMascotas:
    def __init__(self):
        pass

#------------------ CREAR CUENTA (CREATE / INSERT) -----------------------

    def CrearCuenta(self,nombre,nombre_usuario,clave,pais,provincia,localidad,calle,numero,tel,mail):
        if self.conexion.is_connected():
            try:
                cursor = self.conexion.cursor()
                sentenciaSQL = 'INSERT INTO dueno_mascotas VALUES(%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)'
                data = (nombre,nombre_usuario,clave,pais,provincia,localidad,calle,numero,tel,mail)
                cursor.execute(sentenciaSQL,data)
                self.conexion.commit()
                self.conexion.close()
                print('CUENTA CREADA')
            except:
                print('ERROR DE CONEXIÓN')


#------------------ MODIFICAR CUENTA (UPDATE) ----------------------
    def ModificarCuenta(self,ID):
        if self.conexion.is_connected():
            try:
                cursor = self.conexion.cursor()
                sentenciaSQL = 'UPDATE dueno_mascotas SET nombre=%s,nombre_usuario=%s,clave=%s,pais=%s,provincia=%s,localidad=%s,calle=%s,numero=%s,tel=%s,mail=%s WHERE id_dueno = ID;'
                cursor.execute(sentenciaSQL)
                self.conexion.commit()
                self.conexion.close()
                print('SE HAN ACTUALIZADO LOS CAMBIOS')
                
            except:
                print('ERROR DE CONEXIÓN')

#------------------ ELIMINAR CUENTA (DELETE) -----------------------
    def EliminarCuenta(self,ID):
        if self.conexion.is_connected():
            try:
                cursor = self.conexion.cursor()
                sentenciaSQL = 'DELETE FROM dueno_mascotas WHERE id_dueno = ID'
                cursor.execute(sentenciaSQL)
                self.conexion.commit()
                self.conexion.close()
                print('CUENTA ELIMINADA')
                
            except:
                print('ERROR DE CONEXIÓN')

    def RegistrarMascota(self):
        pass

    def ModificarMascota(self):
        pass

#------------------ VER MASCOTAS (READ) ---------------------------
    def VerMascotas(self,ID):
        if self.conexion.is_connected():
            try:
                cursor = self.conexion.cursor()
                sentenciaSQL = 'SELECT nombre,nacimiento,especie_animal AS "especie",raza,peso,altura,patologia FROM registro_mascota WHERE id_dueno = ID;'
                cursor.execute(sentenciaSQL)
                registrosEncontrados = cursor.fetchall()
                self.conexion.close()
                return registrosEncontrados

            except:
                print('ERROR DE CONEXIÓN')


    def EliminarMascota(self):
        pass

    def Buscar(self):
        pass

    def SolicitarServicio(self):
        pass

    def CancelarServicio(self):
        pass

    def CompartirEnComunidad(self):
        pass



class Veterinarias:
    def _init_(self):
        pass

    def CrearCuenta(self):
        pass
    
    def ModificarCuenta(self):
        pass

    def EliminarCuenta(self):
        pass

    def TomarServicio(self):
        pass

    def CompartirEnComunidad(self):
        pass



class PeluqueriasCaninas:
    def _init_(self):
        pass

    def CrearCuenta(self):
        pass
    
    def ModificarCuenta(self):
        pass

    def EliminarCuenta(self):
        pass

    def TomarServicio(self):
        pass

    def CompartirEnComunidad(self):
        pass



class Paseadores:
    def _init_(self):
        pass

    def CrearCuenta(self):
        pass
    
    def ModificarCuenta(self):
        pass

    def EliminarCuenta(self):
        pass

    def TomarServicio(self):
        pass

    def CompartirEnComunidad(self):
        pass



class Comunidad:
    def __init__(self):
        pass



class Buscador:
    def __init__(self):
        pass