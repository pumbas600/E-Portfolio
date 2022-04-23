import React, {useEffect, useState} from "react";
import Title from "../Utils/Title";
import LabelledInput from "../Utils/LabelledInput";
import InputField from "../Utils/InputField";
import {useForm, ValidationError} from "@formspree/react";

type SendingState = 'UNSENT' | 'SENDING' | 'SENT';

const ContactMe: React.FC = () => {

    const [formState, handleSubmit, reset] = useForm("xwkywegq");
    const [sendingState, setSendingState] = useState<SendingState>('UNSENT');

    useEffect(() => {
        if (formState.submitting) {
            setSendingState('SENDING');
        }
        else if (formState.succeeded) {
            setSendingState('SENT');
            setTimeout(() => reset(), 5000);
        }
        else setSendingState('UNSENT');
    }, [formState, reset])

    // const [state, setState] = useState<State>(EMPTY_STATE);
    //
    // function updateMessage(e: React.ChangeEvent<HTMLTextAreaElement>) {
    //     setState({ ...state, message: e.target.value });
    // }
    //
    // function updateEmail(e: React.ChangeEvent<HTMLInputElement>) {
    //     setState({ ...state, email: e.target.value, emailError: '' });
    // }
    //
    // function updateName(e: React.ChangeEvent<HTMLInputElement>) {
    //     setState({ ...state, name: e.target.value, nameError: '' });
    // }

    // function sendMessage() {
    //     var isValid = true;
    //     var errorState = { ...state };
    //
    //     if (state.name === '') {
    //         errorState = {...errorState, nameError: "This cannot be empty"};
    //         isValid = false;
    //     }
    //     if (state.email === '') {
    //         errorState = {...errorState, emailError: "This cannot be empty"};
    //         isValid = false;
    //     }
    //     else if (!state.email.match(EMAIL_REGEX)) {
    //         errorState = {...errorState, emailError: "You must enter a valid email"};
    //         isValid = false;
    //     }
    //
    //     if (isValid) {
    //         // Send email
    //         setState(EMPTY_STATE);
    //     }
    //     else setState(errorState);
    // }

    function renderSendButton(): JSX.Element {
        switch(sendingState) {
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
            case "SENT":
                return (
                    <>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-send-check-fill" viewBox="0 0 16 16">
                            <path
                                d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 1.59 2.498C8 14 8 13 8 12.5a4.5 4.5 0 0 1 5.026-4.47L15.964.686Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"/>
                            <path
                                d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686Z"/>
                        </svg>
                        <div className="ml-2">
                            Sent
                        </div>
                    </>
                );
        }
    }

    return (
        <div>
            <Title name="Contact Me"/>
            <div className="rounded-lg bg-gradient-to-r dark:from-gray-700 dark:to-slate-600 from-gray-800 to-slate-800
                            md:py-5 py-4 sm:px-10 px-5"
            >
                <form onSubmit={handleSubmit}>
                    <div className="mx-auto flex flex-col space-y-3 md:w-8/12 w-full text-sm text-gray-300">
                        <div className="flex md:flex-row flex-col md:space-x-3 md:space-y-0 space-y-3">
                            <LabelledInput label="Email" className="md:w-1/2 w-full">
                                <InputField
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder="example@gmail.com"
                                    required
                                />
                                <ValidationError
                                    prefix="Email"
                                    field="email"
                                    errors={formState.errors}
                                />
                            </LabelledInput>
                            <LabelledInput label="Name" className="md:w-1/2 w-full">
                                <InputField
                                    id="name"
                                    name="name"
                                    placeholder="Josh Jeffers"
                                    required
                                />
                                <ValidationError
                                    prefix="Name"
                                    field="name"
                                    errors={formState.errors}
                                />
                            </LabelledInput>
                        </div>
                        <LabelledInput label="Your Message">
                            <textarea
                                id="message"
                                name="message"
                                className="rounded-md h-32 border-2 border-gray-300 bg-transparent p-2 outline-none
                                           focus:border-teal-200 w-full"
                                placeholder="Hey there!"
                            />
                            <ValidationError
                                prefix="Message"
                                field="message"
                                errors={formState.errors}
                            />
                        </LabelledInput>
                        <div className="flex justify-end">
                            <button
                                className="flex flex-row items-center text-xl font-bold rounded-md py-1 px-8 text-gray-800
                                           bg-gradient-to-br from-teal-200 to-teal-300 transition-transform hover:scale-105"
                                type="submit"
                                disabled={formState.submitting}
                            >
                                {renderSendButton()}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ContactMe;