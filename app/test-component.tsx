"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import type { FormEvent } from "react";

export function TestComponent() {
    const router = useRouter();

    const handleSumbit = (e: FormEvent) => {
        e.preventDefault();

        router.push("/page");
    };

    const buttonClasses = "text-white bg-black p-2";

    return (
        <div className="flex space-x-4 mt-4">
            {/* Note: removing `Link` or setting `prefetch` to true solves the issue   */}
            <Link prefetch={false} className={buttonClasses} href="/page">
                Link
            </Link>

            <button
                className={buttonClasses}
                onClick={() => {
                    router.push("/page");
                }}
            >
                router.push
            </button>
        </div>
    );
}
