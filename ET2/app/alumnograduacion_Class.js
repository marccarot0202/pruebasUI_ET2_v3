class alumnograduacion extends EntidadAbstracta {

    constructor(esTest) {
        super(esTest);

        this.columnasamostrar = [
            'alumnograduacion_login',
            'alumnograduacion_nombre',
            'alumnograduacion_apellidos',
            'alumnograduacion_titulacion',
            'alumnograduacion_dni',
            'alumnograduacion_email'
        ];
        this.mostrarespecial = ['alumnograduacion_fotoacto'];

        this.titulacionesPermitidas = ['GREI', 'MEI', 'MIA'];

        this.attributes = [
            'alumnograduacion_login',
            'alumnograduacion_password',
            'alumnograduacion_nombre',
            'alumnograduacion_apellidos',
            'alumnograduacion_titulacion',
            'alumnograduacion_dni',
            'alumnograduacion_telefono',
            'alumnograduacion_direccion',
            'alumnograduacion_email',
            'alumnograduacion_fotoacto',
            'nuevo_alumnograduacion_fotoacto'
        ];
    }

    manual_form_creation() {
        const opcionesTitulacion = this.titulacionesPermitidas
            .map(codigo => `<option value='${codigo}'>${codigo}</option>`)
            .join('');

        return `
            <form id='form_iu' action="" method="POST" enctype="multipart/form-data" onsubmit="" class='formulario'>
                <label class='label_alumnograduacion_login'>alumnograduacion_login</label>
                <input type='text' id='alumnograduacion_login' name='alumnograduacion_login'/>
                <span id='span_error_alumnograduacion_login'><a id='error_alumnograduacion_login'></a></span>
                <br>
                <label class='label_alumnograduacion_password'>alumnograduacion_password</label>
                <input type='text' id='alumnograduacion_password' name='alumnograduacion_password'/>
                <span id='span_error_alumnograduacion_password'><a id='error_alumnograduacion_password'></a></span>
                <br>
                <label class='label_alumnograduacion_nombre'>alumnograduacion_nombre</label>
                <input type='text' id='alumnograduacion_nombre' name='alumnograduacion_nombre'/>
                <span id='span_error_alumnograduacion_nombre'><a id='error_alumnograduacion_nombre'></a></span>
                <br>
                <label class='label_alumnograduacion_apellidos'>alumnograduacion_apellidos</label>
                <input type='text' id='alumnograduacion_apellidos' name='alumnograduacion_apellidos'/>
                <span id='span_error_alumnograduacion_apellidos'><a id='error_alumnograduacion_apellidos'></a></span>
                <br>
                <label class='label_alumnograduacion_titulacion'>alumnograduacion_titulacion</label>
                <select id='alumnograduacion_titulacion' name='alumnograduacion_titulacion'>
                    <option value=''></option>
                    ${opcionesTitulacion}
                </select>
                <span id='span_error_alumnograduacion_titulacion'><a id='error_alumnograduacion_titulacion'></a></span>
                <br>
                <label class='label_alumnograduacion_dni'>alumnograduacion_dni</label>
                <input type='text' id='alumnograduacion_dni' name='alumnograduacion_dni'/>
                <span id='span_error_alumnograduacion_dni'><a id='error_alumnograduacion_dni'></a></span>
                <br>
                <label class='label_alumnograduacion_telefono'>alumnograduacion_telefono</label>
                <input type='text' id='alumnograduacion_telefono' name='alumnograduacion_telefono'/>
                <span id='span_error_alumnograduacion_telefono'><a id='error_alumnograduacion_telefono'></a></span>
                <br>
                <label class='label_alumnograduacion_direccion'>alumnograduacion_direccion</label>
                <input type='text' id='alumnograduacion_direccion' name='alumnograduacion_direccion'/>
                <span id='span_error_alumnograduacion_direccion'><a id='error_alumnograduacion_direccion'></a></span>
                <br>
                <label class='label_alumnograduacion_email'>alumnograduacion_email</label>
                <input type='text' id='alumnograduacion_email' name='alumnograduacion_email'/>
                <span id='span_error_alumnograduacion_email'><a id='error_alumnograduacion_email'></a></span>
                <br>
                <label id='label_alumnograduacion_fotoacto' class='label_alumnograduacion_fotoacto'>alumnograduacion_fotoacto</label>
                <input type='text' id='alumnograduacion_fotoacto' name='alumnograduacion_fotoacto'/>
                <span id='span_error_alumnograduacion_fotoacto'><a id='error_alumnograduacion_fotoacto'></a></span>
                <a id='link_alumnograduacion_fotoacto' href='' target='_blank'><img src='./iconos/FILE.png' /></a>
                <br>
                <label id='label_nuevo_alumnograduacion_fotoacto' class='label_nuevo_alumnograduacion_fotoacto'>nuevo_alumnograduacion_fotoacto</label>
                <input type='file' id='nuevo_alumnograduacion_fotoacto' name='nuevo_alumnograduacion_fotoacto'/>
                <span id='span_error_nuevo_alumnograduacion_fotoacto'><a id='error_nuevo_alumnograduacion_fotoacto'></a></span>
            </form>
        `;
    }

    mostrarcambioatributo(atributo, valorentrada) {
        if (atributo === 'alumnograduacion_fotoacto') {
            if (!valorentrada) {
                return '';
            }
            return `${valorentrada}  <a class='link_alumnograduacion_fotoacto' href='http://193.147.87.202/ET2/filesuploaded/files_alumnograduacion_fotoacto/${valorentrada}' target='_blank'><img src='./iconos/FILE.png' /></a>`;
        }
        return valorentrada;
    }

    createForm_ADD() {
        document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
        this.dom.show_element('Div_IU_form', 'block');
        this.dom.remove_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form');
        this.dom.assign_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form_alumnograduacion_ADD');

        this.dom.assign_property_value('form_iu', 'onsubmit', 'return entidad.ADD_submit_' + this.nombreentidad + '()');
        this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.ADD();');

        this.dom.hide_element_form('alumnograduacion_fotoacto');
        this.dom.hide_element('link_alumnograduacion_fotoacto');
        document.getElementById('label_nuevo_alumnograduacion_fotoacto').style.display = 'block';
        document.getElementById('nuevo_alumnograduacion_fotoacto').style.display = 'block';

        this.dom.colocarvalidaciones('form_iu', 'ADD');
        this.dom.colocarboton('ADD');
        setLang();
    }

    createForm_EDIT(fila) {
        document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
        this.dom.show_element('Div_IU_form', 'block');
        this.dom.remove_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form');
        this.dom.assign_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form_alumnograduacion_EDIT');

        this.dom.assign_property_value('form_iu', 'onsubmit', 'return entidad.EDIT_submit_' + this.nombreentidad + '()');
        this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.EDIT();');

        if (fila.alumnograduacion_fotoacto) {
            this.dom.assign_property_value(
                'link_alumnograduacion_fotoacto',
                'href',
                'http://193.147.87.202/ET2/filesuploaded/files_alumnograduacion_fotoacto/' + fila.alumnograduacion_fotoacto
            );
        }

        this.dom.rellenarvaloresform(fila);

        this.dom.colocarvalidaciones('form_iu', 'EDIT');

        this.dom.assign_property_value('alumnograduacion_login', 'readonly', 'true');
        this.dom.assign_property_value('alumnograduacion_fotoacto', 'readonly', 'true');
        document.getElementById('label_nuevo_alumnograduacion_fotoacto').style.display = 'block';
        document.getElementById('nuevo_alumnograduacion_fotoacto').style.display = 'block';

        this.dom.colocarboton('EDIT');
        setLang();
    }

    createForm_DELETE(fila) {
        document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
        this.dom.show_element('Div_IU_form', 'block');
        this.dom.remove_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form');
        this.dom.assign_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form_alumnograduacion_DELETE');

        this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.DELETE();');

        if (fila.alumnograduacion_fotoacto) {
            this.dom.assign_property_value(
                'link_alumnograduacion_fotoacto',
                'href',
                'http://193.147.87.202/ET2/filesuploaded/files_alumnograduacion_fotoacto/' + fila.alumnograduacion_fotoacto
            );
        }

        this.dom.rellenarvaloresform(fila);

        this.dom.colocartodosreadonly('form_iu');
        this.dom.hide_element_form('nuevo_alumnograduacion_fotoacto');
        this.dom.hide_element('label_nuevo_alumnograduacion_fotoacto');

        this.dom.colocarboton('DELETE');
        setLang();
    }

    createForm_SHOWCURRENT(fila) {
        document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
        this.dom.show_element('Div_IU_form', 'block');
        this.dom.remove_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form');
        this.dom.assign_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form_alumnograduacion_SHOWCURRENT');

        if (fila.alumnograduacion_fotoacto) {
            this.dom.assign_property_value(
                'link_alumnograduacion_fotoacto',
                'href',
                'http://193.147.87.202/ET2/filesuploaded/files_alumnograduacion_fotoacto/' + fila.alumnograduacion_fotoacto
            );
        }

        this.dom.rellenarvaloresform(fila);

        this.dom.colocartodosreadonly('form_iu');
        this.dom.hide_element_form('nuevo_alumnograduacion_fotoacto');
        this.dom.hide_element('label_nuevo_alumnograduacion_fotoacto');
        setLang();
    }

    createForm_SEARCH() {
        document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
        this.dom.show_element('Div_IU_form', 'block');
        this.dom.remove_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form');
        this.dom.assign_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form_alumnograduacion_SEARCH');

        this.dom.assign_property_value('form_iu', 'onsubmit', 'return entidad.SEARCH_submit_' + this.nombreentidad + '()');
        this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.SEARCH();');

        this.dom.hide_element_form('nuevo_alumnograduacion_fotoacto');
        this.dom.hide_element('label_nuevo_alumnograduacion_fotoacto');
        this.dom.hide_element('link_alumnograduacion_fotoacto');

        this.dom.colocarvalidaciones('form_iu', 'SEARCH');
        this.dom.colocarboton('SEARCH');
        setLang();
    }

    ADD_alumnograduacion_login_validation() {
        if (!this.validations.min_size('alumnograduacion_login', 3)) {
            this.dom.mostrar_error_campo('alumnograduacion_login', 'alumnograduacion_login_min_size_KO');
            return 'alumnograduacion_login_min_size_KO';
        }
        if (!this.validations.max_size('alumnograduacion_login', 20)) {
            this.dom.mostrar_error_campo('alumnograduacion_login', 'alumnograduacion_login_max_size_KO');
            return 'alumnograduacion_login_max_size_KO';
        }
        if (!this.validations.format('alumnograduacion_login', '^[A-Za-z0-9_]+$')) {
            this.dom.mostrar_error_campo('alumnograduacion_login', 'alumnograduacion_login_format_KO');
            return 'alumnograduacion_login_format_KO';
        }
        this.dom.mostrar_exito_campo('alumnograduacion_login');
        return true;
    }

    ADD_alumnograduacion_password_validation() {
        if (!this.validations.min_size('alumnograduacion_password', 8)) {
            this.dom.mostrar_error_campo('alumnograduacion_password', 'alumnograduacion_password_min_size_KO');
            return 'alumnograduacion_password_min_size_KO';
        }
        if (!this.validations.max_size('alumnograduacion_password', 30)) {
            this.dom.mostrar_error_campo('alumnograduacion_password', 'alumnograduacion_password_max_size_KO');
            return 'alumnograduacion_password_max_size_KO';
        }
        if (!this.validations.format('alumnograduacion_password', '^[A-Za-z0-9_.-]+$')) {
            this.dom.mostrar_error_campo('alumnograduacion_password', 'alumnograduacion_password_format_KO');
            return 'alumnograduacion_password_format_KO';
        }
        this.dom.mostrar_exito_campo('alumnograduacion_password');
        return true;
    }

    ADD_alumnograduacion_nombre_validation() {
        if (!this.validations.min_size('alumnograduacion_nombre', 3)) {
            this.dom.mostrar_error_campo('alumnograduacion_nombre', 'alumnograduacion_nombre_min_size_KO');
            return 'alumnograduacion_nombre_min_size_KO';
        }
        if (!this.validations.max_size('alumnograduacion_nombre', 40)) {
            this.dom.mostrar_error_campo('alumnograduacion_nombre', 'alumnograduacion_nombre_max_size_KO');
            return 'alumnograduacion_nombre_max_size_KO';
        }
        if (!this.validations.format('alumnograduacion_nombre', "^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ ]+$")) {
            this.dom.mostrar_error_campo('alumnograduacion_nombre', 'alumnograduacion_nombre_format_KO');
            return 'alumnograduacion_nombre_format_KO';
        }
        this.dom.mostrar_exito_campo('alumnograduacion_nombre');
        return true;
    }

    ADD_alumnograduacion_apellidos_validation() {
        if (!this.validations.min_size('alumnograduacion_apellidos', 3)) {
            this.dom.mostrar_error_campo('alumnograduacion_apellidos', 'alumnograduacion_apellidos_min_size_KO');
            return 'alumnograduacion_apellidos_min_size_KO';
        }
        if (!this.validations.max_size('alumnograduacion_apellidos', 60)) {
            this.dom.mostrar_error_campo('alumnograduacion_apellidos', 'alumnograduacion_apellidos_max_size_KO');
            return 'alumnograduacion_apellidos_max_size_KO';
        }
        if (!this.validations.format('alumnograduacion_apellidos', "^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ ]+$")) {
            this.dom.mostrar_error_campo('alumnograduacion_apellidos', 'alumnograduacion_apellidos_format_KO');
            return 'alumnograduacion_apellidos_format_KO';
        }
        this.dom.mostrar_exito_campo('alumnograduacion_apellidos');
        return true;
    }

    ADD_alumnograduacion_titulacion_validation() {
        const valor = document.getElementById('alumnograduacion_titulacion').value;
        if (!this.titulacionesPermitidas.includes(valor)) {
            this.dom.mostrar_error_campo('alumnograduacion_titulacion', 'alumnograduacion_titulacion_format_KO');
            return 'alumnograduacion_titulacion_format_KO';
        }
        this.dom.mostrar_exito_campo('alumnograduacion_titulacion');
        return true;
    }

    ADD_alumnograduacion_dni_validation() {
        if (!this.validations.format('alumnograduacion_dni', '^[0-9]{8}[A-Z]$')) {
            this.dom.mostrar_error_campo('alumnograduacion_dni', 'alumnograduacion_dni_format_KO');
            return 'alumnograduacion_dni_format_KO';
        }
        if (!this.personalize_validate_dni(document.getElementById('alumnograduacion_dni').value)) {
            this.dom.mostrar_error_campo('alumnograduacion_dni', 'alumnograduacion_dni_letter_KO');
            return 'alumnograduacion_dni_letter_KO';
        }
        this.dom.mostrar_exito_campo('alumnograduacion_dni');
        return true;
    }

    ADD_alumnograduacion_telefono_validation() {
        if (!this.validations.format('alumnograduacion_telefono', '^[0-9]{9}$')) {
            this.dom.mostrar_error_campo('alumnograduacion_telefono', 'alumnograduacion_telefono_format_KO');
            return 'alumnograduacion_telefono_format_KO';
        }
        this.dom.mostrar_exito_campo('alumnograduacion_telefono');
        return true;
    }

    ADD_alumnograduacion_direccion_validation() {
        if (!this.validations.min_size('alumnograduacion_direccion', 5)) {
            this.dom.mostrar_error_campo('alumnograduacion_direccion', 'alumnograduacion_direccion_min_size_KO');
            return 'alumnograduacion_direccion_min_size_KO';
        }
        if (!this.validations.max_size('alumnograduacion_direccion', 120)) {
            this.dom.mostrar_error_campo('alumnograduacion_direccion', 'alumnograduacion_direccion_max_size_KO');
            return 'alumnograduacion_direccion_max_size_KO';
        }
        if (!this.validations.format('alumnograduacion_direccion', "^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ0-9 ,.\'-]+$")) {
            this.dom.mostrar_error_campo('alumnograduacion_direccion', 'alumnograduacion_direccion_format_KO');
            return 'alumnograduacion_direccion_format_KO';
        }
        this.dom.mostrar_exito_campo('alumnograduacion_direccion');
        return true;
    }

    ADD_alumnograduacion_email_validation() {
        if (!this.validations.format('alumnograduacion_email', '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\\.[A-Za-z]{2,}$')) {
            this.dom.mostrar_error_campo('alumnograduacion_email', 'alumnograduacion_email_format_KO');
            return 'alumnograduacion_email_format_KO';
        }
        this.dom.mostrar_exito_campo('alumnograduacion_email');
        return true;
    }

    ADD_alumnograduacion_fotoacto_validation() {
        this.dom.mostrar_exito_campo('alumnograduacion_fotoacto');
        return true;
    }

    ADD_nuevo_alumnograduacion_fotoacto_validation() {
        if (!this.validations.not_exist_file('nuevo_alumnograduacion_fotoacto')) {
            this.dom.mostrar_error_campo('nuevo_alumnograduacion_fotoacto', 'nuevo_alumnograduacion_fotoacto_not_exist_file_KO');
            return 'nuevo_alumnograduacion_fotoacto_not_exist_file_KO';
        }
        if (!this.validations.type_file('nuevo_alumnograduacion_fotoacto', ['image/jpeg', 'image/png', 'image/gif'])) {
            this.dom.mostrar_error_campo('nuevo_alumnograduacion_fotoacto', 'nuevo_alumnograduacion_fotoacto_type_file_KO');
            return 'nuevo_alumnograduacion_fotoacto_type_file_KO';
        }
        if (!this.validations.max_size_file('nuevo_alumnograduacion_fotoacto', 5 * 1024 * 1024)) {
            this.dom.mostrar_error_campo('nuevo_alumnograduacion_fotoacto', 'nuevo_alumnograduacion_fotoacto_max_size_file_KO');
            return 'nuevo_alumnograduacion_fotoacto_max_size_file_KO';
        }
        if (!this.validations.format_name_file('nuevo_alumnograduacion_fotoacto', '^[A-Za-z0-9_.-]+$')) {
            this.dom.mostrar_error_campo('nuevo_alumnograduacion_fotoacto', 'nuevo_alumnograduacion_fotoacto_format_name_file_KO');
            return 'nuevo_alumnograduacion_fotoacto_format_name_file_KO';
        }
        this.dom.mostrar_exito_campo('nuevo_alumnograduacion_fotoacto');
        return true;
    }

    EDIT_alumnograduacion_login_validation() {
        this.dom.mostrar_exito_campo('alumnograduacion_login');
        return true;
    }

    EDIT_alumnograduacion_password_validation() {
        return this.ADD_alumnograduacion_password_validation();
    }

    EDIT_alumnograduacion_nombre_validation() {
        return this.ADD_alumnograduacion_nombre_validation();
    }

    EDIT_alumnograduacion_apellidos_validation() {
        return this.ADD_alumnograduacion_apellidos_validation();
    }

    EDIT_alumnograduacion_titulacion_validation() {
        return this.ADD_alumnograduacion_titulacion_validation();
    }

    EDIT_alumnograduacion_dni_validation() {
        return this.ADD_alumnograduacion_dni_validation();
    }

    EDIT_alumnograduacion_telefono_validation() {
        return this.ADD_alumnograduacion_telefono_validation();
    }

    EDIT_alumnograduacion_direccion_validation() {
        return this.ADD_alumnograduacion_direccion_validation();
    }

    EDIT_alumnograduacion_email_validation() {
        return this.ADD_alumnograduacion_email_validation();
    }

    EDIT_alumnograduacion_fotoacto_validation() {
        this.dom.mostrar_exito_campo('alumnograduacion_fotoacto');
        return true;
    }

    EDIT_nuevo_alumnograduacion_fotoacto_validation() {
        if (!this.validations.not_exist_file('nuevo_alumnograduacion_fotoacto')) {
            this.dom.mostrar_exito_campo('nuevo_alumnograduacion_fotoacto');
            return true;
        }
        if (!this.validations.type_file('nuevo_alumnograduacion_fotoacto', ['image/jpeg', 'image/png', 'image/gif'])) {
            this.dom.mostrar_error_campo('nuevo_alumnograduacion_fotoacto', 'nuevo_alumnograduacion_fotoacto_type_file_KO');
            return 'nuevo_alumnograduacion_fotoacto_type_file_KO';
        }
        if (!this.validations.max_size_file('nuevo_alumnograduacion_fotoacto', 5 * 1024 * 1024)) {
            this.dom.mostrar_error_campo('nuevo_alumnograduacion_fotoacto', 'nuevo_alumnograduacion_fotoacto_max_size_file_KO');
            return 'nuevo_alumnograduacion_fotoacto_max_size_file_KO';
        }
        if (!this.validations.format_name_file('nuevo_alumnograduacion_fotoacto', '^[A-Za-z0-9_.-]+$')) {
            this.dom.mostrar_error_campo('nuevo_alumnograduacion_fotoacto', 'nuevo_alumnograduacion_fotoacto_format_name_file_KO');
            return 'nuevo_alumnograduacion_fotoacto_format_name_file_KO';
        }
        this.dom.mostrar_exito_campo('nuevo_alumnograduacion_fotoacto');
        return true;
    }

    SEARCH_alumnograduacion_login_validation() {
        const valor = document.getElementById('alumnograduacion_login').value;
        if (valor === '') {
            this.dom.mostrar_exito_campo('alumnograduacion_login');
            return true;
        }
        if (!this.validations.format('alumnograduacion_login', '^[A-Za-z0-9_]{0,20}$')) {
            this.dom.mostrar_error_campo('alumnograduacion_login', 'alumnograduacion_login_format_KO');
            return 'alumnograduacion_login_format_KO';
        }
        this.dom.mostrar_exito_campo('alumnograduacion_login');
        return true;
    }

    SEARCH_alumnograduacion_password_validation() {
        const valor = document.getElementById('alumnograduacion_password').value;
        if (valor === '') {
            this.dom.mostrar_exito_campo('alumnograduacion_password');
            return true;
        }
        if (!this.validations.format('alumnograduacion_password', '^[A-Za-z0-9_.-]{0,30}$')) {
            this.dom.mostrar_error_campo('alumnograduacion_password', 'alumnograduacion_password_format_KO');
            return 'alumnograduacion_password_format_KO';
        }
        this.dom.mostrar_exito_campo('alumnograduacion_password');
        return true;
    }

    SEARCH_alumnograduacion_nombre_validation() {
        const valor = document.getElementById('alumnograduacion_nombre').value;
        if (valor === '') {
            this.dom.mostrar_exito_campo('alumnograduacion_nombre');
            return true;
        }
        if (!this.validations.format('alumnograduacion_nombre', "^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ ]*$")) {
            this.dom.mostrar_error_campo('alumnograduacion_nombre', 'alumnograduacion_nombre_format_KO');
            return 'alumnograduacion_nombre_format_KO';
        }
        this.dom.mostrar_exito_campo('alumnograduacion_nombre');
        return true;
    }

    SEARCH_alumnograduacion_apellidos_validation() {
        const valor = document.getElementById('alumnograduacion_apellidos').value;
        if (valor === '') {
            this.dom.mostrar_exito_campo('alumnograduacion_apellidos');
            return true;
        }
        if (!this.validations.format('alumnograduacion_apellidos', "^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ ]*$")) {
            this.dom.mostrar_error_campo('alumnograduacion_apellidos', 'alumnograduacion_apellidos_format_KO');
            return 'alumnograduacion_apellidos_format_KO';
        }
        this.dom.mostrar_exito_campo('alumnograduacion_apellidos');
        return true;
    }

    SEARCH_alumnograduacion_titulacion_validation() {
        const valor = document.getElementById('alumnograduacion_titulacion').value;
        if (valor === '' || this.titulacionesPermitidas.includes(valor)) {
            this.dom.mostrar_exito_campo('alumnograduacion_titulacion');
            return true;
        }
            this.dom.mostrar_error_campo('alumnograduacion_titulacion', 'alumnograduacion_titulacion_format_KO');
            return 'alumnograduacion_titulacion_format_KO';
    }

    SEARCH_alumnograduacion_dni_validation() {
        const valor = document.getElementById('alumnograduacion_dni').value;
        if (valor === '') {
            this.dom.mostrar_exito_campo('alumnograduacion_dni');
            return true;
        }
        if (!this.validations.format('alumnograduacion_dni', '^[0-9]{0,8}[A-Z]?$')) {
            this.dom.mostrar_error_campo('alumnograduacion_dni', 'alumnograduacion_dni_format_KO');
            return 'alumnograduacion_dni_format_KO';
        }
        this.dom.mostrar_exito_campo('alumnograduacion_dni');
        return true;
    }

    SEARCH_alumnograduacion_telefono_validation() {
        const valor = document.getElementById('alumnograduacion_telefono').value;
        if (valor === '') {
            this.dom.mostrar_exito_campo('alumnograduacion_telefono');
            return true;
        }
        if (!this.validations.format('alumnograduacion_telefono', '^[0-9]{0,9}$')) {
            this.dom.mostrar_error_campo('alumnograduacion_telefono', 'alumnograduacion_telefono_format_KO');
            return 'alumnograduacion_telefono_format_KO';
        }
        this.dom.mostrar_exito_campo('alumnograduacion_telefono');
        return true;
    }

    SEARCH_alumnograduacion_direccion_validation() {
        const valor = document.getElementById('alumnograduacion_direccion').value;
        if (valor === '') {
            this.dom.mostrar_exito_campo('alumnograduacion_direccion');
            return true;
        }
        if (!this.validations.format('alumnograduacion_direccion', "^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ0-9 ,.\'-]*$")) {
            this.dom.mostrar_error_campo('alumnograduacion_direccion', 'alumnograduacion_direccion_format_KO');
            return 'alumnograduacion_direccion_format_KO';
        }
        this.dom.mostrar_exito_campo('alumnograduacion_direccion');
        return true;
    }

    SEARCH_alumnograduacion_email_validation() {
        const valor = document.getElementById('alumnograduacion_email').value;
        if (valor === '') {
            this.dom.mostrar_exito_campo('alumnograduacion_email');
            return true;
        }
        if (!this.validations.format('alumnograduacion_email', '^[A-Za-z0-9._%+-@]*$')) {
            this.dom.mostrar_error_campo('alumnograduacion_email', 'alumnograduacion_email_format_KO');
            return 'alumnograduacion_email_format_KO';
        }
        this.dom.mostrar_exito_campo('alumnograduacion_email');
        return true;
    }

    SEARCH_alumnograduacion_fotoacto_validation() {
        const valor = document.getElementById('alumnograduacion_fotoacto').value;
        if (valor === '') {
            this.dom.mostrar_exito_campo('alumnograduacion_fotoacto');
            return true;
        }
        if (!this.validations.format('alumnograduacion_fotoacto', '^[A-Za-z0-9_.-]*$')) {
            this.dom.mostrar_error_campo('alumnograduacion_fotoacto', 'alumnograduacion_fotoacto_format_name_file_KO');
            return 'alumnograduacion_fotoacto_format_name_file_KO';
        }
        this.dom.mostrar_exito_campo('alumnograduacion_fotoacto');
        return true;
    }

    SEARCH_nuevo_alumnograduacion_fotoacto_validation() {
        return true;
    }

    ADD_submit_alumnograduacion() {
        let result = (
            this.ADD_alumnograduacion_login_validation() &
            this.ADD_alumnograduacion_password_validation() &
            this.ADD_alumnograduacion_nombre_validation() &
            this.ADD_alumnograduacion_apellidos_validation() &
            this.ADD_alumnograduacion_titulacion_validation() &
            this.ADD_alumnograduacion_dni_validation() &
            this.ADD_alumnograduacion_telefono_validation() &
            this.ADD_alumnograduacion_direccion_validation() &
            this.ADD_alumnograduacion_email_validation() &
            this.ADD_nuevo_alumnograduacion_fotoacto_validation()
        );
        return Boolean(result);
    }

    EDIT_submit_alumnograduacion() {
        let result = (
            this.EDIT_alumnograduacion_password_validation() &
            this.EDIT_alumnograduacion_nombre_validation() &
            this.EDIT_alumnograduacion_apellidos_validation() &
            this.EDIT_alumnograduacion_titulacion_validation() &
            this.EDIT_alumnograduacion_dni_validation() &
            this.EDIT_alumnograduacion_telefono_validation() &
            this.EDIT_alumnograduacion_direccion_validation() &
            this.EDIT_alumnograduacion_email_validation() &
            this.EDIT_nuevo_alumnograduacion_fotoacto_validation()
        );
        return Boolean(result);
    }

    SEARCH_submit_alumnograduacion() {
        let result = (
            this.SEARCH_alumnograduacion_login_validation() &
            this.SEARCH_alumnograduacion_password_validation() &
            this.SEARCH_alumnograduacion_nombre_validation() &
            this.SEARCH_alumnograduacion_apellidos_validation() &
            this.SEARCH_alumnograduacion_titulacion_validation() &
            this.SEARCH_alumnograduacion_dni_validation() &
            this.SEARCH_alumnograduacion_telefono_validation() &
            this.SEARCH_alumnograduacion_direccion_validation() &
            this.SEARCH_alumnograduacion_email_validation() &
            this.SEARCH_alumnograduacion_fotoacto_validation()
        );
        return Boolean(result);
    }

    personalize_validate_dni(dni) {
        if (dni.length !== 9) {
            return false;
        }
        const letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
        const numero = parseInt(dni.substring(0, 8), 10);
        const letraEsperada = letras.charAt(numero % 23);
        return letraEsperada === dni.charAt(8);
    }
}
