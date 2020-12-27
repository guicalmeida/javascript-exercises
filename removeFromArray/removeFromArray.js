
const removeFromArray = function(array, ...remove) {
    for (let i = 0 ; 0 < (remove.length - i); i++) {    //loop que analisará cada elemento da array de remover
        let pos = remove[remove.length - 1 - i];        //pos extrairá da array de remoção cada elemento a ser avaliado na array principal
        let index = array.indexOf(pos);                 //index verá se o elemento existe na array principal
        if (index == -1) {continue;}                    //se index = -1, significa que não existe e logo o loop pode seguir para a proxima iteração
        else {                                        //mas, caso exista, a array terá esse elemento removido com splice
            array.splice(index, 1);
        }}
    return array;
}

module.exports = removeFromArray
