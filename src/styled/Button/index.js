import React from 'react'
import styled from '@emotion/styled'

const ButtonPrimary = props => {
	const Button = styled('button')`
		font-family: inherit;
		display: flex;
		justify-content: center;
		background-color: #FFF;
		border: 2px solid #E82E9D;
		min-width: 150px;
		color #000;
		padding: 5px 15px;
		text-align: center;
		text-decoration: none;
		font-size: 11px;
		margin: 8px 8px 0 0;
		line-height: 1.55;
		cursor: pointer;
		text-transform: uppercase;	
		`
	return(
		<Button>
			{props.children}
		</Button>
	)	
}

export default ButtonPrimary   
