let alumnograduacion_def_tests = Array(
    ['alumnograduacion','alumnograduacion_login','input',1,'El login debe tener la longitud mínima y caracteres válidos','ADD','alumnograduacion_login_min_size_KO','Longitud insuficiente'],
    ['alumnograduacion','alumnograduacion_login','input',2,'Login válido','ADD',true,'Valor correcto'],
    ['alumnograduacion','alumnograduacion_password','input',3,'La contraseña debe cumplir el tamaño mínimo','ADD','alumnograduacion_password_min_size_KO','Longitud insuficiente'],
    ['alumnograduacion','alumnograduacion_password','input',4,'Contraseña válida','ADD',true,'Valor correcto'],
    ['alumnograduacion','alumnograduacion_nombre','input',5,'El nombre solo admite letras y espacios','ADD','alumnograduacion_nombre_format_KO','Formato incorrecto'],
    ['alumnograduacion','alumnograduacion_nombre','input',6,'Nombre válido','ADD',true,'Valor correcto'],
    ['alumnograduacion','alumnograduacion_apellidos','input',7,'Los apellidos solo admiten letras y espacios','ADD','alumnograduacion_apellidos_format_KO','Formato incorrecto'],
    ['alumnograduacion','alumnograduacion_apellidos','input',8,'Apellidos válidos','ADD',true,'Valor correcto'],
    ['alumnograduacion','alumnograduacion_titulacion','select',9,'Debe seleccionarse una titulación válida del listado','ADD','alumnograduacion_titulacion_format_KO','Valor no permitido'],
    ['alumnograduacion','alumnograduacion_titulacion','select',10,'Titulación válida','ADD',true,'Valor correcto'],
    ['alumnograduacion','alumnograduacion_dni','input',11,'El DNI debe respetar el formato y la letra de control','ADD','alumnograduacion_dni_format_KO','Formato incorrecto'],
    ['alumnograduacion','alumnograduacion_dni','input',12,'DNI válido','ADD',true,'Valor correcto'],
    ['alumnograduacion','alumnograduacion_telefono','input',13,'El teléfono debe tener 9 dígitos','ADD','alumnograduacion_telefono_format_KO','Formato incorrecto'],
    ['alumnograduacion','alumnograduacion_telefono','input',14,'Teléfono válido','ADD',true,'Valor correcto'],
    ['alumnograduacion','alumnograduacion_direccion','input',15,'La dirección debe cumplir la longitud mínima','ADD','alumnograduacion_direccion_min_size_KO','Longitud insuficiente'],
    ['alumnograduacion','alumnograduacion_direccion','input',16,'Dirección válida','ADD',true,'Valor correcto'],
    ['alumnograduacion','alumnograduacion_email','input',17,'El email debe tener un formato válido','ADD','alumnograduacion_email_format_KO','Formato incorrecto'],
    ['alumnograduacion','alumnograduacion_email','input',18,'Email válido','ADD',true,'Valor correcto'],
    ['alumnograduacion','nuevo_alumnograduacion_fotoacto','inputfile',19,'La foto del acto es obligatoria en alta','ADD','nuevo_alumnograduacion_fotoacto_not_exist_file_KO','Fichero ausente'],
    ['alumnograduacion','nuevo_alumnograduacion_fotoacto','inputfile',20,'Foto del acto válida','ADD',true,'Fichero válido'],
    ['alumnograduacion','nuevo_alumnograduacion_fotoacto','inputfile',21,'En edición la foto es opcional','EDIT',true,'Fichero opcional']
);

