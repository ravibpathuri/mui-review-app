import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the user settings type
interface IUserSettings {
  theme: string;
}
// Define the context type
interface UserSettingsContextProps {
  userSettings: IUserSettings;
  setUserSettings: React.Dispatch<React.SetStateAction<IUserSettings>>;
}

const UserSettingsContext = createContext<UserSettingsContextProps | undefined>(
  undefined
);

// Create a custom hook for accessing the UserSettingsContext
const useUserSettingsContext = () => {
  const context = useContext(UserSettingsContext);
  if (!context) {
    throw new Error(
      "useUserSettingsContext must be used within a UserSettingsContextProvider"
    );
  }
  return context;
};

interface UserSettingsContextProviderProps extends React.PropsWithChildren {}

const defaultSettings: IUserSettings = {
  theme: "light",
};

const UserSettingsContextProvider: React.FC<
  UserSettingsContextProviderProps
> = ({ children }) => {
  // State to manage the user settings
  const [userSettings, setUserSettings] =
    useState<IUserSettings>(defaultSettings);

  // Context value to be provided
  const contextValue: UserSettingsContextProps = {
    userSettings,
    setUserSettings,
  };

  return (
    <UserSettingsContext.Provider value={contextValue}>
      {children}
    </UserSettingsContext.Provider>
  );
};

export { useUserSettingsContext, UserSettingsContextProvider };
