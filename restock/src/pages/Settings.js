import { Popover, Transition } from "@headlessui/react";
import React, { Fragment, useEffect, useState } from "react";
import SalesProduct from "../components/SalesProduct";
import { changeNameStart } from "../redux/User/user.actions";
import { useDispatch, useSelector } from "react-redux";
import { isUser } from "../hooks/useUserAuth";
import { Link } from "react-router-dom";
import firebaseInstance from "../services/firebase";
import ReactRanger from 'react-ranger'
import styles from '../components/mapStyles'
import { Slider } from "@mui/material";
import Box from '@mui/material/Box';


const mapState = ({ user }) => ({
  changeNameSuccess: user.changeNameSuccess,
  userErr: user.userErr,
});

const mapStateCurr = (state) => ({
  currentUser: state.user.currentUser,
});



function Settings() {
  const [newName, setNewName] = useState("");
  const dispatch = useDispatch();
  const [errors, setErrors] = useState([]);
  const { changeNameSuccess, userErr } = useSelector(mapState);

  useEffect(() => {
    if (Array.isArray(userErr) && userErr.length > 0) {
      setErrors(userErr);
    }
  }, [userErr]);


  function changeName(e) {
    e.preventDefault();
    dispatch(changeNameStart(newName));
  }

  const { currentUser } = useSelector(mapStateCurr);

  const [mapsetting, setMapsetting] = useState([]);

  function changeMapSetting(e) {
    currentUser.mapsetting =
      dispatch(changeNameStart(newName));
  }
  useEffect(() => {
    let data = firebaseInstance.getMapsetting();
    data.then((res) => {
      setMapsetting(res);
    });
  }, [currentUser]);

  let max = styles.length;

  function setlabel(value) {
    return `${value}`
  }





  return (
    <div>
      <div className="w-full h-full px-24">
        <h1 className="font-black  text-3xl">Settings:</h1>
        {errors.length > 0 && (
          <ul className="w-72 py-4 text-sm text-red-500">
            {errors.map((err, index) => {
              return <li key={index}>{err}</li>;
            })}
          </ul>
        )}
        <div className="pt-4 ">Change account name:</div>
        <div className="py-4 w-1/2">
          <input
            onChange={(e) => setNewName(e.target.value)}
            value={newName}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            name="name"
            type="text"
            placeholder="John"
          />
        </div>
        <button
          onClick={changeName}
          className="transition  hover:bg-green-400 border-black border rounded  my-2 px-8 py-1.5 font-semibold"
        >
          Save
        </button>
      </div>
      <div className="w-full h-full px-24">
        {currentUser && isUser(currentUser) && (
          <div>
            <ul className="space-y-4 py-4 font-semibold">
              <li>
                <Link
                  to={"/map"}
                  className="inline-flex hover:text-white transition">

                  <p className="underline-animation cursor-pointer">Map</p>
                </Link>
              </li>
            </ul>
            <div className="pt-4 ">Set your map settings :</div>
          </div>

        )}


        <div className="py-4 w-1/2">
          <Box sx={{ width: 300 }}>
            <Slider
              aria-label="Always visible"
              defaultValue={mapsetting}
              getAriaValueText={setlabel}
              step={1}
              valueLabelDisplay="on"
              marks
              min={0}
              max={max}
            />
          </Box>
        </div>

      </div>
      <div>

      </div>
    </div>
  );
}

export default Settings;
