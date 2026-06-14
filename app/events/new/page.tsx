import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

const NewEventPage = async () => {
	return (
		<div className="mx-auto w-full max-w-2xl">
			<Card className="px-4 py-4">
				<CardHeader>
					<CardTitle>Create Event</CardTitle>
				</CardHeader>
				<CardContent>
					<form className="flex flex-col gap-6">
						<Field>
							<FieldLabel htmlFor="title">Title</FieldLabel>
							<Input
								id="title"
								name="title"
								required
								placeholder="Team dinner..."
							/>
						</Field>
						<Field>
							<FieldLabel htmlFor="description">Description</FieldLabel>
							<Textarea
								id="description"
								name="description"
								placeholder="Optional details about the event"
							/>
						</Field>
						<Field>
							<FieldLabel htmlFor="location">Location</FieldLabel>
							<Input
								id="location"
								name="location"
								required
								placeholder="Option Location"
							/>
						</Field>
						<Field>
							<FieldLabel
								htmlFor="eventDate"
								className="text-sm text-muted-foreground"
							>
								Date and Time
							</FieldLabel>
							<Input id="eventDate" name="eventDate" type="datetime-local" />
							<FieldError className="text-muted-foreground">
								Optional, you can set this later.
							</FieldError>
						</Field>
						<div className="flex items-center gap-3">
							<Button type="submit">Create Event</Button>
							<Button type="button" variant={"outline"} asChild>
								<Link href={"/dashboard"}>Cancel</Link>
							</Button>
						</div>
					</form>
				</CardContent>
			</Card>
		</div>
	);
};

export default NewEventPage;
