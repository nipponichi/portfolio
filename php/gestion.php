<!DOCTYPE html>
<html>
<head>
    <title>Gestión</title>
</head>
<body>
    Los campos del formulario son los siguientes:<br>
    Nombre: 
    <?php echo $_POST["nombre"];?><br>
    Apellidos: 
    <?php echo $_POST["email"];?><br>
    Teléfono:
    <?php echo $_POST["telefono"];?><br>
    Observaciones:
    <?php echo $_POST["descripcion"];?><br>
    Razon:
    <?php echo $_POST["reason"];?><br>
    
    <?php print_r($_POST);?>
        
</body>
</html>