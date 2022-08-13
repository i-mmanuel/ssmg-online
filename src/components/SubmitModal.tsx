import { Button, Checkbox, FileInput, Label, Modal, TextInput } from "flowbite-react";
import React from "react";
import "../../node_modules/flowbite/dist/datepicker.js";

interface SubmitModalProps {
	showModal: boolean;
	setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const SubmitModal = (props: SubmitModalProps) => {
	return (
		<Modal show={props.showModal} size={"2xl"} popup={true} onClose={() => props.setShowModal(false)}>
			<Modal.Header />
			<Modal.Body>
				<div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
					<h3 className="text-xl font-medium text-center text-gray-900 dark:text-white">Data Submission</h3>
					<div className="relative">
						<input
							type="date"
							id="floating_outlined"
							className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-blue-300 appearance-none dark:text-white dark:border-blue-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
							placeholder=" "
						/>
						<label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-800 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
							Date submitted
						</label>
					</div>

					<div className="relative">
						<input
							type="number"
							id="floating_outlined"
							className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-blue-300 appearance-none dark:text-white dark:border-blue-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
							placeholder=" "
						/>
						<label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-800 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
							Attendance number
						</label>
					</div>

					<div className="relative">
						<textarea
							id="floating_outlined"
							className="blo§k px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-blue-300 appearance-none dark:text-white dark:border-blue-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
							placeholder=" "
						/>
						<label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-800 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
							Names Of Members Who Attended
						</label>
					</div>

					<div className="relative">
						<input
							type="number"
							id="floating_outlined"
							className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-blue-300 appearance-none dark:text-white dark:border-blue-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
							placeholder=" "
						/>
						<label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-800 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
							Number Of First Timers
						</label>
					</div>

					<div className="relative">
						<input
							type="number"
							id="floating_outlined"
							className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-blue-300 appearance-none dark:text-white dark:border-blue-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
							placeholder=" "
						/>
						<label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-800 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
							Names Of First Timers
						</label>
					</div>

					<div className="relative">
						<input
							type="number"
							id="floating_outlined"
							className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-blue-300 appearance-none dark:text-white dark:border-blue-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
							placeholder=" "
						/>
						<label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-800 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
							Number Of New Converts
						</label>
					</div>

					<div className="relative">
						<textarea
							id="floating_outlined"
							className="blo§k px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-blue-300 appearance-none dark:text-white dark:border-blue-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
							placeholder=" "
						/>
						<label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-800 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
							Names Of New Converts
						</label>
					</div>

					<div className="relative">
						<input
							type="number"
							id="floating_outlined"
							className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-blue-300 appearance-none dark:text-white dark:border-blue-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
							placeholder=" "
						/>
						<label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-800 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
							Started NBS
						</label>
					</div>

					<div className="relative">
						<input
							type="number"
							id="floating_outlined"
							className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-blue-300 appearance-none dark:text-white dark:border-blue-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
							placeholder=" "
						/>
						<label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-800 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
							Finished NBS
						</label>
					</div>

					<div id="fileUpload">
						<FileInput id="file" helperText="Add a picture of your bacenta" />
					</div>

					<button
						type="button"
						className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
					>
						Red to Yellow
					</button>
				</div>
			</Modal.Body>
		</Modal>
	);
};

export default SubmitModal;
