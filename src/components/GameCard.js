import React from "react"

const Gamecard = ({game}) => (
	<div class="ui card">
		<div class="image">
			<span class="ui green ribbon label">{game.price}</span>
			<img src={game.thumbnail}
			 alt="resident evil"
			 />
		</div>
		<div class="content">
			<a href="#" class="header">{game.name}</a>
			<div class="meta">
				<i class="icon users" />{game.players}&nbsp;
				<i class="icon wait" />{game.duration} min.
			</div>
		</div>
	</div>	
);






	
export default Gamecard;

