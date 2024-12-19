import login from './actions/login'
import Link from "next/link";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";

export default function LoginPage() {
    return (
        <section className="p-6">
            <form
                action={login}
                className="max-w-2xl mx-auto p-8 bg-white shadow-lg rounded-lg"
            >
                <div className="mb-6">
                    <Label htmlFor="email" className="block text-lg font-medium text-gray-700">
                        Email:
                    </Label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>
                <div className="mb-6">
                    <Label htmlFor="password" className="block text-lg font-medium text-gray-700">
                        Password:
                    </Label>
                    <Input
                        id="password"
                        name="password"
                        type="password"
                        required
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>

                <div className="flex gap-4 ">
                    <Button
                        type="submit"
                        className="basis-1/2 bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Login
                    </Button>
                    <Button
                        className="basis-1/2 bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        <Link
                            href={`/signup`}
                        >
                            Sign Up
                        </Link>
                    </Button>
                </div>
            </form>
        </section>
    )
}
