var obj = new Object();

document.getElementById("form1").addEventListener('submit', () => {
    const nome = document.getElementById("validationCustom01").value;
    const email = document.getElementById("validationCustom02").value;
    const whats = document.getElementById("validationCustom03").value;

    const acesso = document.getElementById("btn-acessa");

    acesso.addEventListener("click", () => {
        var dados = document.getElementById("form1");
        var isValid = dados.checkValidity();

        if (isValid == true) {
            document.getElementById('form1').style.display = "none";
            document.getElementById('rangeslider').style.display = "inline-block";
        }
        obj.name = nome;
        obj.email = email;
        obj.whats = whats;
        var jsonString = JSON.stringify(obj);
        console.log(JSON.parse(jsonString));
    });

});

(function () {
    'use strict'

    var forms = document.querySelectorAll('.needs-validation')

    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})();

document.getElementById('validationCustom03').addEventListener('input', function (e) {
    var x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
    e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
});