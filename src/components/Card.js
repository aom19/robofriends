import React from 'react';

const Card = ({name , email,id }) => {
	
	return (

		<div className="tc bg-light-green dib brd3 ma2 grow bw2 shadow-4">
			<img alt="robots" src={`https://robohash.org/${id}?400x100`} />
			<div>
				<h2> {name} </h2>
				<p> {email} </p>
			</div>
		</div>
		);
}

export default Card;