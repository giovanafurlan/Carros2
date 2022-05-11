//Função que valida o Login para poder mudar a página
document.getElementById("form1").addEventListener('submit', () => {

    const acesso = document.getElementById("btn-acessa");

    acesso.addEventListener("click", () => {
        var dados = document.getElementById("form1");
        var isValid = dados.checkValidity();

        if (isValid == true) {
            document.getElementById('form1').style.display = "none";
            document.getElementById('rangeslider').style.display = "inline-block";
        }
    });
});

//Função do bootstrap que valid o Login
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

//Validação do email
document.getElementById('validationCustom03').addEventListener('input', function (e) {
    var x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
    e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
});

//Função que faz a página não recarregar ao enviar informações
function processAjaxData(response, urlPath) {
    document.getElementById("content").innerHTML = response.html;
    document.title = response.pageTitle;
    window.history.pushState({
        "html": response.html,
        "pageTitle": response.pageTitle
    }, "", urlPath);
}

//Mudança de imagem ao mudar o range
function fadeIn() {
    var fade = document.getElementById("carro");
    var opacity = 0;
    var intervalID = setInterval(function () {

        if (opacity < 1) {
            opacity = opacity + 0.1
            fade.style.opacity = opacity;
        } else {
            clearInterval(intervalID);
        }
    }, 50);
}

