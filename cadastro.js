function validar(aux) {
	aux.value = aux.value.replace(/[^\d]+/g,'');
	document.getElementById(aux.name).value = aux.value;
}
		
function salvar(cnpj, razao, nome, cpf, endereco, bairro, cep, complemento, cidade, estado){
	alert(cnpj.name+": "+cnpj.value +"\n"+
			razao.name+": "+razao.value +"\n"+
			nome.name+": "+nome.value +"\n"+
			cpf.name+": "+cpf.value +"\n"+
			endereco.name+": "+endereco.value +"\n"+
			bairro.name+": "+bairro.value +"\n"+
			cep.name+": "+cep.value +"\n"+
			complemento.name+": "+complemento.value +"\n"+
			cidade.name+": "+cidade.value +"\n"+
			estado.name+": "+estado.value +"\n"+
			"Dados \"salvos\" com sucesso!");
		
}		