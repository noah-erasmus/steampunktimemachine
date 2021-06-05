import React, { useContext, useState, useEffect } from'react';

const StageContext = React.createContext();

export const StageProvider = ({children}) => {
    const [stageState, setStageState] = useState("start");

    useEffect(() => {
    }, [stageState])

    return(
        <StageContext.Provider value={{stageState, setStageState}}>
            {children}
        </StageContext.Provider>
    )
}

export const StageConsumer = StageContext.Consumer;

export const useStage = () => useContext(StageContext);