"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export function Header() {
    const router = useRouter();

    return (
        <div className="p-4 border-b">
            <p className="font-bold">Links</p>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/page-1">Page 1</Link>
                </li>
                <li>
                    <Link href="/page-2">Page 2</Link>
                </li>
            </ul>
            <p className="font-bold">router.push</p>
            <ul>
                <li>
                    <button onClick={() => router.push("/")}>Home</button>
                </li>
                <li>
                    <button onClick={() => router.push("/page-1")}>Page 1</button>
                </li>
                <li>
                    <button onClick={() => router.push("/page-2")}>Page 2</button>
                </li>
            </ul>
        </div>
    );
}