let alumnograduacion_tests_fields = Array(
    ['alumnograduacion','alumnograduacion_login',1,1,'ADD',[{alumnograduacion_login:'ab'}],'alumnograduacion_login_min_size_KO'],
    ['alumnograduacion','alumnograduacion_login',2,2,'ADD',[{alumnograduacion_login:'alumno01'}],true],
    ['alumnograduacion','alumnograduacion_password',3,3,'ADD',[{alumnograduacion_password:'abc'}],'alumnograduacion_password_min_size_KO'],
    ['alumnograduacion','alumnograduacion_password',4,4,'ADD',[{alumnograduacion_password:'clave_segura1'}],true],
    ['alumnograduacion','alumnograduacion_nombre',5,5,'ADD',[{alumnograduacion_nombre:'Ana3'}],'alumnograduacion_nombre_format_KO'],
    ['alumnograduacion','alumnograduacion_nombre',6,6,'ADD',[{alumnograduacion_nombre:'Ana María'}],true],
    ['alumnograduacion','alumnograduacion_apellidos',7,7,'ADD',[{alumnograduacion_apellidos:'López1'}],'alumnograduacion_apellidos_format_KO'],
    ['alumnograduacion','alumnograduacion_apellidos',8,8,'ADD',[{alumnograduacion_apellidos:'López Pérez'}],true],
    ['alumnograduacion','alumnograduacion_titulacion',9,9,'ADD',[{alumnograduacion_titulacion:'XYZ'}],'alumnograduacion_titulacion_format_KO'],
    ['alumnograduacion','alumnograduacion_titulacion',10,10,'ADD',[{alumnograduacion_titulacion:'GREI'}],true],
    ['alumnograduacion','alumnograduacion_dni',11,11,'ADD',[{alumnograduacion_dni:'1234A'}],'alumnograduacion_dni_format_KO'],
    ['alumnograduacion','alumnograduacion_dni',12,12,'ADD',[{alumnograduacion_dni:'12345678Z'}],true],
    ['alumnograduacion','alumnograduacion_telefono',13,13,'ADD',[{alumnograduacion_telefono:'12345'}],'alumnograduacion_telefono_format_KO'],
    ['alumnograduacion','alumnograduacion_telefono',14,14,'ADD',[{alumnograduacion_telefono:'999888777'}],true],
    ['alumnograduacion','alumnograduacion_direccion',15,15,'ADD',[{alumnograduacion_direccion:'cal'}],'alumnograduacion_direccion_min_size_KO'],
    ['alumnograduacion','alumnograduacion_direccion',16,16,'ADD',[{alumnograduacion_direccion:'Calle Mayor 123'}],true],
    ['alumnograduacion','alumnograduacion_email',17,17,'ADD',[{alumnograduacion_email:'correo@incorrecto'}],'alumnograduacion_email_format_KO'],
    ['alumnograduacion','alumnograduacion_email',18,18,'ADD',[{alumnograduacion_email:'correo@dominio.com'}],true]
);

let alumnograduacion_tests_files = Array(
    ['alumnograduacion','nuevo_alumnograduacion_fotoacto',19,1,'ADD','Fichero obligatorio',[], 'nuevo_alumnograduacion_fotoacto_not_exist_file_KO'],
    ['alumnograduacion','nuevo_alumnograduacion_fotoacto',20,2,'ADD','Fichero válido',[{format_name_file:'fotoacto.jpg'},{type_file:'image/jpeg'},{max_size_file:4096}],true],
    ['alumnograduacion','nuevo_alumnograduacion_fotoacto',21,3,'EDIT','Fichero opcional',[],true]
);

let articulo_def_tests = Array(
    ['articulo','CodigoA','input',1,'El código solo admite números','ADD','CodigoA_format_KO','Formato incorrecto'],
    ['articulo','CodigoA','input',2,'Código correcto','ADD',true,'Valor correcto'],
    ['articulo','AutoresA','input',3,'Los autores deben usar letras y separadores','ADD','AutoresA_format_KO','Formato incorrecto'],
    ['articulo','AutoresA','input',4,'Autores válidos','ADD',true,'Valor correcto'],
    ['articulo','TituloA','input',5,'Título obligatorio con caracteres permitidos','ADD','TituloA_format_KO','Formato incorrecto'],
    ['articulo','TituloA','input',6,'Título válido','ADD',true,'Valor correcto'],
    ['articulo','ISSN','input',7,'El ISSN sigue el patrón 0000-000X','ADD','ISSN_format_KO','Formato incorrecto'],
    ['articulo','ISSN','input',8,'ISSN válido','ADD',true,'Valor correcto'],
    ['articulo','PagFinA','input',9,'La página final debe ser mayor o igual que la inicial','ADD','PagFinA_range_KO','Rango incorrecto'],
    ['articulo','PagFinA','input',10,'Rango correcto','ADD',true,'Valor correcto'],
    ['articulo','FechaPublicacionR','input',11,'La fecha debe existir','ADD','FechaPublicacionR_value_KO','Fecha incorrecta'],
    ['articulo','FechaPublicacionR','input',12,'Fecha válida','ADD',true,'Valor correcto'],
    ['articulo','EstadoA','select',13,'El estado debe ser uno de los permitidos','ADD','EstadoA_value_KO','Estado incorrecto'],
    ['articulo','EstadoA','select',14,'Estado válido','ADD',true,'Valor correcto'],
    ['articulo','nuevo_FicheropdfA','inputfile',15,'El PDF es obligatorio','ADD','nuevo_FicheropdfA_not_exist_file_KO','Fichero ausente'],
    ['articulo','nuevo_FicheropdfA','inputfile',16,'PDF correcto','ADD',true,'Fichero válido'],
    ['articulo','nuevo_FicheropdfA','inputfile',17,'En edición el fichero es opcional','EDIT',true,'Fichero opcional']
);

