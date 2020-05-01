/*
1 - Obter o num de tel de um user a partir de seu Id
2 - Obter o endereço do user pelo ID
*/


function obterUsuario(callback) {
	setTimeout(function () {
		return callback(null, {
			id: 1,
			nome: "Burk",
			dataNascimento: new Date(),
		});
	}, 100);
}

function obterTelefone(idUsuario, callback) {
	setTimeout(() => {
		return callback(null, {
			tel: '1817216161',
			ddd: 80,
		});
	}, 200);
}

function obterEndereco(idUsuario, callback) {
	setTimeout(function () {
		return callback(null, {
			rua: "Dos bobos",
			numero: 0,
		}, 300);
	});
}

 
obterUsuario(function resolverUsuario(error, user) {
	if (error) {
		console.log("deu ruim Usuario", error);
		return;
	}


	obterTelefone(user.id, function resolverTelefone(error1, tel) {
		if (error1) {
			console.log("deu ruim Telefone", error1);
			return;
		}

		obterEndereco(user.id, function resolverEndereco(error2, endereco) {
			if (error2) {
				console.log("deu ruim Endereço", error2);
				return;
			}

				console.log(`
					Nome:${ user.nome},
					Endereco:${endereco.rua}, ${endereco.numero}
					Telefone:(${tel.ddd})${tel.tel}
				`);
		});
	});
});