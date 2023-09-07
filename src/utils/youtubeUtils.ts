export function convertToEmbeddedURL(url: string) {
	const regExp =
		/^(?:https?:\/\/)?(?:www\.)?(?:(?:youtube.com\/(?:(?:watch\?v=)|(?:embed\/))([a-zA-Z0-9-]{11}))|(?:youtu.be\/([a-zA-Z0-9-]{11})))/;
	const match = url.match(regExp);
	const videoId = match ? match[1] || match[2] : undefined;
	return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
}
