export default function BuildTeacher({ teacher }) {

    function countrySwitch(country) {
        switch(country) {
            case 'Taiwan':
                return '/images/tw.png';
            case 'USA':
                return '/images/usa.png';
            case 'Canada':
                return '/images/cn.png';
            case 'UK':
                return '/images/uk.png';
            case 'Ireland':
                return '/images/ire.png';
            case 'New Zealand' :
                return '/images/nz.png';
            case 'Australia':
                return '/images/au.png';
            case 'South Africa':
                return '/images/sa.png';
            default:
                return '';
        }
      };

    return(
        <div className="flex flex-col items-center justify-center rounded-xl gap-2">
            <div className=' w-48 h-48 flex justify-center items-end' >
                <img src={teacher.img_url} className="max-h-48"/>
            </div>
            <div className="flex justify-between items-center w-40 px-3 bg-[#E0D3AF] rounded-s-full rounded-e-full">
                <h4 className="text-lg text-red-900">{teacher.name}</h4>
                <img className="h-4" src={countrySwitch(teacher.country)} />
            </div>
            <p className="text-sm">{teacher.bio}</p>
        </div>
    )
}