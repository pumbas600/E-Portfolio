import React, {useState} from "react";
import Title from "../Utils/Title";
import LabelledInput from "../Utils/LabelledInput";
import TextField from "../Utils/TextField";

type SendingState = 'SEND' | 'SENDING' | 'SENT';

interface State {
    message: string;
    email: string;
    name: string;
    emailError: string;
    nameError: string;
    //sendingState: SendingState;
}

const EMPTY_STATE = { message: '', email: '', name: '', emailError: '', nameError: '' };
const EMAIL_REGEX = /^[a-zA-Z\d.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z\d-]+(?:\.[a-zA-Z\d-]+)*$/;

const ContactMe: React.FC = () => {

    const [state, setState] = useState<State>(EMPTY_STATE);

    function updateMessage(e: React.ChangeEvent<HTMLTextAreaElement>) {
        setState({ ...state, message: e.target.value });
    }

    function updateEmail(e: React.ChangeEvent<HTMLInputElement>) {
        setState({ ...state, email: e.target.value, emailError: '' });
    }

    function updateName(e: React.ChangeEvent<HTMLInputElement>) {
        setState({ ...state, name: e.target.value, nameError: '' });
    }

    function sendMessage() {
        var isValid = true;
        var errorState = { ...state };

        if (state.name === '') {
            errorState = {...errorState, nameError: "This cannot be empty"};
            isValid = false;
        }
        if (state.email === '') {
            errorState = {...errorState, emailError: "This cannot be empty"};
            isValid = false;
        }
        else if (!state.email.match(EMAIL_REGEX)) {
            errorState = {...errorState, emailError: "You must enter a valid email"};
            isValid = false;
        }

        if (isValid) {
            // Send email
            setState(EMPTY_STATE);
        }
        else setState(errorState);
    }

    return (
        <div>
            <Title name="Contact Me"/>
            <div className="rounded-lg bg-gradient-to-r dark:from-gray-700 dark:to-slate-600 from-gray-800 to-slate-800
                            md:py-5 py-4 sm:px-10 px-5"
            >
                <div className="mx-auto flex flex-col space-y-3 md:w-8/12 w-full text-sm text-gray-300">
                    <div className="flex md:flex-row flex-col md:space-x-3 md:space-y-0 space-y-3">
                        <LabelledInput label="Email" className="md:w-1/2 w-full">
                            <TextField
                                error={state.emailError}
                                placeholder="example@gmail.com"
                                onChange={updateEmail}
                                value={state.email}
                            />
                        </LabelledInput>
                        <LabelledInput label="Name" className="md:w-1/2 w-full">
                            <TextField
                                error={state.nameError}
                                placeholder="Josh Jeffers"
                                onChange={updateName}
                                value={state.name}
                            />
                        </LabelledInput>
                    </div>
                    <LabelledInput label="Your Message">
                        <textarea
                            className="rounded-md h-32 border-2 border-gray-300 bg-transparent p-2 outline-none
                                       focus:border-teal-200 w-full"
                            placeholder="Hey there!"
                            onChange={updateMessage}
                            value={state.message}
                        />
                    </LabelledInput>
                    <div className="flex justify-end">
                        <button
                            className="flex flex-row items-center text-xl font-bold rounded-md py-1 px-8 text-gray-800
                                       bg-gradient-to-br from-teal-200 to-teal-300 transition-transform hover:scale-105"
                            type="submit"
                            onClick={e => sendMessage()}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-send mt-1" viewBox="0 0 16 16">
                                <path
                                    d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
                            </svg>
                            <div className="ml-2">
                                Send
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactMe;