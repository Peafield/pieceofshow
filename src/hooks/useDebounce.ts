import { useCallback, useRef } from "react";

export const useDebounce = (callback: () => void, delay: number) => {
	const timeoutRef = useRef<NodeJS.Timeout | null>(null);
	const debounceCallback = useCallback(() => {
		if (timeoutRef.current) clearTimeout(timeoutRef.current);
		timeoutRef.current = setTimeout(() => {
			callback();
		}, delay);
	}, [callback, delay]);
	return debounceCallback;
};
