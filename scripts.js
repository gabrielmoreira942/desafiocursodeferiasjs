function Enviar() {
    /*O usuário não deve poder realizar o cálculo sem informar a altura e peso
    O usuário não deve poder realizar o cálculo se informar um altura ou peso inferior a 1*/
    var altura = document.getElementById("altura").value;
    var peso = document.getElementById("peso").value;
    imc = peso / Math.pow(altura, 2)
     if (isNaN(imc)) {
      document.getElementById('alturaPeso').style.display = "block"
      document.getElementById('alturaMsg').style.display = "none"
      document.getElementById('pesoMsg').style.display = "none"

      document.getElementById('mGBlock').style.display = "none"
      document.getElementById('mLBlock').style.display = "none"
      document.getElementById('mOKBlock').style.display = "none"
      document.getElementById('mSbpBlock').style.display = "none"
      document.getElementById('mObBlock').style.display = "none"
      document.getElementById('invalido').style.display = "none"
    }
   else if (altura == '') {
      document.getElementById('alturaMsg').style.display = "block"
      document.getElementById('alturaPeso').style.display = "none"
      document.getElementById('pesoMsg').style.display = "none"

      document.getElementById('mGBlock').style.display = "none"
      document.getElementById('mLBlock').style.display = "none"
      document.getElementById('mOKBlock').style.display = "none"
      document.getElementById('mSbpBlock').style.display = "none"
      document.getElementById('mObBlock').style.display = "none"
      document.getElementById('invalido').style.display = "none"
    }
   else if (peso == '') {
      document.getElementById('pesoMsg').style.display = "block"
      document.getElementById('alturaMsg').style.display = "none"
      document.getElementById('alturaPeso').style.display = "none"
      document.getElementById('mGBlock').style.display = "none"
      document.getElementById('mLBlock').style.display = "none"
      document.getElementById('mOKBlock').style.display = "none"
      document.getElementById('mSbpBlock').style.display = "none"
      document.getElementById('mObBlock').style.display = "none"
      document.getElementById('invalido').style.display = "none"
    }
   else if(altura <1 || peso <1){
      document.getElementById('invalido').style.display = "block"
      document.getElementById('pesoMsg').style.display = "none"
      document.getElementById('alturaMsg').style.display = "none"
      document.getElementById('alturaPeso').style.display = "none"
      document.getElementById('mGBlock').style.display = "none"
      document.getElementById('mLBlock').style.display = "none"
      document.getElementById('mOKBlock').style.display = "none"
      document.getElementById('mSbpBlock').style.display = "none"
      document.getElementById('mObBlock').style.display = "none"
    }
    else if (imc < 16) {
      //IMC abaixo de 16 indica magreza grave, e deve ser alertado com o .alert-danger do Bootstrap
      document.getElementById('mGrave').innerHTML = imc.toFixed(2)
      document.getElementById('mGBlock').style.display = "block"

      document.getElementById('mLBlock').style.display = "none"
      document.getElementById('mOKBlock').style.display = "none"
      document.getElementById('mSbpBlock').style.display = "none"
      document.getElementById('mObBlock').style.display = "none"

      document.getElementById('alturaPeso').style.display = "none"
      document.getElementById('alturaMsg').style.display = "none"
      document.getElementById('pesoMsg').style.display = "none"
      document.getElementById('invalido').style.display = "none"
    } else if (imc >= 16 && imc <= 18.49) {
      //IMC entre 16 e 18.49 indica magreza leve/moderada e deve ser alertado com o .alert-warning do Bootstrap
      document.getElementById('mLeve').innerHTML = imc.toFixed(2)
      document.getElementById('mLBlock').style.display = "block"

      document.getElementById('mGBlock').style.display = "none"
      document.getElementById('mOKBlock').style.display = "none"
      document.getElementById('mSbpBlock').style.display = "none"
      document.getElementById('mObBlock').style.display = "none"

      document.getElementById('alturaPeso').style.display = "none"
      document.getElementById('alturaMsg').style.display = "none"
      document.getElementById('pesoMsg').style.display = "none"
      document.getElementById('invalido').style.display = "none"
    } else if (imc >= 18.5 && imc <= 24.99) {
      //IMC entre 18.5 e 24.99 indica massa corporal saldável e deve ser alertado com o .alert-success do Bootstrap
      document.getElementById('mOK').innerHTML = imc.toFixed(2)
      document.getElementById('mOKBlock').style.display = "block"

      document.getElementById('mLBlock').style.display = "none"
      document.getElementById('mGBlock').style.display = "none"
      document.getElementById('mSbpBlock').style.display = "none"
      document.getElementById('mObBlock').style.display = "none"

      document.getElementById('alturaPeso').style.display = "none"
      document.getElementById('alturaMsg').style.display = "none"
      document.getElementById('pesoMsg').style.display = "none"
      document.getElementById('invalido').style.display = "none"
    } else if (imc >= 25 && imc <= 29.99) {
      //IMC entre 25 e 29.99 indica sobrepeso e deve ser alertado com o .alert-warning do Bootstrap
      document.getElementById('mSbp').innerHTML = imc.toFixed(2)
      document.getElementById('mSbpBlock').style.display = "block"

      document.getElementById('mOKBlock').style.display = "none"
      document.getElementById('mLBlock').style.display = "none"
      document.getElementById('mGBlock').style.display = "none"
      document.getElementById('mObBlock').style.display = "none"

      document.getElementById('alturaPeso').style.display = "none"
      document.getElementById('alturaMsg').style.display = "none"
      document.getElementById('pesoMsg').style.display = "none"
      document.getElementById('invalido').style.display = "none"
    } else if (imc >= 30 && imc <= 40) {
      // IMC entre 30 e 40 indica obesidade e deve ser alertado com o .alert.danger do Bootstrap
      document.getElementById('mOb').innerHTML = imc.toFixed(2)
      document.getElementById('mObBlock').style.display = "block"

      document.getElementById('mSbpBlock').style.display = "none"
      document.getElementById('mOKBlock').style.display = "none"
      document.getElementById('mLBlock').style.display = "none"
      document.getElementById('mGBlock').style.display = "none"

      document.getElementById('alturaPeso').style.display = "none"
      document.getElementById('alturaMsg').style.display = "none"
      document.getElementById('pesoMsg').style.display = "none"
      document.getElementById('invalido').style.display = "none"

    }

  }