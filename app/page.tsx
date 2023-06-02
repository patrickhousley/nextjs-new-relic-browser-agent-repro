import { TestComponent } from "./test-component";

export default function Home() {
    return (
        <div>
            <h1 className="font-bold text-2xl pb-2">Next.js Router New Relic Browser Agent Reproduction</h1>
            <p>
                Clicking the `Link` will work as expected. However, clicking `router.push` does not redirect and also
                brreaks the `Link`.
                <br />
                The issue is related to prefetching the pages, because removing `prefetch={false}` from the `Link`
                component allows the `router.push` method to work. Removing the `Link` component completely does not fix
                the problem.
            </p>

            <TestComponent />
        </div>
    );
}
