import { auth } from "@/lib/auth/server";
import { NextRequest } from "next/server";

export default auth.middleware({
	// Redirects unauthenticated users to sign-in page
	loginUrl: "/auth/sign-in",
});

export const config = {
	matcher: [
		// Protected routes requiring authentication
		"/account/:path*",
	],
};
// export default async function proxy(request: NextRequest) {
// 	const { auth } = await import("@/lib/auth/server");
// 	return auth.middleware({ loginUrl: "/auth/sign-in" })(request);
// }
