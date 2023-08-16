import React, { FC } from 'react'
import { Gopage, IGetUserInfo, Theme } from '@helper/types'

interface SharedState {
	theme: Theme
	animation: boolean
	component: { current: Gopage }
	windowWidth: number
	dataAPI: IGetUserInfo
	setTheme?: (value: Theme) => void
	setAnimation?: (value: boolean) => void
	setComponent?: (value: { current: Gopage }) => void
	setWindowWidth?: (value: number) => void

	setDataAPI?: (value: any) => void
}

const defaultState: SharedState = {
	theme: 'dark',
	animation: false,
	component: { current: 'educations' },
	windowWidth: 0,
	dataAPI: null
}

const AppContext = React.createContext<SharedState>(defaultState)

export const ContextWrapper: FC = ({ children }) => {
	const [theme, setTheme] = React.useState<Theme>(defaultState.theme)
	const [animation, setAnimation] = React.useState<boolean>(defaultState.animation)
	const [component, setComponent] = React.useState<{ current: Gopage }>(defaultState.component)
	const [windowWidth, setWindowWidth] = React.useState<number>(defaultState.windowWidth)
	const [dataAPI, setDataAPI] = React.useState<any>(defaultState.dataAPI)

	const sharedState: SharedState = { theme, setTheme, animation, setAnimation, component, setComponent, windowWidth, setWindowWidth, dataAPI, setDataAPI }

	return (
		<AppContext.Provider value={sharedState}>
			{children}
		</AppContext.Provider>
	)
}



export const useAppContext = () => React.useContext<SharedState>(AppContext)
