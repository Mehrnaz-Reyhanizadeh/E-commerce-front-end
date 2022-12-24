import React, { useState, createContext, useEffect } from "react";

import { getMe } from "../services/api";

export const ContextUser = createContext();

function ContextUserProvider(props) {
  const [user, setUser] = useState(false);
  const [isAdmin, setIsAdmin] = useState("false");
  const [userData, setUserData] = useState({});
  const token = sessionStorage.getItem("token");
  useEffect(() => {
    setUser(!!sessionStorage.getItem("token"));
    setIsAdmin(sessionStorage.getItem("isadmin"));
  }, [user, isAdmin, setUser]);
  useEffect(() => {
    if (token) {
      const fetchApi = async () => {
        setUserData(await getMe(token));
      };
      fetchApi();
    } else {
      setUserData({});
    }
  }, [setUserData, token]);

  return (
    <ContextUser.Provider
      value={{ user, setUser, isAdmin, setIsAdmin, userData }}
    >
      {props.children}
    </ContextUser.Provider>
  );
}

export default ContextUserProvider;
