import type { V2_MetaFunction } from "@remix-run/node";
import { Button, Header } from 'ui'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/remix'

export const meta: V2_MetaFunction = () => {
   return [
      { title: "New Remix App" },
      { name: "description", content: "Welcome to Remix!" },
   ];
};

export default function Index() {
   return (
      <div>
         <Header label="Remix">
            <SignedIn>
               <UserButton />
            </SignedIn>
            <SignedOut>
               <SignInButton />
            </SignedOut>
         </Header>
         <h1 className="border-2 border-red-500 text-6xl bg-red-800">Welcome to Remix</h1>
         <Button>Test sfasdf</Button>
         <ul>
            <li>
               <a
                  target="_blank"
                  href="https://remix.run/tutorials/blog"
                  rel="noreferrer noopener"
               >
                  15m Quickstart Blog Tutorial
               </a>
            </li>
            <li>
               <a
                  target="_blank"
                  href="https://remix.run/tutorials/jokes"
                  rel="noreferrer noopener"
               >
                  Deep Dive Jokes App Tutorial
               </a>
            </li>
            <li>
               <a target="_blank" href="https://remix.run/docs" rel="noreferrer noopener">
                  Remix Docs
               </a>
            </li>
         </ul>
      </div>
   );
}
