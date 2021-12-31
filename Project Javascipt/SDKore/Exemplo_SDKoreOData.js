/*

	Exemplo Retrieve
	
*/
	var valorGuid = Xrm.Page.getAttribute("new_atributo_guid").getValue()[0].id;
	SDKore.OData.configurarParametros("$select=new_atributo2");
	var resultado = SDKore.OData.Retrieve(valorGuid, "new_Entidade");
/*

	Exemplo Retrive com CallBack Sucesso
	
*/
	var valorGuid = Xrm.Page.getAttribute("new_atributo_guid").getValue()[0].id;
	SDKore.OData.configurarParametros("$select=nome,sobrenome,nomeCompleto");
	var FuncaoSucesso = function(data){
		var resposta = data.d;
		resposta.nomeCompleto = resposta.nome + resposta.Sobrenome
		alert(resposta.nomeCompleto);
	};
	var resultado = SDKore.OData.Retrieve(valorGuid, "new_Entidade",FuncaoSucesso);
	
/*

	Exemplo Retrive com CallBack Erro
	
*/
	var valorGuid = Xrm.Page.getAttribute("new_atributo_guid").getValue()[0].id;
	var resultado;
	SDKore.OData.configurarParametros("$select=nome,sobrenome");
	var FuncaoErro = function(XmlHttpRequest, textStatus, errorThrown){
		console.log(textStatus);
		var valorGuid2 = Xrm.Page.getAttribute("new_atributo2_guid").getValue()[0].id;
		resultado = SDKore.OData.Retrieve(valorGuid2, "new_Entidade2");
	};
	resultado = SDKore.OData.Retrieve(valorGuid, "new_Entidade",null,FuncaoErro);
	
	alert(resultado.nome);
	
/*

	Exemplo RetrieveMultiple
	
*/

	SDKore.OData.configurarParametros("$expand=new_relacionamento1&$filter=relacionamento1/new_campo");
	var resultado = SDKore.OData.RetrieveMultiple("itbc_parmetrosGlobais");

/*

	Exemplo RetrieveMultiple Legado
	
*/
	//SDKore.OData.configurarParametros("$expand=new_relacionamento1&$filter=relacionamento1/new_campo");
	var resultado = SDKore.OData.RetrieveMultiple("itbc_parmetrosGlobais","relacionamento1/new_campo");
	
/*

	Exemplo Create
	
*/
	var account = {};
	account.Name = "Tridea By Alfapeople";
	account.PrimaryContactId = { Id: valorGuid, LogicalName: "account", Name: valorName };
	var resultado = SDKore.OData.Create(account,"account");
	
/*

	Exemplo Update
	
*/
	var account = {};
	account.Name = "Tridea By Alfapeople";
	account.PrimaryContactId = { Id: valorGuid, LogicalName: "account", Name: valorName };
	var resultado = SDKore.OData.Update(account,"ed1afd69-7021-42c3-a40a-bf5dc4fb6e4d");
	
/*

	Exemplo Delete
	
*/

	var resultado = SDKore.OData.Delete("ed1afd69-7021-42c3-a40a-bf5dc4fb6e4d","account");
		