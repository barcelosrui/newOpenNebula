//blessed Internal Library
var blessedIL = require("./vendors/blessed");
//openNebula Internal Library
var opennebulaIL = require("./vendors/opennebula");

var tools = require("./vendors/tools");

var settings = require("./vendors/settings");

// Create a screen object.
var screen = blessedIL.screen();

var mainMenu = blessedIL.mainMenu();
var listMainMenu = blessedIL.listMainMenu();
var listVMsBox = blessedIL.listVMsBox();
var listCreateVMs = blessedIL.listCreateVMs();
var createVMParamForm = blessedIL.createVMParamForm();
var txtboxname = blessedIL.textboxName();
var txtboxram = blessedIL.textboxRAM();
var txtboxcpu= blessedIL.textboxCPU();
var btnSubmit = blessedIL.btnSubmit();
var btnReset = blessedIL.btnReset();

var info = settings.info;

tools.addText(screen,info)

//List all vms
opennebulaIL.vms(screen, listVMsBox);

listMainMenu.setItems(settings.mainMenu);
listCreateVMs.setItems(settings.createMenu);

// Append our box mainMenu to the screen.
tools.addElement(screen, mainMenu);
// Append our listMainMenu to the mainMenu.
tools.addElement(mainMenu, listMainMenu);

listMainMenu.key('enter', function () {
    //
    var opcMM = listMainMenu.getItemIndex(listMainMenu.selected);
    switch (opcMM) {
        case 0:
            tools.addElement(listMainMenu, listVMsBox);
            break;
        case 1:
            tools.addElement(listMainMenu, listCreateVMs);
            break;
    }
    screen.render();
});

listCreateVMs.key('enter', function () {
    //
    var opcMM = listCreateVMs.getItemIndex(listCreateVMs.selected);
    switch (opcMM) {
        case 0:
            opennebulaIL.createVM("VM DEFAULT", "128", "0.1");
            opennebulaIL.vms(screen, listVMsBox);
            break;
        case 1:
            tools.addElement(listCreateVMs,createVMParamForm);
            tools.addText(createVMParamForm,settings.infoCreate);
            createVMParamForm.append(txtboxname);
            createVMParamForm.append(txtboxram);
            createVMParamForm.append(txtboxcpu);
            createVMParamForm.append(btnSubmit);
            createVMParamForm.append(btnReset);

           
            break;
    }
    
    screen.render();

});

btnSubmit.on('press', function () {
    createVMParamForm.submit();
});
btnReset.on('press', function () {
    createVMParamForm.reset();
});

createVMParamForm.on('submit', function (data) {
    opennebulaIL.createVM(data.name, data.ram, data.cpu);
});
createVMParamForm.on('reset', function () {
    
});

tools.back(screen, listMainMenu, listVMsBox);
tools.back(screen, listMainMenu, listCreateVMs);
tools.back(screen, listCreateVMs, createVMParamForm);
// Quit on Escape, q, or Control-C.
screen.key(['escape', 'q', 'C-c'], function (ch) {
    return process.exit(0);
});

// Render the screen.
screen.render();
