import AdminNavBar from '@/components/AdminNavbar'
import withAuth from '@/components/withAuth'
import Head from 'next/head';

function Admin() {
    return(
        <div className='w-full h-full flex flex-col'>
            <Head>
                <title>Sky Education | Admin Page</title>
            </Head>
            <AdminNavBar />
            <div className='bg-red-900 flex h-screen items-center justify-center'>
                <div className=' text-5xl w-2/3 text-center'>
                    Hey Mario, you can navigate the admin page using the buttons above.
                </div>
            </div>
        </div>    
    )    
}

export default withAuth(Admin);