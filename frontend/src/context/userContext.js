import { createContext, useReducer, useEffect } from 'react';

export const UserContext = createContext();

const userReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload,
      };

    case 'SET_USER_DATA':
      return {
        ...state,
        userData: action.payload,
      };

    default:
      return state;
  }
};

export const UserContxetProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, {
    user: null,
    userData: null,
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    dispatch({ type: 'LOGIN', payload: user });

    const fetchData = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URI}/api/users/${user?.id}`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      const json = await response.json();

      if (response.ok) {
        dispatch({ type: 'SET_USER_DATA', payload: json });
      }
    };

    if (user) {
      fetchData();
    }
  }, []);

  return (
    <UserContext.Provider value={{ ...state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
