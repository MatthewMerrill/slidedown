// note: lists are stored by FireBase as maps with hashkeys
{
	'users' : {
		'user0': {
			'username': 'mattmerr',
			'robins' : ['robin0']
		},
		'user1': {
			'username': 'vroom',
			'robins': []
		}
	},
	'groups': {
		'group0': {
			'name': 'databois',
			'members': ['user1'],
			'robins': 'robin0',
		}
	},
	'robins': {
		'robin0': {
			'canview': [
				'group0'
			],
			'canedit': {
				'user0'
			}
		}
	}
}