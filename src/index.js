

import React from "react";
import { render } from "react-dom"
import "semantic-ui-css/semantic.min.css";
import Gamecard from "./components/GameCard"

const games = [
	{
		price:"32.99",
		thumbnail:"https://img.depor.com/files/listing_ec_flujo_xx/uploads/2018/10/26/5bd3e730ed55d.jpeg",
		name:"resident evil 2 remake",
		players:"2-4",
		duration:'60'
	},
	{
		price:"300.99",
		thumbnail:"https://images-na.ssl-images-amazon.com/images/I/91BpIH3u1YL._SX569_.jpg",
		name:"God of War",
		players:"1",
		duration:'1200'
 	}
 ];

	

render(<Gamecard game={games[1]}/>, document.getElementById("root"));