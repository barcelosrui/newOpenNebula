var blessed = require('blessed');

var fs = require('fs');

var settings = require('./settings');

exports.test = () => {
    console.log("BLESSED")
}

exports.screen = () => {
    // Create a screen object.
    return blessed.screen(
        {
            smartCSR: true,
            title: 'Exame de Melhoria CNV'
        }
    );
}

exports.mainMenu = () =>{
    return box(settings.propertiesMainMenu)
}

exports.createVMParamForm = () =>{
    return form(settings.propertiesFormCreateVM);
}
exports.listMainMenu = () =>{
    return list(settings.propertiesListMainMenu)
}

exports.listVMsBox = () =>{
    return list(settings.propertiesListMainMenu)
}
exports.listCreateVMs = () =>{
    return list(settings.propertiesListMainMenu)
}

exports.textboxName = () =>{
    return textbox(settings.txtBox('name',"center",2,'Name'));
} 
exports.textboxRAM = () =>{
    return textbox(settings.txtBox('ram',"center",5,'RAM'));
} 
exports.textboxCPU = () =>{
    return textbox(settings.txtBox('cpu',"center",8,'CPU'));
} 
exports.btnSubmit = () =>{
    return button(settings.btn('submit',5,12,'Submit','green'));
} 
exports.btnReset = () =>{
    return button(settings.btn('reset',35,12,'Reset','red'));
} 
exports.icon = () =>{
    return image(settings.propertiesIcon)
}

exports.infoText = (text,l,t) => {
    return new blessed.Text({  
        left: l,
        top:t,
        content: text
      })
}

var button = (properties) =>{
    return blessed.button(properties)
}

var textbox = (properties) =>{
    return blessed.textbox(properties)
}

var form = (properties) =>{
    return blessed.form(properties)
}

var list = (properties) =>{
    return blessed.list(properties)
}

var box = (properties) =>{
    return blessed.box(properties)
}

var image = (properties) =>{
    return blessed.image(properties)
}