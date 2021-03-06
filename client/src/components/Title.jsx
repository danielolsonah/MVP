import React from 'react';

const Title = (props) => {
	return (
		<div id='title'>
			Dungeon Explorer
			{props.alive && !props.loggingIn && !props.inBattle &&
				<div id='saveButton' onClick={props.saveGame}>
					Save Game
				</div>
			}
			<div id='userName'>
				{props.user}
			</div>
		</div>
	)
}

export default Title;