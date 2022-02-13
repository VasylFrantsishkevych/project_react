import {AppDispatch, RootState} from "../store";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

const useAddDispatch = () => useDispatch<AppDispatch>();
const useAddSelector:TypedUseSelectorHook<RootState> = useSelector;

export {
    useAddDispatch,
    useAddSelector
}