let articulo_tests_fields = Array(
    ['articulo','CodigoA',1,1,'ADD',[{CodigoA:'ABC'}],'CodigoA_format_KO'],
    ['articulo','CodigoA',2,2,'ADD',[{CodigoA:'123'}],true],
    ['articulo','AutoresA',3,3,'ADD',[{AutoresA:'Autor1;Autor2'}],'AutoresA_format_KO'],
    ['articulo','AutoresA',4,4,'ADD',[{AutoresA:'Autor Uno, Autor Dos'}],true],
    ['articulo','TituloA',5,5,'ADD',[{TituloA:'Título @'}],'TituloA_format_KO'],
    ['articulo','TituloA',6,6,'ADD',[{TituloA:'Título válido'}],true],
    ['articulo','ISSN',7,7,'ADD',[{ISSN:'12345678'}],'ISSN_format_KO'],
    ['articulo','ISSN',8,8,'ADD',[{ISSN:'1234-567X'}],true],
    ['articulo','PagFinA',9,9,'ADD',[{PagIniA:'10'},{PagFinA:'5'}],'PagFinA_range_KO'],
    ['articulo','PagFinA',10,10,'ADD',[{PagIniA:'5'},{PagFinA:'10'}],true],
    ['articulo','FechaPublicacionR',11,11,'ADD',[{FechaPublicacionR:'31/02/2024'}],'FechaPublicacionR_value_KO'],
    ['articulo','FechaPublicacionR',12,12,'ADD',[{FechaPublicacionR:'20/05/2024'}],true],
    ['articulo','EstadoA',13,13,'ADD',[{EstadoA:'Borrador'}],'EstadoA_value_KO'],
    ['articulo','EstadoA',14,14,'ADD',[{EstadoA:'Revision'}],true]
);

let articulo_tests_files = Array(
    ['articulo','nuevo_FicheropdfA',15,1,'ADD','PDF obligatorio',[], 'nuevo_FicheropdfA_not_exist_file_KO'],
    ['articulo','nuevo_FicheropdfA',16,2,'ADD','PDF válido',[{format_name_file:'articulo.pdf'},{type_file:'application/pdf'},{max_size_file:10240}],true],
    ['articulo','nuevo_FicheropdfA',17,3,'EDIT','PDF opcional',[],true]
);

let ubicacion_def_tests = Array(
    ['ubicacion','id_site','input',1,'El identificador debe ser numérico','ADD','id_site_format_KO','Formato incorrecto'],
    ['ubicacion','id_site','input',2,'Identificador válido','ADD',true,'Valor correcto'],
    ['ubicacion','site_latitud','input',3,'La latitud sigue el formato decimal','ADD','site_latitud_format_KO','Formato incorrecto'],
    ['ubicacion','site_latitud','input',4,'Latitud válida','ADD',true,'Valor correcto'],
    ['ubicacion','site_longitud','input',5,'La longitud sigue el formato decimal','ADD','site_longitud_format_KO','Formato incorrecto'],
    ['ubicacion','site_longitud','input',6,'Longitud válida','ADD',true,'Valor correcto'],
    ['ubicacion','site_altitude','input',7,'Altitud dentro del rango permitido','ADD','site_altitude_range_KO','Rango incorrecto'],
    ['ubicacion','site_altitude','input',8,'Altitud válida','ADD',true,'Valor correcto'],
    ['ubicacion','site_locality','input',9,'Localidad solo con letras','ADD','site_locality_format_KO','Formato incorrecto'],
    ['ubicacion','site_locality','input',10,'Localidad válida','ADD',true,'Valor correcto'],
    ['ubicacion','site_provider_login','input',11,'Login con caracteres permitidos','ADD','site_provider_login_format_KO','Formato incorrecto'],
    ['ubicacion','site_provider_login','input',12,'Login válido','ADD',true,'Valor correcto'],
    ['ubicacion','nuevo_site_north_photo','inputfile',13,'Foto norte obligatoria','ADD','nuevo_site_north_photo_not_exist_file_KO','Fichero ausente'],
    ['ubicacion','nuevo_site_south_photo','inputfile',14,'Foto sur obligatoria','ADD','nuevo_site_south_photo_not_exist_file_KO','Fichero ausente'],
    ['ubicacion','nuevo_site_east_photo','inputfile',15,'Foto este obligatoria','ADD','nuevo_site_east_photo_not_exist_file_KO','Fichero ausente'],
    ['ubicacion','nuevo_site_west_photo','inputfile',16,'Foto oeste obligatoria','ADD','nuevo_site_west_photo_not_exist_file_KO','Fichero ausente'],
    ['ubicacion','nuevo_site_north_photo','inputfile',17,'Foto norte opcional en edición','EDIT',true,'Fichero opcional']
);

let ubicacion_tests_fields = Array(
    ['ubicacion','id_site',1,1,'ADD',[{id_site:'ABC'}],'id_site_format_KO'],
    ['ubicacion','id_site',2,2,'ADD',[{id_site:'10'}],true],
    ['ubicacion','site_latitud',3,3,'ADD',[{site_latitud:'95.000000'}],'site_latitud_range_KO'],
    ['ubicacion','site_latitud',4,4,'ADD',[{site_latitud:'42.123456'}],true],
    ['ubicacion','site_longitud',5,5,'ADD',[{site_longitud:'200.000000'}],'site_longitud_range_KO'],
    ['ubicacion','site_longitud',6,6,'ADD',[{site_longitud:'-8.542300'}],true],
    ['ubicacion','site_altitude',7,7,'ADD',[{site_altitude:'-600'}],'site_altitude_range_KO'],
    ['ubicacion','site_altitude',8,8,'ADD',[{site_altitude:'350'}],true],
    ['ubicacion','site_locality',9,9,'ADD',[{site_locality:'V1go'}],'site_locality_format_KO'],
    ['ubicacion','site_locality',10,10,'ADD',[{site_locality:'Vigo'}],true],
    ['ubicacion','site_provider_login',11,11,'ADD',[{site_provider_login:'login@'}],'site_provider_login_format_KO'],
    ['ubicacion','site_provider_login',12,12,'ADD',[{site_provider_login:'proveedor_01'}],true]
);

let ubicacion_tests_files = Array(
    ['ubicacion','nuevo_site_north_photo',13,1,'ADD','Foto norte obligatoria',[], 'nuevo_site_north_photo_not_exist_file_KO'],
    ['ubicacion','nuevo_site_north_photo',17,2,'EDIT','Foto norte opcional',[],true],
    ['ubicacion','nuevo_site_south_photo',14,3,'ADD','Foto sur obligatoria',[], 'nuevo_site_south_photo_not_exist_file_KO'],
    ['ubicacion','nuevo_site_east_photo',15,4,'ADD','Foto este obligatoria',[], 'nuevo_site_east_photo_not_exist_file_KO'],
    ['ubicacion','nuevo_site_west_photo',16,5,'ADD','Foto oeste obligatoria',[], 'nuevo_site_west_photo_not_exist_file_KO'],
    ['ubicacion','nuevo_site_north_photo',13,6,'ADD','Foto norte correcta',[{format_name_file:'foto.jpg'},{type_file:'image/jpeg'},{max_size_file:2048}],true]
);
