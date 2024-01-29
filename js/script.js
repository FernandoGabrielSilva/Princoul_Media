function share (){
	if (navigator.share !== undefined) {
		navigator.share({
			title: 'Impacto Media',
			url: ''
		})
	}
}