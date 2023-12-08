"use client";

import Link from "next/link";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";

import supabase from "@/lib/supabase/client";
import DaisyModal from "@/components/DaisyModal";
import { useSupabase } from "@/components/providers/supabase-provider";

async function fetchPostData(postId: string): Promise<Post | null> {
	const { data } = await supabase
		.from("posts")
		.select("*")
		.match({ id: postId })
		.single();
	return data;
}

type PostContainerProps = {
	postId: string;
	serverPost: Post;
};

function PostContainer({ postId, serverPost }: PostContainerProps) {
	const router = useRouter();
	const queryClient = useQueryClient();
	const { supabase, session } = useSupabase();
	const modalRef = useRef<HTMLDialogElement | null>(null);
	const { data: post, isError } = useQuery({
		queryKey: ["post", postId],
		queryFn: () => fetchPostData(postId),
		initialData: serverPost,
		suspense: true,
	});

	const increaseViewCount = useCallback(async () => {
		await supabase
			.from("posts")
			.update({ view_count: post!.view_count + 1 })
			.eq("id", postId);
	}, [post, postId, supabase]);

	useEffect(() => {
		const viewedPosts = localStorage.getItem("viewed_posts");
		if (viewedPosts) {
			const viewedPostIds = JSON.parse(viewedPosts);
			if (!viewedPostIds[postId]) {
				increaseViewCount();
				localStorage.setItem(
					"viewed_posts",
					JSON.stringify({
						...viewedPostIds,
						[postId]: true,
					}),
				);
			}
		} else {
			increaseViewCount();
			localStorage.setItem("viewed_posts", JSON.stringify({ [postId]: true }));
		}
	}, [post, postId, increaseViewCount]);

	if (!post || isError) {
		return (
			<div className="w-full h-full flex items-center justify-center">
				앗, 게시글을 불러오지 못했습니다.
			</div>
		);
	}

	function showDeletePostModal() {
		modalRef.current?.showModal();
	}

	// 삭제2번눌러도똑같은결과나옴. 삭제보단글작성주문연타했을때문제가있어서 mutation? 주문2번 글쓰기2번 막으려고 useMutation 쓴다!!
	// 로딩안쓰면mutation해도다를게없음. isloading할수잇고 muatation안써도optimistic쓸수잇다.
	async function deletePost() {
		const { error } = await supabase.from("posts").delete().eq("id", postId);

		if (!error) {
			router.push("/community");
			queryClient.invalidateQueries(["posts"]);
		} else {
			toast.error(
				`삭제하는 동안 문제가 발생했습니다. 나중에 다시 시도해 주세요! ${error.message}`,
			);
		}
	}

	return (
		<>
			<DaisyModal
				ref={modalRef}
				title="정말 게시글을 삭제하실 건가요?"
				content="ESC 키를 누르거나 아래 버튼을 클릭하세요!"
				onClick={deletePost}
			/>
			<header className="flex flex-col gap-y-1">
				<div className="flex items-center justify-between">
					<div className="flex items-center flex-wrap">
						<Link
							href={`/community?cat=${post.category_name}`}
							className="px-1 rounded-sm mr-1 text-sm sm:text-base bg-pantone-champagne hover:bg-pantone-latte"
						>
							{post.category_name}
						</Link>
						<h2 className="font-semibold text-base sm:text-lg">{post.title}</h2>
					</div>
					{session?.user.id === post.user_id && (
						<div className="dropdown dropdown-end">
							<label
								tabIndex={0}
								className="cursor-pointer text-lg font-medium hover:text-pantone-brandy-sniffer"
							>
								☰
							</label>
							<ul
								tabIndex={0}
								className="dropdown-content z-[1] p-1 text-sm shadow bg-base-100 rounded-sm w-24 transition-all"
							>
								<li className="w-full flex items-center justify-center p-1 transition-all hover:bg-gray-100">
									<Link
										href={{
											pathname: `/community/${postId}/edit`,
										}}
										className="flex items-center"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth="1.5"
											stroke="currentColor"
											className="w-3 h-3"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
											/>
										</svg>
										<span className="ml-1">수정하기</span>
									</Link>
								</li>
								<li className="w-full flex items-center justify-center p-1 transition-all hover:bg-gray-100">
									<button
										className="flex items-center"
										onClick={showDeletePostModal}
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth={1.5}
											stroke="currentColor"
											className="w-3 h-3"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
											/>
										</svg>
										<span className="ml-1">삭제하기</span>
									</button>
								</li>
							</ul>
						</div>
					)}
				</div>
				<div className="flex items-center text-xs sm:text-sm">
					<Link
						href={`/profile/${post.user_id}`}
						className="font-medium hover:underline"
					>
						{post.nickname}
					</Link>
					<span className="mx-1">·</span>
					<time dateTime={post.created_at}>
						{new Date(post.created_at).toLocaleString()}
					</time>
					{post.created_at !== post.updated_at && (
						<p className="mx-1">
							· <span className="text-peachmoon-rose">수정됨</span>
						</p>
					)}
					<span className="">·</span>
					<span className="mx-1 flex items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-4 h-4"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
							/>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
							/>
						</svg>
						{post.view_count}
					</span>
				</div>
			</header>
			<div
				dangerouslySetInnerHTML={{ __html: post.content }}
				className="comm-scrollbar border-t my-1 p-2 whitespace-pre-wrap text-sm sm:text-base flex-1 overflow-y-scroll mt-2 bg-white"
			/>
		</>
	);
}

export default PostContainer;
