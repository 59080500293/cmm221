exports.index = function(req,res) {
	let content = {
		news: [
		{
				id: 1,
				url: '//image/img-1.jpg',
				titie:'news 1'
			},
			{
				id: 2,
				url: '//image/img-1.jpg',
				titie:'news 2'
			}
		]
	}
	res.json(content)
}