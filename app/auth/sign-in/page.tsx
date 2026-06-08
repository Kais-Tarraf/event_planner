"use client";

import { useActionState } from "react";
import { signInWithEmail } from "./actions";
import Link from "next/link";

export default function SignInForm() {
	const [state, formAction, isPending] = useActionState(signInWithEmail, null);

	return (
		<div className="flex flex-1 items-center justify-center">
			<form
				action={formAction}
				className="w-full max-w-md rounded-2xl bg-[#161617] p-8 shadow-2xl border border-white/5"
			>
				<div className="mb-8">
					<h1 className="text-3xl font-bold text-white">Sign In</h1>
					<p className="mt-2 text-sm text-gray-400">
						Enter your email below to login to your account
					</p>
				</div>

				<div className="space-y-6">
					<div className="space-y-2">
						<label
							htmlFor="email"
							className="block text-sm font-medium text-white"
						>
							Email
						</label>
						<input
							id="email"
							name="email"
							type="email"
							required
							placeholder="m@example.com"
							className="block w-full rounded-lg bg-[#222224] border border-white/10 px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
						/>
					</div>

					<div className="space-y-2">
						<div className="flex items-center justify-between">
							<label
								htmlFor="password"
								className="block text-sm font-medium text-white"
							>
								Password
							</label>
							<Link
								href="/auth/forgot-password"
								className="text-sm text-gray-400 hover:text-white transition-colors"
							>
								Forgot your password?
							</Link>
						</div>
						<input
							id="password"
							name="password"
							type="password"
							required
							placeholder="Password"
							className="block w-full rounded-lg bg-[#222224] border border-white/10 px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
						/>
					</div>

					{state?.error && (
						<div className="rounded-lg bg-red-500/10 px-4 py-3 text-sm text-red-500 border border-red-500/20">
							{state.error}
						</div>
					)}

					<button
						type="submit"
						disabled={isPending}
						className="w-full rounded-lg bg-white px-4 py-3 text-sm font-bold text-black hover:bg-gray-200 disabled:opacity-50 transition-colors cursor-pointer"
					>
						{isPending ? "Logging in..." : "Login"}
					</button>

					<div className="text-center text-sm text-gray-400">
						Don't have an account?{" "}
						<Link
							href="/auth/sign-up"
							className="font-medium text-white hover:underline underline-offset-4"
						>
							Sign Up
						</Link>
					</div>
				</div>
			</form>
		</div>
	);
}
