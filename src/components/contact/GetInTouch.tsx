'use client';

import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { useForm as useFormSpree } from '@formspree/react';
import { useEffect } from 'react';

type FormData = {
    firstName: string;
    lastName: string;
    email: string;
    subject: string;
    message: string;
};

export default function GetInTouch() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormData>();
    const [state, submitToFormspree] = useFormSpree('mwpbwroz');

    const onSubmit = async (data: FormData) => {
        try {
            await submitToFormspree(data);
        } catch {
            toast.error('An unexpected error occurred. Please try again later.');
        }
    };

    useEffect(() => {
        if (state.succeeded) {
            toast.success('Your message has been sent successfully!');
        } else if (state.errors !== null) {
            toast.error('There was an error sending your message. Please try again later.');
        }
    }, [state, state.succeeded, state.errors]);

    return (
        <section className="mx-auto px-4 2xl:px-0 py-12 md:py-20 w-full max-w-[120rem]">
            <div className="mx-auto w-full max-w-[768px]">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 bg-container-fill p-6 rounded-[12px]">
                    <div className="gap-4 md:gap-8 grid grid-cols-1 md:grid-cols-2">
                        <div>
                            <label htmlFor="firstName" className="opacity-60 font-bold text-primary-text text-xs leading-[160%]">First Name:</label>
                            <input
                                {...register("firstName", { required: "First Name is required" })}
                                type="text"
                                id="firstName"
                                className="p-2 focus:border focus:border-gray-600 border-b border-b-gray-400 focus:rounded-lg focus:outline-none w-full"
                            />
                            {typeof errors.firstName?.message === "string" && (
                                <span className="text-red-500 text-sm">{errors.firstName.message}</span>
                            )}
                        </div>
                        <div>
                            <label htmlFor="lastName" className="opacity-60 font-bold text-primary-text text-xs leading-[160%]">Last Name:</label>
                            <input
                                {...register("lastName", { required: "Last Name is required" })}
                                type="text"
                                id="lastName"
                                className="p-2 focus:border focus:border-gray-600 border-b border-b-gray-400 focus:rounded-lg focus:outline-none w-full"
                            />
                            {typeof errors.lastName?.message === "string" && (
                                <span className="text-red-500 text-sm">{errors.lastName.message}</span>
                            )}
                        </div>

                        <div>
                            <label htmlFor="email" className="opacity-60 font-bold text-primary-text text-xs leading-[160%]">Email:</label>
                            <input
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^\S+@\S+$/i,
                                        message: "Invalid email address"
                                    }
                                })}
                                type="email"
                                id="email"
                                className="p-2 focus:border focus:border-gray-600 border-b border-b-gray-400 focus:rounded-lg focus:outline-none w-full"
                            />
                            {typeof errors.email?.message === "string" && (
                                <span className="text-red-500 text-sm">{errors.email.message}</span>
                            )}
                        </div>

                        <div>
                            <label htmlFor="subject" className="opacity-60 font-bold text-primary-text text-xs leading-[160%]">Subject:</label>
                            <input
                                {...register("subject", { required: "Subject is required" })}
                                type="text"
                                id="subject"
                                className="p-2 focus:border focus:border-gray-600 border-b border-b-gray-400 focus:rounded-lg focus:outline-none w-full"
                            />
                            {typeof errors.subject?.message === "string" && (
                                <span className="text-red-500 text-sm">{errors.subject.message}</span>
                            )}
                        </div>
                    </div>

                    <div>
                        <label htmlFor="message" className="opacity-60 font-bold text-primary-text text-xs leading-[160%]">Message:</label>
                        <textarea
                            {...register("message", { required: "Message is required" })}
                            id="message"
                            rows={5}
                            className="p-2 border border-gray-400 rounded-lg focus:outline-none w-full resize-none"
                        />
                        {typeof errors.message?.message === "string" && (
                            <span className="text-red-500 text-sm">{errors.message.message}</span>
                        )}
                    </div>

                    <div className="flex justify-center">
                        <button type="submit" className="bg-yellow-dark px-8 py-3 rounded-sm font-medium text-black">Send Message</button>
                    </div>
                </form>
            </div>
        </section>
    );
}
