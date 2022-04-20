import React, {useState} from "react";
import Title from "../Utils/Title";

interface State {
    message: string;
}

const ContactMe: React.FC = () => {

    const [state, setState] = useState<State>({ message: '' });

    function updateMessage(e: React.ChangeEvent<HTMLTextAreaElement>) {
        setState({ message: e.target.value });
    }

    function sendMessage() {
        setState({ message: '' });
    }

    return (
        <div>
            <Title name="Contact Me"/>
            <div className="rounded-lg bg-gradient-to-r dark:from-gray-700 dark:to-slate-600 from-gray-800 to-slate-800
                            md:py-5 py-4 px-10"
            >
                <div className="mx-auto grid grid-cols-1 gap-1 md:w-8/12 w-full text-sm text-gray-300">
                    <textarea
                        className="rounded-lg h-32 ring-1 ring-gray-300 bg-transparent p-2 outline-none focus:ring-2
                                   focus:ring-teal-200 ring-inset"
                        onChange={updateMessage}
                        placeholder="Enter your message..."
                        value={state.message}
                    />
                    <button
                        className="text-xl font-bold rounded-lg py-1 w-full text-gray-800 bg-gradient-to-br
                                   from-teal-200 to-teal-300 hover:from-teal-100 hover:to-teal-200"
                        onClick={e => sendMessage()}
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ContactMe;