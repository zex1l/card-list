import {useDispatch, useSelector, TypedUseSelectorHook} from 'react-redux'
import type { RootState, AppDispatch } from '../store/store'

// eslint-disable-next-line react-hooks/rules-of-hooks
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector