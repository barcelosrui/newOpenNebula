exports.info = [
    { desc: " openNebula Exame de Melhoria CNV ", left: 'center', top: 0 },
    { desc: " Trabelho Realizado por: ", left: 'left', top: 1 },
    { desc: " Rui Barcelos", left: 'left', top: 2 },
    { desc: " David Bernardo ", left: 'left', top: 3 },
];

exports.infoCreate = [
    { desc: " Criar VM Parametrizada", left: 'center', top: 0 },
    { desc: " Name:    ", left: 'left', top: 1 },
    { desc: " RAM:     ", left: 'left', top: 4 },
    { desc: " CPU:     ", left: 'left', top: 7 },
];

exports.mainMenu = [
    'Listar VMs',
    'Criar VM'
];

exports.createMenu = [
    'Criar VM',
    'Criar VM parameterizada'
];

exports.propertiesMainMenu = {
    top: 'center',
    left: 'center',
    width: '75%',
    height: '90%',
    content: '',
    tags: true,
    border: {
        type: 'line'
    },
    style: {
        fg: 'white',
        bg: 'magenta',
        border: {
            fg: '#f0f0f0'
        },
        hover: {
            bg: 'green'
        }
    }
};
exports.propertiesIcon = {
    top: 0,
    left: 0,
    type: 'overlay',
    width: 'shrink',
    height: 'shrink',
    file: './src/opennebula.png',
    search: false
};

exports.propertiesListMainMenu = {
    width: '90%',
    height: '75%',
    top: 'center',
    left: 'center',
    align: 'center',
    fg: 'blue',
    border: {
        type: 'line'
    },
    selectedBg: 'green',

    // Allow mouse support
    mouse: true,

    // Allow key support (arrow keys + enter)
    keys: true,

    // Use vi built-in keys
    vi: true
}

exports.propertiesFormCreateVM = {
    width: '90%',
    height: '90%',
    left: 'center',
    border: {
        type: 'line'
    },
    keys: true,
    vi: true
}

exports.txtBox = (name, l, t, content) => {
    return {
        name: name,
        top: t,
        left: l,
        height: 3,
        inputOnFocus: true,
        content: content,
        border: {
            type: 'line'
        },
        focus: {
            fg: 'blue'
        }
    }
};

exports.btn = (name, l, t, content, color) => {
    return {
        name: name,
        content: content,
        top: t,
        left: l,
        shrink: true,
        padding: {
            top: 1,
            right: 2,
            bottom: 1,
            left: 2
        },
        style: {
            bold: true,
            fg: 'white',
            bg: color,
            focus: {
                inverse: true
            }
        }
    }
}