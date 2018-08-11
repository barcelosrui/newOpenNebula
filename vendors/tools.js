//blessed Internal Library
var blessedIL = require("./blessed");

exports.addElement = (oldElement,newElement)=>{
    oldElement.append(newElement);
    newElement.focus();
}
var removeElement = (oldElement,newElement)=>{
    oldElement.remove(newElement);
    oldElement.focus();
}

exports.back = (screen,oldElement,newElement) =>{
    newElement.key('v', function () {
        removeElement(oldElement,newElement);
        screen.render();
    });
}

exports.saveToArray = (oldData, newData) => {
    newData = [];
    for (var i = 0; i < oldData.length; i++) {
        newData[i] = { id: oldData[i].ID, name: oldData[i].NAME };
    }
    return newData;
}

exports.addText = (parent, cont) =>{
    for (let index = 0; index < cont.length; index++) {
        parent.append(blessedIL.infoText(cont[index].desc, cont[index].left, cont[index].top));
    }
} 
