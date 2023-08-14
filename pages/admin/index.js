import AdminNavBar from '@/components/AdminNavbar'
import withAuth from '@/components/withAuth'

function Admin() {
    return(
        <div className='w-full h-full flex flex-col'>
            <AdminNavBar />
            <div className='bg-red-900 flex h-screen items-center justify-center'>You should not see this content</div>
        </div>    
    )    
}

export default withAuth(Admin);