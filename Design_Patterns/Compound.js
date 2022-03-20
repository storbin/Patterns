const FlyOutContext = createContext()

function FlyOut(props) {
	const [open, toggle] = useState(false)

	return <FlyOutContext.Provider value={{ open, toggle }}>{props.children}</FlyOutContext.Provider>
}

function Toggle() {
	const { open, toggle } = useContext(FlyOutContext)

	return (
		<div onClick={() => toggle(!open)}>
			<Icon />
		</div>
	)
}

function List({ children }) {
	const { open } = useContext(FlyOutContext)
	return open && <ul>{children}</ul>
}

function Item({ children }) {
	return <li>{children}</li>
}

FlyOut.Toggle = Toggle
FlyOut.List = List
FlyOut.Item = Item

/////////////////////////////////////////////////

import React from 'react'
import { FlyOut } from './FlyOut'

export default function FlyoutMenu() {
	return (
		<FlyOut>
			<FlyOut.Toggle />
			<FlyOut.List>
				<FlyOut.Item>Edit</FlyOut.Item>
				<FlyOut.Item>Delete</FlyOut.Item>
			</FlyOut.List>
		</FlyOut>
	)
}

/////////////////////////////////////////////////

import React from 'react'
import Icon from './Icon'

const FlyOutContext = React.createContext()

export function FlyOut(props) {
	const [open, toggle] = React.useState(false)

	return <div>{React.Children.map(props.children, (child) => React.cloneElement(child, { open, toggle }))}</div>
}

function Toggle() {
	const { open, toggle } = React.useContext(FlyOutContext)

	return (
		<div className="flyout-btn" onClick={() => toggle(!open)}>
			<Icon />
		</div>
	)
}

function List({ children }) {
	const { open } = React.useContext(FlyOutContext)
	return open && <ul className="flyout-list">{children}</ul>
}

function Item({ children }) {
	return <li className="flyout-item">{children}</li>
}

FlyOut.Toggle = Toggle
FlyOut.List = List
FlyOut.Item = Item
