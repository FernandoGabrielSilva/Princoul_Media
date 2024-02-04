function share (){
	if (navigator.share !== undefined) {
		navigator.share({
			title: 'Princou Media',
			url: 'https://princoulmedia.vercel.app/',
			image: 'https://princoulmedia.vercel.app/img/link_icon.jpg',
			description: 'Contato & Serviços para você.'
		})
	}
}