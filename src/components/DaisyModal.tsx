import React, { forwardRef } from "react";

type DaisyModalProps = {
	title: string;
	content: string;
	onClick(): void;
};

const DaisyModal = forwardRef<HTMLDialogElement, DaisyModalProps>(
	({ title, content, onClick }, ref) => {
		return (
			<dialog ref={ref} className="modal">
				<form method="dialog" className="modal-box rounded-sm">
					<h3 className="font-bold text-base sm:text-lg">{title}</h3>
					<p className="pt-4 text-sm sm:text-base">{content}</p>
					<div className="modal-action">
						<button
							onClick={onClick}
							className="modal-btn bg-gray-300 hover:bg-gray-400"
						>
							확인
						</button>
						<button className="modal-btn bg-gray-200 hover:bg-gray-300">
							취소
						</button>
					</div>
				</form>
			</dialog>
		);
	},
);

DaisyModal.displayName = "DaisyModal";

export default DaisyModal;