//Função que muda os dados dos cartões do Simulador
document.getElementById('sliderRange').addEventListener('click', () => {

    const valueRange = document.getElementById('sliderRange').value;

    const credito1 = document.getElementById('valorCredito1');
    credito1.innerHTML = valueRange;
    const credito2 = document.getElementById('valorCredito2');
    credito2.innerHTML = valueRange;
    const credito3 = document.getElementById('valorCredito3');
    credito3.innerHTML = valueRange;
    const credito4 = document.getElementById('valorCredito4');
    credito4.innerHTML = valueRange;

    const valueAntes80 = document.getElementById("antes80");
    const valueAntes60 = document.getElementById("antes60");
    const valueAntes50 = document.getElementById("antes50");
    const valueAntes36 = document.getElementById("antes36");

    const valueOpcao80 = document.getElementById("opcao80");
    const valueOpcao60 = document.getElementById("opcao60");
    const valueOpcao50 = document.getElementById("opcao50");
    const valueOpcao36 = document.getElementById("opcao36");

    const img = document.getElementById("carro");

    const divImage = document.querySelector(".img1");

    const tl = new TimelineMax();
    

    if (valueRange >= 30000 && valueRange <= 32499) {
        tl.fromTo(divImage, 1, {
            width: "0%"
        }, {
            width: "23vw"
        });
        img.src = "https://uploads-ssl.webflow.com/6273d0f394159549d01b49ee/6273d4b7ad189838f1e3b3a2_a.jpg";

        const novoValueAntes80 = valueAntes80.setAttribute('value', 'R$ ' + 375.00);
        valueAntes80.innerHTML.value = novoValueAntes80;

        valueOpcao80.setAttribute('value', 375.00);

        const novoValueAntes60 = valueAntes60.setAttribute('value', 'R$ ' + 500.00);
        valueAntes60.innerHTML.value = novoValueAntes60;

        valueOpcao60.setAttribute('value', 500.00);

        const novoValueAntes50 = valueAntes50.setAttribute('value', 'R$ ' + 600.00);
        valueAntes50.innerHTML.value = novoValueAntes50;

        valueOpcao50.setAttribute('value', 600.00);

        const novoValueAntes36 = valueAntes36.setAttribute('value', 'R$ ' + 833.33);
        valueAntes36.innerHTML.value = novoValueAntes36;

        valueOpcao36.setAttribute('value', 833.33);
    }
    if (valueRange >= 32500 && valueRange <= 34999) {
        tl.fromTo(divImage, 1, {
            width: "0%"
        }, {
            width: "23vw"
        });
        img.src = "https://uploads-ssl.webflow.com/6273d0f394159549d01b49ee/627a9b80cbdbeddbcd6e4df8_b.jpg";

        const novoValueAntes80 = valueAntes80.setAttribute('value', 'R$ ' + 406.25);
        valueAntes80.innerHTML.value = novoValueAntes80;

        valueOpcao80.setAttribute('value', 406.25);

        const novoValueAntes60 = valueAntes60.setAttribute('value', 'R$ ' + 541.67);
        valueAntes60.innerHTML.value = novoValueAntes60;

        valueOpcao60.setAttribute('value', 541.67);

        const novoValueAntes50 = valueAntes50.setAttribute('value', 'R$ ' + 650.00);
        valueAntes50.innerHTML.value = novoValueAntes50;

        valueOpcao50.setAttribute('value', 650.00);

        const novoValueAntes36 = valueAntes36.setAttribute('value', 'R$ ' + 902.78);
        valueAntes36.innerHTML.value = novoValueAntes36;

        valueOpcao36.setAttribute('value', 902.78);
    }
    if (valueRange >= 35000 && valueRange <= 37499) {
        tl.fromTo(divImage, 1, {
            width: "0%"
        }, {
            width: "23vw"
        });
        img.src = "https://uploads-ssl.webflow.com/6273d0f394159549d01b49ee/627a9b819d7a13852c5c716b_c.jpg";

        const novoValueAntes80 = valueAntes80.setAttribute('value', 'R$ ' + 437.50);
        valueAntes80.innerHTML.value = novoValueAntes80;

        valueOpcao80.setAttribute('value', 437.50);

        const novoValueAntes60 = valueAntes60.setAttribute('value', 'R$ ' + 583.33);
        valueAntes60.innerHTML.value = novoValueAntes60;

        valueOpcao60.setAttribute('value', 583.33);

        const novoValueAntes50 = valueAntes50.setAttribute('value', 'R$ ' + 700.00);
        valueAntes50.innerHTML.value = novoValueAntes50;

        valueOpcao50.setAttribute('value', 700.00);

        const novoValueAntes36 = valueAntes36.setAttribute('value', 'R$ ' + 972.22);
        valueAntes36.innerHTML.value = novoValueAntes36;

        valueOpcao36.setAttribute('value', 972.22);
    }
    if (valueRange >= 37500 && valueRange <= 39999) {
        tl.fromTo(divImage, 1, {
            width: "0%"
        }, {
            width: "23vw"
        });
        img.src = "https://uploads-ssl.webflow.com/6273d0f394159549d01b49ee/627a9c5d91983f1e7beca9b3_d.jpg";

        const novoValueAntes80 = valueAntes80.setAttribute('value', 'R$ ' + 468.75);
        valueAntes80.innerHTML.value = novoValueAntes80;

        valueOpcao80.setAttribute('value', 468.75);

        const novoValueAntes60 = valueAntes60.setAttribute('value', 'R$ ' + 625.00);
        valueAntes60.innerHTML.value = novoValueAntes60;

        valueOpcao60.setAttribute('value', 625.00);

        const novoValueAntes50 = valueAntes50.setAttribute('value', 'R$ ' + 750.00);
        valueAntes50.innerHTML.value = novoValueAntes50;

        valueOpcao50.setAttribute('value', 750.00);

        const novoValueAntes36 = valueAntes36.setAttribute('value', 'R$ ' + 1041.67);
        valueAntes36.innerHTML.value = novoValueAntes36;

        valueOpcao36.setAttribute('value', 1041.67);
    }
    if (valueRange >= 40000 && valueRange <= 42999) {
        tl.fromTo(divImage, 1, {
            width: "0%"
        }, {
            width: "23vw"
        });
        img.src = "https://uploads-ssl.webflow.com/6273d0f394159549d01b49ee/627a9d89d34da3294cbf8e6f_e.jpg";

        const novoValueAntes80 = valueAntes80.setAttribute('value', 'R$ ' + 500.00);
        valueAntes80.innerHTML.value = novoValueAntes80;

        valueOpcao80.setAttribute('value', 500.00);

        const novoValueAntes60 = valueAntes60.setAttribute('value', 'R$ ' + 666.67);
        valueAntes60.innerHTML.value = novoValueAntes60;

        valueOpcao60.setAttribute('value', 666.67);

        const novoValueAntes50 = valueAntes50.setAttribute('value', 'R$ ' + 800.00);
        valueAntes50.innerHTML.value = novoValueAntes50;

        valueOpcao50.setAttribute('value', 800.00);

        const novoValueAntes36 = valueAntes36.setAttribute('value', 'R$ ' + 1111.11);
        valueAntes36.innerHTML.value = novoValueAntes36;

        valueOpcao36.setAttribute('value', 1111.11);
    }
    if (valueRange >= 42500 && valueRange <= 44999) {
        tl.fromTo(divImage, 1, {
            width: "0%"
        }, {
            width: "23vw"
        });
        img.src = "https://uploads-ssl.webflow.com/6273d0f394159549d01b49ee/627a9b82cbdbedb2ae6e4e3d_f.jpg";

        const novoValueAntes80 = valueAntes80.setAttribute('value', 'R$ ' + 531.25);
        valueAntes80.innerHTML.value = novoValueAntes80;

        valueOpcao80.setAttribute('value', 531.25);

        const novoValueAntes60 = valueAntes60.setAttribute('value', 'R$ ' + 708.33);
        valueAntes60.innerHTML.value = novoValueAntes60;

        valueOpcao60.setAttribute('value', 708.33);

        const novoValueAntes50 = valueAntes50.setAttribute('value', 'R$ ' + 850.00);
        valueAntes50.innerHTML.value = novoValueAntes50;

        valueOpcao50.setAttribute('value', 850.00);

        const novoValueAntes36 = valueAntes36.setAttribute('value', 'R$ ' + 1180.56);
        valueAntes36.innerHTML.value = novoValueAntes36;

        valueOpcao36.setAttribute('value', 1180.56);
    }
    if (valueRange >= 45000 && valueRange <= 49999) {
        tl.fromTo(divImage, 1, {
            width: "0%"
        }, {
            width: "23vw"
        });
        img.src = "https://uploads-ssl.webflow.com/6273d0f394159549d01b49ee/627a9b81000a03940598300b_g.jpg";

        const novoValueAntes80 = valueAntes80.setAttribute('value', 'R$ ' + 562.50);
        valueAntes80.innerHTML.value = novoValueAntes80;

        valueOpcao80.setAttribute('value', 562.50);

        const novoValueAntes60 = valueAntes60.setAttribute('value', 'R$ ' + 750.00);
        valueAntes60.innerHTML.value = novoValueAntes60;

        valueOpcao60.setAttribute('value', 750.00);

        const novoValueAntes50 = valueAntes50.setAttribute('value', 'R$ ' + 900.00);
        valueAntes50.innerHTML.value = novoValueAntes50;

        valueOpcao50.setAttribute('value', 900.00);

        const novoValueAntes36 = valueAntes36.setAttribute('value', 'R$ ' + 1250.00);
        valueAntes36.innerHTML.value = novoValueAntes36;

        valueOpcao36.setAttribute('value', 1250.00);
    }
    if (valueRange >= 50000 && valueRange <= 54999) {
        tl.fromTo(divImage, 1, {
            width: "0%"
        }, {
            width: "23vw"
        });
        img.src = "https://uploads-ssl.webflow.com/6273d0f394159549d01b49ee/627a9b84386137b3794572d6_h.jpg";

        const novoValueAntes80 = valueAntes80.setAttribute('value', 'R$ ' + 625.00);
        valueAntes80.innerHTML.value = novoValueAntes80;

        valueOpcao80.setAttribute('value', 562.50);

        const novoValueAntes60 = valueAntes60.setAttribute('value', 'R$ ' + 833.33);
        valueAntes60.innerHTML.value = novoValueAntes60;

        valueOpcao60.setAttribute('value', 833.33);

        const novoValueAntes50 = valueAntes50.setAttribute('value', 'R$ ' + 1000.00);
        valueAntes50.innerHTML.value = novoValueAntes50;

        valueOpcao50.setAttribute('value', 1000.00);

        const novoValueAntes36 = valueAntes36.setAttribute('value', 'R$ ' + 1388.89);
        valueAntes36.innerHTML.value = novoValueAntes36;

        valueOpcao36.setAttribute('value', 1388.89);
    }
    if (valueRange >= 55000 && valueRange <= 59999) {
        img.src = "https://uploads-ssl.webflow.com/6273d0f394159549d01b49ee/627a9b81aeb204ff39174652_i.jpg";
        tl.fromTo(divImage, 1, {
            width: "0%"
        }, {
            width: "23vw"
        });

        const novoValueAntes80 = valueAntes80.setAttribute('value', 'R$ ' + 687.50);
        valueAntes80.innerHTML.value = novoValueAntes80;

        valueOpcao80.setAttribute('value', 687.50);

        const novoValueAntes60 = valueAntes60.setAttribute('value', 'R$ ' + 916.67);
        valueAntes60.innerHTML.value = novoValueAntes60;

        valueOpcao60.setAttribute('value', 916.67);

        const novoValueAntes50 = valueAntes50.setAttribute('value', 'R$ ' + 1100.00);
        valueAntes50.innerHTML.value = novoValueAntes50;

        valueOpcao50.setAttribute('value', 1100.00);

        const novoValueAntes36 = valueAntes36.setAttribute('value', 'R$ ' + 1527.78);
        valueAntes36.innerHTML.value = novoValueAntes36;

        valueOpcao36.setAttribute('value', 1527.78);
    }
    if (valueRange >= 60000 && valueRange <= 64999) {
        tl.fromTo(divImage, 1, {
            width: "0%"
        }, {
            width: "23vw"
        });
        img.src = "https://uploads-ssl.webflow.com/6273d0f394159549d01b49ee/627a9b81002313e783a412d3_j.jpg";

        const novoValueAntes80 = valueAntes80.setAttribute('value', 'R$ ' + 750.00);
        valueAntes80.innerHTML.value = novoValueAntes80;

        valueOpcao80.setAttribute('value', 750.00);

        const novoValueAntes60 = valueAntes60.setAttribute('value', 'R$ ' + 1000.00);
        valueAntes60.innerHTML.value = novoValueAntes60;

        valueOpcao60.setAttribute('value', 1000.00);

        const novoValueAntes50 = valueAntes50.setAttribute('value', 'R$ ' + 1200.00);
        valueAntes50.innerHTML.value = novoValueAntes50;

        valueOpcao50.setAttribute('value', 1200.00);

        const novoValueAntes36 = valueAntes36.setAttribute('value', 'R$ ' + 1666.67);
        valueAntes36.innerHTML.value = novoValueAntes36;

        valueOpcao36.setAttribute('value', 1666.67);
    }
    if (valueRange >= 65000 && valueRange <= 69999) {
        tl.fromTo(divImage, 1, {
            width: "0%"
        }, {
            width: "23vw"
        });
        img.src = "https://uploads-ssl.webflow.com/6273d0f394159549d01b49ee/627a9b8109cdd109393b725d_k.jpg";

        const novoValueAntes80 = valueAntes80.setAttribute('value', 'R$ ' + 0);
        valueAntes80.innerHTML.value = novoValueAntes80;

        valueOpcao80.setAttribute('value', 0);

        const novoValueAntes60 = valueAntes60.setAttribute('value', 'R$ ' + 1083.33);
        valueAntes60.innerHTML.value = novoValueAntes60;

        valueOpcao60.setAttribute('value', 1083.33);

        const novoValueAntes50 = valueAntes50.setAttribute('value', 'R$ ' + 1300.00);
        valueAntes50.innerHTML.value = novoValueAntes50;

        valueOpcao50.setAttribute('value', 1300.00);

        const novoValueAntes36 = valueAntes36.setAttribute('value', 'R$ ' + 1805.56);
        valueAntes36.innerHTML.value = novoValueAntes36;

        valueOpcao36.setAttribute('value', 1805.56);
    }
    if (valueRange >= 70000 && valueRange <= 74999) {
        tl.fromTo(divImage, 1, {
            width: "0%"
        }, {
            width: "23vw"
        });
        img.src = "https://uploads-ssl.webflow.com/6273d0f394159549d01b49ee/627a9b81781722ec28eb3479_l.jpg";

        const novoValueAntes80 = valueAntes80.setAttribute('value', 'R$ ' + 0);
        valueAntes80.innerHTML.value = novoValueAntes80;

        valueOpcao80.setAttribute('value', 0);

        const novoValueAntes60 = valueAntes60.setAttribute('value', 'R$ ' + 1166.67);
        valueAntes60.innerHTML.value = novoValueAntes60;

        valueOpcao60.setAttribute('value', 1166.67);

        const novoValueAntes50 = valueAntes50.setAttribute('value', 'R$ ' + 1400.00);
        valueAntes50.innerHTML.value = novoValueAntes50;

        valueOpcao50.setAttribute('value', 1400.00);

        const novoValueAntes36 = valueAntes36.setAttribute('value', 'R$ ' + 1944.44);
        valueAntes36.innerHTML.value = novoValueAntes36;

        valueOpcao36.setAttribute('value', 1944.44);
    }
    if (valueRange >= 75000 && valueRange <= 79999) {
        img.src = "https://uploads-ssl.webflow.com/6273d0f394159549d01b49ee/627a9b81c0a15b809a7bf835_m.jpg";
        tl.fromTo(divImage, 1, {
            width: "0%"
        }, {
            width: "23vw"
        });

        const novoValueAntes80 = valueAntes80.setAttribute('value', 'R$ ' + 0);
        valueAntes80.innerHTML.value = novoValueAntes80;

        valueOpcao80.setAttribute('value', 0);

        const novoValueAntes60 = valueAntes60.setAttribute('value', 'R$ ' + 1250.00);
        valueAntes60.innerHTML.value = novoValueAntes60;

        valueOpcao60.setAttribute('value', 1250.00);

        const novoValueAntes50 = valueAntes50.setAttribute('value', 'R$ ' + 1500.00);
        valueAntes50.innerHTML.value = novoValueAntes50;

        valueOpcao50.setAttribute('value', 1500.00);

        const novoValueAntes36 = valueAntes36.setAttribute('value', 'R$ ' + 2083.33);
        valueAntes36.innerHTML.value = novoValueAntes36;

        valueOpcao36.setAttribute('value', 2083.33);
    }
    if (valueRange >= 80000 && valueRange <= 89999) {
        img.src = "https://uploads-ssl.webflow.com/6273d0f394159549d01b49ee/627a9b81440d33afa24ea0a1_n.jpg";
        tl.fromTo(divImage, 1, {
            width: "0%"
        }, {
            width: "23vw"
        });

        const novoValueAntes80 = valueAntes80.setAttribute('value', 'R$ ' + 0);
        valueAntes80.innerHTML.value = novoValueAntes80;

        valueOpcao80.setAttribute('value', 0);

        const novoValueAntes60 = valueAntes60.setAttribute('value', 'R$ ' + 1333.33);
        valueAntes60.innerHTML.value = novoValueAntes60;

        valueOpcao60.setAttribute('value', 1333.33);

        const novoValueAntes50 = valueAntes50.setAttribute('value', 'R$ ' + 1600.00);
        valueAntes50.innerHTML.value = novoValueAntes50;

        valueOpcao50.setAttribute('value', 1600.00);

        const novoValueAntes36 = valueAntes36.setAttribute('value', 'R$ ' + 2222.22);
        valueAntes36.innerHTML.value = novoValueAntes36;

        valueOpcao36.setAttribute('value', 2222.22);
    }
    if (valueRange >= 90000 && valueRange <= 99999) {
        img.src = "https://uploads-ssl.webflow.com/6273d0f394159549d01b49ee/627a9b818fc5f85be21ce2f6_o.jpg";
        tl.fromTo(divImage, 1, {
            width: "0%"
        }, {
            width: "23vw"
        });

        const novoValueAntes80 = valueAntes80.setAttribute('value', 'R$ ' + 0);
        valueAntes80.innerHTML.value = novoValueAntes80;

        valueOpcao80.setAttribute('value', 0);

        const novoValueAntes60 = valueAntes60.setAttribute('value', 'R$ ' + 1500.00);
        valueAntes60.innerHTML.value = novoValueAntes60;

        valueOpcao60.setAttribute('value', 1500.00);

        const novoValueAntes50 = valueAntes50.setAttribute('value', 'R$ ' + 1800.00);
        valueAntes50.innerHTML.value = novoValueAntes50;

        valueOpcao50.setAttribute('value', 1800.00);

        const novoValueAntes36 = valueAntes36.setAttribute('value', 'R$ ' + 2500.00);
        valueAntes36.innerHTML.value = novoValueAntes36;

        valueOpcao36.setAttribute('value', 2500.00);
    }
    if (valueRange >= 100000 && valueRange <= 109999) {
        img.src = "https://uploads-ssl.webflow.com/6273d0f394159549d01b49ee/627a9b8158f34388e0d07665_p.jpg";
        tl.fromTo(divImage, 1, {
            width: "0%"
        }, {
            width: "23vw"
        });

        const novoValueAntes80 = valueAntes80.setAttribute('value', 'R$ ' + 0);
        valueAntes80.innerHTML.value = novoValueAntes80;

        valueOpcao80.setAttribute('value', 0);

        const novoValueAntes60 = valueAntes60.setAttribute('value', 'R$ ' + 1666.67);
        valueAntes60.innerHTML.value = novoValueAntes60;

        valueOpcao60.setAttribute('value', 1666.67);

        const novoValueAntes50 = valueAntes50.setAttribute('value', 'R$ ' + 2000.00);
        valueAntes50.innerHTML.value = novoValueAntes50;

        valueOpcao50.setAttribute('value', 2000.00);

        const novoValueAntes36 = valueAntes36.setAttribute('value', 'R$ ' + 2777.78);
        valueAntes36.innerHTML.value = novoValueAntes36;

        valueOpcao36.setAttribute('value', 2777.78);
    }
    if (valueRange >= 110000 && valueRange <= 119999) {
        img.src = "https://uploads-ssl.webflow.com/6273d0f394159549d01b49ee/627a9b81aeb2040869174651_q.jpg";
        tl.fromTo(divImage, 1, {
            width: "0%"
        }, {
            width: "23vw"
        });

        const novoValueAntes80 = valueAntes80.setAttribute('value', 'R$ ' + 0);
        valueAntes80.innerHTML.value = novoValueAntes80;

        valueOpcao80.setAttribute('value', 0);

        const novoValueAntes60 = valueAntes60.setAttribute('value', 'R$ ' + 1833.33);
        valueAntes60.innerHTML.value = novoValueAntes60;

        valueOpcao60.setAttribute('value', 1833.33);

        const novoValueAntes50 = valueAntes50.setAttribute('value', 'R$ ' + 2200.00);
        valueAntes50.innerHTML.value = novoValueAntes50;

        valueOpcao50.setAttribute('value', 2200.00);

        const novoValueAntes36 = valueAntes36.setAttribute('value', 'R$ ' + 3055.56);
        valueAntes36.innerHTML.value = novoValueAntes36;

        valueOpcao36.setAttribute('value', 3055.56);
    }
    if (valueRange >= 120000) {
        img.src = "https://uploads-ssl.webflow.com/6273d0f394159549d01b49ee/627a9b8111627c2215f03f89_r.jpg";
        tl.fromTo(divImage, 1, {
            width: "0%"
        }, {
            width: "23vw"
        });

        const novoValueAntes80 = valueAntes80.setAttribute('value', 'R$ ' + 0);
        valueAntes80.innerHTML.value = novoValueAntes80;

        valueOpcao80.setAttribute('value', 0);

        const novoValueAntes60 = valueAntes60.setAttribute('value', 'R$ ' + 2000.00);
        valueAntes60.innerHTML.value = novoValueAntes60;

        valueOpcao60.setAttribute('value', 2000.00);

        const novoValueAntes50 = valueAntes50.setAttribute('value', 'R$ ' + 2400.00);
        valueAntes50.innerHTML.value = novoValueAntes50;

        valueOpcao50.setAttribute('value', 2000.00);

        const novoValueAntes36 = valueAntes36.setAttribute('value', 'R$ ' + 3333.33);
        valueAntes36.innerHTML.value = novoValueAntes36;

        valueOpcao36.setAttribute('value', 3333.33);
    }
});

