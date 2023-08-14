import Link from "next/link"
import { useRouter } from 'next/router';

export default function AdminNavbar() {
    const router = useRouter();

    const handleLogout = () => {
        // 1. Remove the JWT from local storage
        localStorage.removeItem('token');

        // 2. (Optional) Update your application state if using state management
        
        // 3. Redirect the user to the login page or homepage
        router.push('/admin/login'); // or another path like '/'
    };

    return (
        <header className="bg-blue-950">
            <div className="flex justify-center gap-4 p-4">
                <Link href="/admin">
                    <h1 className="text-xl border-4 p-2 rounded-s-full rounded-e-full">Admin</h1>
                </Link>
                <Link href="/admin/teachers">
                    <h1 className="text-xl border-4 p-2 rounded-s-full rounded-e-full">Manage Teachers</h1>
                </Link>
                <Link href="/admin/home">
                    <h1 className="text-xl border-4 p-2 rounded-s-full rounded-e-full">Edit Home</h1>
                </Link>
                <Link href="/admin/about-us">
                    <h1 className="text-xl border-4 p-2 rounded-s-full rounded-e-full">Edit About Us</h1>
                </Link>
                <Link href="/admin/our-team">
                    <h1 className="text-xl border-4 p-2 rounded-s-full rounded-e-full">Edit Our Team</h1>
                </Link>
                <Link href="/admin/our-classes">
                    <h1 className="text-xl border-4 p-2 rounded-s-full rounded-e-full">Edit Our Classes</h1>
                </Link>
                <Link href="/admin/contact-us">
                    <h1 className="text-xl border-4 p-2 rounded-s-full rounded-e-full">Edit Contact Us</h1>
                </Link>
                <h1 className="text-xl border-4 p-2 rounded-s-full rounded-e-full cursor-pointer" onClick={handleLogout}>Log Out</h1>
            </div>
        </header>
    )
}