"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
    IconBrandGithub,
    IconBrandGoogle,
    IconBrandOnlyfans,
} from "@tabler/icons-react";
import { Link } from "lucide-react";

export default function SignUp() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted");
    };

    return (
        <div className="wrpe_form flex items-center justify-center h-screen">
            <div className="max-w-md w-full mx-auto rounded-md p-4 md:p-8 bg-white/20 dark:bg-black/70 backdrop-blur-lg">
                {/* <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
                Welcome to Aceternity
            </h2>
            <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
                Login to aceternity if you can because we don&apos;t have a login flow
                yet
            </p> */}

                <form className="my-2" onSubmit={handleSubmit}>
                    <LabelInputContainer className="mb-4">
                        <Label htmlFor="firstname">Full name</Label>
                        <Input id="fullname" placeholder="Tyler" type="text"
                            style={{ backgroundColor: 'rgb(25 19 47)', color: 'white' }}
                        />
                    </LabelInputContainer>
                    <LabelInputContainer className="mb-4">
                        <Label htmlFor="email">E-mail</Label>
                        <Input id="email" placeholder="example@gmail.com" type="email"
                            style={{ backgroundColor: 'rgb(25 19 47)', color: 'white' }}

                        />
                    </LabelInputContainer>
                    <LabelInputContainer className="mb-4">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" placeholder="••••••••" type="password"
                            style={{ backgroundColor: 'rgb(25 19 47)', color: 'white' }}
                        />
                    </LabelInputContainer>
                    <button
                        className="signup_button"
                        type="submit"
                    >
                        Sign up &rarr;
                        <BottomGradient />
                    </button>

                    <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
                    <div className="other_options">If you already have account  <a href="/signin">Sign in</a></div>
                </form>
            </div>
        </div>
    );
}
const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};

const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};    
