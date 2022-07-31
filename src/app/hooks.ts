import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'
import type {RootState, Dispatch} from './store'

export const useAppDispatch: () => Dispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

// définir les hooks pour pls raisons :
// Pour useSelector, cela vous évite d'avoir à taper à (state: RootState)chaque fois