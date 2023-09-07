import EditForm from "./edit-form";

export default async function ProfileEditPage() {
	return (
		<div>
			<h2 className="font-semibold text-2xl">회원정보수정</h2>
			<EditForm />
		</div>
	);
}