//Faz com que não seja permitido selecionar mais de um checkbox
$('.check').on('change', function () {
    $('.check').not(this).prop('checked', false);
});

//Ao enviar as informações, elas são guardadas em um json no localStorage
const handleFormSubmit = event => {
    event.preventDefault();

    const nome = document.getElementById("validationCustom01").value;
    const email = document.getElementById("validationCustom02").value;
    const whats = document.getElementById("validationCustom03").value;

    const valueRange = document.getElementById('sliderRange').value;

    const objeto = new Object();
    objeto.nome = nome;
    objeto.email = email;
    objeto.whats = whats;
    objeto.precoCarro = valueRange;

    $('input[type=checkbox]').map(function () {
        if ($(this).is(':checked')) {
            objeto.valor = $(this).val();
        }
    }).get();

    $('input[type=checkbox]').map(function () {
        if ($(this).is(':checked')) {
            objeto.parcelas = $(this).attr("name");
        }
    }).get();

    localStorage.setItem('simulador', JSON.stringify(objeto));
};

//Chama a função ao enviar as informações
const form1 = document.getElementsByClassName('form-data1')[0];
form1.addEventListener('submit', handleFormSubmit);

const form2 = document.getElementsByClassName('form-data2')[0];
form2.addEventListener('submit', handleFormSubmit);