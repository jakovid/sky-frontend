import AdminNavBar from '@/components/AdminNavbar'
import withAuth from '@/components/withAuth'
import Head from 'next/head';

function Admin() {
    return(
        <div className='w-full h-full flex flex-col'>
            <Head>
                <title>Sky Education | Admin Page</title>
            </Head>
            <div className='bg-red-900 flex sm:hidden w-screen h-screen justify-center items-center text-2xl text-center p-8'>
                Please switch to desktop to edit the website.
            </div>
            <div className='hidden sm:flex flex-col w-screen'>
                <AdminNavBar />
                <div className='bg-red-900 flex h-screen items-center justify-center'>
                    <div className=' text-5xl w-2/3 text-center'>
                        Hey Boss, you can navigate the admin page using the buttons above.
                    </div>
                </div>
            </div>
        </div>    
    )    
}

export default withAuth(Admin);