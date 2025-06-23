import Link from "next/link";

type Props = {
    className ?: string
}

export default function Logo({className} : Props) {
    return (
        <Link href='/'>
            <div className={`${className} bg-background text-primary p-2 rounded-lg font-bold m-1`}>Shopfinity</div>
        </Link>
    )
}