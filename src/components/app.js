import React from 'react';
import GamesList from "./GamesList";

const games = [
	{
		_id:1,
		price:"32.99",
		thumbnail:"https://img.depor.com/files/listing_ec_flujo_xx/uploads/2018/10/26/5bd3e730ed55d.jpeg",
		name:"resident evil 2 remake",
		players:"2-4",
		duration:'60'
	},
	{
		_id:2,
		price:"300.99",
		thumbnail:"https://images-na.ssl-images-amazon.com/images/I/91BpIH3u1YL._SX569_.jpg",
		name:"God of War",
		players:"1",
		duration:'1200'
 	}
 ];
 
const App = () => (
	<div className="ui container">
		<GamesList games={games} />
	</div>
);

export default App;