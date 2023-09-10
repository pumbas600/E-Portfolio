'use client';

import LabelledInput from '../../Forms/LabelledInput';
import InputField from '../../Forms/InputField';
import Title from '../../Title';
import Card from '../../Card';

import { faCircleNotch, faEnvelopeCircleCheck, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CSSTransition } from 'react-transition-group';
import { useState } from 'react';

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
const SEND_BUTTON_STYLE = `rounded-md bg-gradient-to-br dark:from-teal-200 dark:to-teal-300 from-sky-500 to-blue-500
                           dark:text-gray-800 text-gray-200`;

export default function ContactMe() {
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
		} else if (!state.email.match(EMAIL_REGEX)) {
			emailError = 'You must enter a valid email';
		}

		if (nameError || emailError) {
			setState({ ...state, nameError: nameError, emailError: emailError });
			return false;
		}
		return true;
	}

	async function sendEmail(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		if (!validateInputs()) return;

		const data = new FormData();
		data.append('email', state.email);
		data.append('name', state.name);
		data.append('message', state.message);

		setState({ ...state, sendingState: 'SENDING' });

		try {
			const response = await fetch('https://formspree.io/f/xwkywegq', {
				method: 'POST',
				body: data,
				headers: {
					Accept: 'application/json',
				},
			});

			if (response.ok) {
				setState({ ...DEFAULT_STATE, sendingState: 'SENT' });
				setTimeout(() => {
					setState((state) => ({ ...state, sendingState: 'UNSENT' }));
				}, 2000);
			} else {
				const formResponse: { errors?: FormError[] } = await response.json();
				// Allows you to set the errors using newState[field] without it complaining
				let newState = { ...state } as any;

				if (formResponse.errors) {
					formResponse['errors']
						?.filter((error) => error.field)
						.forEach((error) => {
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
				generalError: 'Something went wrong trying to send the message',
			});
		}
	}

	function renderSendText(): JSX.Element {
		switch (state.sendingState) {
			case 'UNSENT':
				return (
					<>
						<FontAwesomeIcon icon={faPaperPlane} />
						<div className="ml-2">Send</div>
					</>
				);
			case 'SENDING':
				return (
					<>
						<FontAwesomeIcon icon={faCircleNotch} spin />
						<div className="ml-2">Sending</div>
					</>
				);
			default: // Should theoretically never be called
				return <>How did you get here!?</>;
		}
	}

	function renderSubmitButton(): JSX.Element {
		return (
			<>
				{showButton && (
					<div className="flex justify-end md:col-span-2 col-span-1">
						<button
							className={`flex flex-row items-center text-xl font-bold py-1 px-8 transition-transform
                          hover:scale-105 ${SEND_BUTTON_STYLE}`}
							type="submit"
							disabled={state.sendingState !== 'UNSENT'}
						>
							{renderSendText()}
						</button>
					</div>
				)}
				<CSSTransition
					in={state.sendingState === 'SENT'}
					timeout={300}
					classNames="sent-animation"
					unmountOnExit
					onEnter={() => setShowButton(false)}
					onExited={() => setShowButton(true)}
				>
					<div className={`w-full py-5 px-10 md:col-span-2 col-span-1 ${SEND_BUTTON_STYLE}`}>
						<div className="text-2xl font-bold flex flex-row items-center">
							<FontAwesomeIcon icon={faEnvelopeCircleCheck} />
							<div className="ml-2">Sent!</div>
						</div>
						<div className="text-lg">Thank you for your message! :)</div>
					</div>
				</CSSTransition>
			</>
		);
	}

	return (
		<section>
			<Title name="Contact Me" />
			<Card className="sm:px-10">
				<form onSubmit={sendEmail}>
					<div className="grid md:grid-cols-2 grid-cols-1 gap-3 mx-auto md:w-8/12 w-full text-sm dark:text-gray-300 text-gray-800">
						<LabelledInput label="Email">
							<InputField
								name="email"
								placeholder="your.email@gmail.com"
								value={state.email}
								onChange={updateEmail}
								error={state.emailError}
							/>
						</LabelledInput>
						<LabelledInput label="Name">
							<InputField
								name="name"
								placeholder="Your name"
								value={state.name}
								onChange={updateName}
								error={state.nameError}
							/>
						</LabelledInput>
						<LabelledInput label="Your Message" className="md:col-span-2 col-span-1">
							<textarea
								name="message"
								className="rounded-md min-h-[8rem] border-2 dark:border-gray-300 border-gray-800 bg-transparent p-2 outline-none
                           dark:focus:border-teal-200 focus:border-sky-500 w-full"
								placeholder="Hey there!"
								onChange={updateMessage}
								value={state.message}
							/>
							{state.generalError.length !== 0 && (
								<div className="text-base text-red-500">{state.generalError}</div>
							)}
						</LabelledInput>
						{renderSubmitButton()}
					</div>
				</form>
			</Card>
		</section>
	);
}
