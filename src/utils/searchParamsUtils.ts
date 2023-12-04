export function updateSearchParams(
	searchParams: URLSearchParams,
	name: string,
	value: string,
) {
	const params = new URLSearchParams(searchParams.toString());
	params.set(name, value);
	return params.toString();
}

export function clearParamByName(
	searchParams: URLSearchParams,
	name: string,
): string {
	const params = new URLSearchParams(searchParams.toString());
	params.delete(name);
	return params.toString();
}
