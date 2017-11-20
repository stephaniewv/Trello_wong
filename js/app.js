window.addEventListener('load', function() {
  var insertText = document.querySelector('.box-button');
  var divMain = document.querySelector('.box-form');
    
  /* Creando función cuando se de el primer click */
  insertText.addEventListener('click', function() {
    insertText.classList.remove('box-button');
    console.log(insertText);
    divMain.removeChild(divMain.querySelector('#box-button')); // elimina antiguo input
    var divTexting = document.createElement('div'); // creando div
    var buttonSave = document.createElement('button');// boton guardar
    var newText = document.createElement('input'); // nuevo input
    /* Uniendo */
    divTexting.appendChild(newText);
    divTexting.appendChild(buttonSave);
    divMain.appendChild(divTexting);
    /* Añadiendo clases */
    divTexting.classList.add('div-texting');
    newText.classList.add('insert-text');
    newText.classList.add('insert-text::placeholder');
    newText.placeholder = 'Añadir una lista...';
    buttonSave.classList.add('button-save');
    buttonSave.innerHTML = 'Guardar';

    /* Cuando se desea crear una lista  */
    buttonSave.addEventListener('click', function() {
      divTexting.classList.add('div-texting-moving');
      console.log(newText); // se sigue viendo como placeholder 'añadir una lista'
      /* Creando los nuevos divs y elementos */
      var divList = document.createElement('div');
      var titleList = document.createElement('p'); // El P donde irá el texto 'nombre de lista'
      var textList = document.createElement('textarea');
      var addButton = document.createElement('button');
      /* uniendo*/
      divList.appendChild(titleList);
      divList.appendChild(textList);
      divList.appendChild(addButton);
      divMain.appendChild(divList);
      /* Añadiendo clases y demás*/
      titleList.textContent = 'Nombre de Lista';
      divList.classList.add('divList');
      titleList.classList.add('classList');
      textList.classList.add('textList');
      textList.setAttribute('rows', '4');
      addButton.classList.add('addButton');
      addButton.textContent = 'Añadir';
      /* boton a reemplazar */
      var newAddButton = document.createElement('button');
      newAddButton.classList.add('newAddButton');
      newAddButton.textContent = 'Añadir';
            
      addButton.addEventListener('focus', function() {
        /* añadiendo */
        var cardText = document.createElement('textarea');
        divList.appendChild(cardText);
        divList.insertBefore(cardText, addButton);
        /* Modificando el div */
        divList.classList.remove('divList');
        divList.classList.add('divListBigger');
        /* modificando el primer textarea; textList */
        textList.classList.remove('textList');
        textList.classList.add('textListHidden');
        /* Modificando cardText */
        cardText.classList.add('cardText');
        cardText.setAttribute('rows', '4');
        addButton.disabled = true;
        addButton.setAttribute('class', 'addButton');
        divList.replaceChild(newAddButton, addButton);
      });
            
      newAddButton.addEventListener('click', function() {
        console.log(insertText);
        divMain.removeChild(divList);
        divMain.removeChild(divTexting);
        divMain.appendChild(insertText);
        insertText.classList.add('box-button');
        /* divMain.removeChild(divMain.querySelector('#box-button'));*/
        /* divMain.replaceChild(insertText, divList);*/
      });
    });
  });
});