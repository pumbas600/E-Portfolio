import React, { useState } from "react";
import Title from "../Utils/Title";
import LabelledInput from "../Utils/LabelledInput";
import InputField from "../Utils/InputField";
import { CSSTransition } from "react-transition-group";

type SendingState = 'UNSENT' | 'SENDING' | 'SENT';

interface FormError {
    field?: string;
    code: string | null;
    message: string;
}

interface State {
    message: string;
    email: string;
    name: string;
    emailError: string;
    nameError: string;
    generalError: string;
    sendingState: SendingState;
}

const DEFAULT_STATE: State = {
    message: '',
    email: '',
    name: '',
    emailError: '',
    nameError: '',
    generalError: '',
    sendingState: 'UNSENT',
};

const EMAIL_REGEX = /^[a-zA-Z\d.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z\d-]+(?:\.[a-zA-Z\d-]+)*$/;

const ContactMe: React.FC = () => {

    const [showButton, setShowButton] = useState<boolean>(true);
    const [state, setState] = useState<State>(DEFAULT_STATE);

    function updateMessage(e: React.ChangeEvent<HTMLTextAreaElement>) {
        setState({ ...state, message: e.target.value, generalError: '' });
    }

    function updateEmail(e: React.ChangeEvent<HTMLInputElement>) {
        setState({ ...state, email: e.target.value, emailError: '', generalError: '' });
    }

    function updateName(e: React.ChangeEvent<HTMLInputElement>) {
        setState({ ...state, name: e.target.value, nameError: '', generalError: '' });
    }

    function validateInputs(): boolean {
        let nameError = '';
        let emailError = '';

        if (state.name === '') {
            nameError = 'This cannot be empty';
        }
        if (state.email === '') {
            emailError = 'This cannot be empty';
        }
        else if (!state.email.match(EMAIL_REGEX)) {
            emailError = 'You must enter a valid email';
        }

        if (nameError || emailError) {
            setState({ ...state, nameError: nameError, emailError: emailError });
            return false;
        }
        return true;
    }

    // function testSendingEmailStates() {
    //     setState(state => {
    //         return { ...state, sendingState: 'SENDING' };
    //     });
    //     setTimeout(() => setState({ ...DEFAULT_STATE, sendingState: 'SENT' }), 1000);
    //     setTimeout(() => setState(state => {
    //         return { ...state, sendingState: 'UNSENT' }
    //     }), 4000);
    // }

    async function sendEmail(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!validateInputs())
            return;

        // testSendingEmailStates()
        // return;

        const data = new FormData();
        data.append("email", state.email);
        data.append("name", state.name);
        data.append("message", state.message);

        setState({ ...state, sendingState: 'SENDING' });

        try {
            const response = await fetch('https://formspree.io/f/xwkywegq', {
                method: 'POST',
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setState({ ...DEFAULT_STATE, sendingState: "SENT" });
                setTimeout(() => {
                    setState(state => { return { ...state, sendingState: 'UNSENT' } });
                }, 2000);
            } else {
                const formResponse: { errors?: FormError[] } = await response.json();
                // Allows you to set the errors using newState[field] without it complaining
                let newState = { ...state } as any;

                if (formResponse.errors) {
                    formResponse["errors"]?.filter(error => error.field)
                        .forEach(error => {
                            newState[error.field!] = error.message;
                        });
                }
                setState({ ...newState, sendingState: 'UNSENT' });
            }
        } catch (e) {
            console.log(e);
            setState({
                ...state,
                sendingState: 'UNSENT',
                generalError: 'Something went wrong trying to send the message'
            });
        }
    }

    function renderSendText(): JSX.Element {
        switch(state.sendingState) {
            case 'UNSENT':
                return (
                    <>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-send mt-1" viewBox="0 0 16 16">
                            <path
                                d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
                        </svg>
                        <div className="ml-2">
                            Send
                        </div>
                    </>
                );
            case 'SENDING':
                return (
                    <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg"
                             fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                    strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor"
                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <div className="ml-2">
                            Sending
                        </div>
                    </>
                );
            default: // Should theoretically never be called
                return <>How did you get here!?</>
        }
    }

    function renderSubmitButton(): JSX.Element {
        return (
            <>
                {showButton &&
                    <div className="flex justify-end">
                        <button
                            className="flex flex-row items-center text-xl font-bold rounded-md py-1 px-8 text-gray-800
                                       bg-gradient-to-br from-teal-200 to-teal-300 transition-transform hover:scale-105"
                            type="submit"
                            disabled={state.sendingState !== 'UNSENT'}
                        >
                            {renderSendText()}
                        </button>
                    </div>
                }
                <CSSTransition
                    in={state.sendingState === 'SENT'}
                    timeout={300}
                    classNames="sent-animation"
                    unmountOnExit
                    onEnter={() => setShowButton(false)}
                    onExited={() => setShowButton(true)}
                >
                    <div className="w-full text-gray-800 py-5 px-10 rounded-md bg-gradient-to-br from-teal-200 to-teal-300">
                        <div className="text-2xl font-bold flex flex-row items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-send-check-fill" viewBox="0 0 16 16">
                                <path
                                    d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 1.59 2.498C8 14 8 13 8 12.5a4.5 4.5 0 0 1 5.026-4.47L15.964.686Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"/>
                                <path
                                    d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686Z"/>
                            </svg>
                            <div className="ml-2">
                                Sent!
                            </div>
                        </div>
                        <div className="text-lg">
                            Thank you for your message! :)
                        </div>
                    </div>
                </CSSTransition>
            </>
        )
    }

    return (
        <div>
            <Title name="Contact Me"/>
            <div className="rounded-lg bg-gradient-to-r dark:from-gray-700 dark:to-slate-600 from-gray-800 to-slate-800
                            md:py-5 py-4 sm:px-10 px-5"
            >
                <form onSubmit={sendEmail}>
                    <div className="mx-auto flex flex-col space-y-3 md:w-8/12 w-full text-sm text-gray-300">
                        <div className="flex md:flex-row flex-col md:space-x-3 md:space-y-0 space-y-3">
                            <LabelledInput label="Email" className="md:w-1/2 w-full">
                                <InputField
                                    name="email"
                                    placeholder="example@gmail.com"
                                    value={state.email}
                                    onChange={updateEmail}
                                    hasError={state.emailError !== ''}
                                    error={state.emailError}
                                />
                            </LabelledInput>
                            <LabelledInput label="Name" className="md:w-1/2 w-full">
                                <InputField
                                    name="name"
                                    placeholder="Josh Jeffers"
                                    value={state.name}
                                    onChange={updateName}
                                    hasError={state.nameError !== ''}
                                    error={state.nameError}
                                />
                            </LabelledInput>
                        </div>
                        <LabelledInput label="Your Message">
                            <textarea
                                name="message"
                                className="rounded-md h-32 border-2 border-gray-300 bg-transparent p-2 outline-none
                                           focus:border-teal-200 w-full"
                                placeholder="Hey there!"
                                onChange={updateMessage}
                                value={state.message}
                            />
                            {state.generalError.length !== 0 && <div className="text-base text-red-500">
                                {state.generalError}
                            </div>}
                        </LabelledInput>
                        {renderSubmitButton()}
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ContactMe;