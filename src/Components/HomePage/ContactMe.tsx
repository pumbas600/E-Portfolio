import React, {useState} from "react";
import Title from "../Utils/Title";

interface State {
    message: string;
}

const ContactMe: React.FC = () => {

    const [state, setState] = useState<State>({ message: '' });

    function updateMessage() {

    }

    return (
        <div>
            <Title name="Contact Me"/>
            <div className="rounded-lg bg-gradient-to-r dark:from-gray-700 dark:to-slate-600 from-gray-800 to-slate-800 md:py-5 py-4 md:px-8 px-5">
                <div className="mx-auto grid grid-cols-1 gap-1 w-1/2">
                    <textarea value={state.message} className="rounded-lg h-24" />
                    <button className="text-xl font-bold rounded-lg py-1 w-full text-gray-800 bg-teal-200 hover:bg-teal-300">
                        Send
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ContactMe;