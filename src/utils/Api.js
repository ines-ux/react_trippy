import Config from '../Config';

class Api {
	getHome() {
		const url = `${Config.host}/api/home`;
		// le resultat de la requete , on le recupere avec le .then(res)
		// le premier .then va changer le  type du resultat de string on va arriver à l'objet
		// le deuxieeme .then on va trouver le resultat avec sa forme finale

		return fetch(url).then((res) => res.json()).then((resultat) => {
			return resultat.cities;
		});
	}
}

export default new Api();
