import Link from "next/link";

export default function Footer(){
    return (
        <div className="w-full flex bg-primary dark:bg-secondary bottom-0 mx-auto justify-center fixed py-2 z-50">
            <div className="ml-2 my-auto">
        </div>
        <div className="flex flex-row justify-center gap-4 mx-auto">
            <Link
                href='https://github.com/wobble-house'
                className={`Github social text-white dark:text-secondary-foreground hover:text-secondary active:text-destructive`}
                passHref
                target="_blank"
                rel="noopener noreferrer">
Github
            </Link>
        </div>
    </div>
    )
}