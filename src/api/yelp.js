import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.yelp.com/v3/businesses',
	headers: {
		Authorization: 'Bearer GFym_vRb73ZsePQeyuMUE98VjY1xHdGVo-J3GNxxgIF1AIHcgTQgfACzsxi0FWvOEcCSO9jvgcfAGMm6mWFVUQLMeHsc1n7yzrlc0FhqbYNIxCm-zXGzbDp2W2evYHYx',
	}
});