import { createContext, useState } from "react";

export const ProfileAddUpdateStatus = createContext();

export const FeedBackStatus = createContext();

function ContextProvider({ children }) {
    const [profileUpdateStatus, setProfileUpdateStatus] = useState(false);
    const [feedBackUpdateStatus, setFeedBackUpdateStatus] = useState(false);

    return (
        <FeedBackStatus.Provider value={{ feedBackUpdateStatus, setFeedBackUpdateStatus }}>
        <ProfileAddUpdateStatus.Provider value={{ profileUpdateStatus, setProfileUpdateStatus }}>
            {children}
        </ProfileAddUpdateStatus.Provider>
        </FeedBackStatus.Provider>
    );
}

export default ContextProvider;
