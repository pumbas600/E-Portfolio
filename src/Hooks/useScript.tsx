import { useEffect } from "react";

interface ScriptAttributes {
    src: string;
    async?: boolean;
    crossOrigin?: string;
    type?: string;
}

const useScript = (attributes: ScriptAttributes): void => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src= attributes.src;
        script.async = attributes.async ?? true;    
        script.crossOrigin = attributes.crossOrigin ?? null;
        if (attributes.type) {
            script.type = attributes.type;
        }

        document.body.appendChild(script);

        return () => {
            // Clean up - if the UI is rerendered, it needs to be able to remove the old ui
            document.body.removeChild(script);
        }
    // Depends on the url - Only called if the url is passed
    }, [attributes]);
};

export default useScript;