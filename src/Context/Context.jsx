import { createContext, useState } from "react";

export const ProfileAddUpdateStatus = createContext();

function ContextProvider({ children }) {
    const [profileUpdateStatus, setProfileUpdateStatus] = useState(false);

    return (
        <ProfileAddUpdateStatus.Provider value={{ profileUpdateStatus, setProfileUpdateStatus }}>
            {children}
        </ProfileAddUpdateStatus.Provider>
    );
}

export default ContextProvider;
