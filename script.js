function back() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}

function bhaskara() {
    var term_a = parseInt(document.getElementById("term_a").value)
    if(isNaN(term_a)){
        alert("Valor invalido, digite todos os termos")
    }
    var term_b = parseInt(document.getElementById("term_b").value)
    if(isNaN(term_b)){
        alert("Valor invalido, digite todos os termos")
    }
    var delt = parseInt(document.getElementById("delt").value)
    if(isNaN(delt)){
        alert("Valor invalido, digite todos os termos")
    }
    op1_b = delt ** 0.5
    op2_b = term_a * 2
    op3_b = term_b * -1
    op1_base = op3_b + op1_b
    op2_base = op3_b - op1_b
    op3_base = op1_base / op2_b
    op4_base = op2_base / op2_b
    var X_1 = op3_base
    var X_2 = op4_base 
    document.getElementById("valor_f").innerText = "X¹ = " + X_1
    document.getElementById("valor_f2").innerText = "X² = " + X_2
} 


function delta() {
    var delt_term_a = parseInt(document.getElementById("delt_term_a").value)
    if(isNaN(delt_term_a)){
        alert("Valor invalido, digite todos os termos")
    }
    var delt_term_b = parseInt(document.getElementById("delt_term_b").value)
    if(isNaN(delt_term_b)){
        alert("Valor invalido, digite todos os termos")
    }
    var delt_term_c = parseInt(document.getElementById("delt_term_c").value)
    if(isNaN(delt_term_c)){
        alert("Valor invalido, digite todos os termos")
    }
    op1 = delt_term_b ** 2
    op2 = delt_term_a * delt_term_c
    op2 = op2 * 4
    op3 = op2 - op1
    op4 = op3 * -1
    document.getElementById("valor_delt").innerText = "Δ = " + op4
}