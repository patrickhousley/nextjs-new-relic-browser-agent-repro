export default function Home() {
    return (
        <div>
            <h1 className="font-bold text-2xl pb-2">Next.js Router New Relic Browser Agent Reproduction</h1>
            <p>
                Using the `Link` navigation should work as expected to navigate between pages. The issue happens when
                using the `router.push` method. Navigation does not occur between pages, but you can see the expected
                page fetch request in the Dev Tools Network tab. The `Link` components also stop working after you have
                attempted to navigate with `router.push` method.
            </p>
        </div>
    );
}
