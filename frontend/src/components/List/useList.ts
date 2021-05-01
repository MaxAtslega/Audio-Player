import Audio from "@models/Audio";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadAudiosAction } from "../../actions/user.actions";
import { getAudios } from "../../selectors/user.selectors";

export default function useList(): Audio[] {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAudiosAction());
  }, [dispatch]);

  return useSelector(getAudios);
}